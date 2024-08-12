import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    userId: null,
    token: null,
    refreshToken: null,
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const storedToken = await AsyncStorage.getItem('token');
        const storedRefreshToken = await AsyncStorage.getItem('refreshToken');

        if (storedUser && storedToken && storedRefreshToken) {
          const parsedUser = JSON.parse(storedUser);
          setState((prevState) => ({
            ...prevState,
            user: parsedUser,
            userId: parsedUser._id,
            token: storedToken,
            refreshToken: storedRefreshToken,
          }));

          // Check if the access token is expired
          const isTokenExpired = checkTokenExpiration(storedToken);
          if (isTokenExpired) {
            await refreshAccessToken(storedRefreshToken);
          }
        }
      } catch (error) {
        console.error('Error retrieving user from storage:', error);
      }
    };

    checkUser();
  }, []);

  const checkTokenExpiration = (token) => {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  };

  const login = async (userData, token, refreshToken) => {

    if (!token || !refreshToken) {
      console.error('Token or refresh token is undefined');
      return;
    }

    setState((prevState) => ({
      ...prevState,
      user: userData,
      userId: userData._id,
      token,
      refreshToken,
    }));

    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('refreshToken', refreshToken);
      console.log('User, token, and refresh token saved');
    } catch (error) {
      console.error('Error saving user data to storage:', error);
    }
  };

  const logout = async () => {
    setState((prevState) => ({
      ...prevState,
      user: null,
      userId: null,
      token: null,
      refreshToken: null,
    }));
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('refreshToken');
      console.log('User data removed from storage');
    } catch (error) {
      console.error('Error removing user data from storage:', error);
    }
  };

  const refreshAccessToken = async (refreshToken) => {
    try {
      console.log('Refreshing access token...');
      const response = await fetch(`${REACT_APP_API_BASE_URL}/refresh-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        throw new Error('Failed to refresh token');
      }

      const data = await response.json();
      const { token: newToken } = data;

      setState((prevState) => ({ ...prevState, token: newToken }));
      await AsyncStorage.setItem('token', newToken);
      console.log('Access token refreshed');
    } catch (error) {
      console.error('Error refreshing access token:', error);
      logout();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      refreshAccessToken(state.refreshToken);
    }, 55 * 60 * 1000); // Refresh token every 55 minutes (5 minutes before it expires)

    return () => clearInterval(interval);
  }, [state.refreshToken]);

  const value = { user: state.user, userId: state.userId, token: state.token, login, logout, refreshAccessToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
