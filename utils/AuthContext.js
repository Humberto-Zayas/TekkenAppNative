import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    userId: null,
    token: null,
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const storedToken = await AsyncStorage.getItem('token');

        if (storedUser && storedToken) {
          const parsedUser = JSON.parse(storedUser);
          setState((prevState) => ({
            ...prevState,
            user: parsedUser,
            userId: parsedUser._id,
            token: storedToken,
          }));
        }
      } catch (error) {
        console.error('Error retrieving user from storage:', error);
      }
    };

    checkUser();
  }, []);

  const login = async (userData, token) => {
    if (!token) {
      console.error('Token is undefined');
      return;
    }

    setState((prevState) => ({
      ...prevState,
      user: userData,
      userId: userData._id,
      token,
    }));

    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      await AsyncStorage.setItem('token', token);
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
    }));
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('token');
      console.log('User data removed from storage');
    } catch (error) {
      console.error('Error removing user data from storage:', error);
    }
  };

  const value = { user: state.user, userId: state.userId, token: state.token, login, logout };

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
