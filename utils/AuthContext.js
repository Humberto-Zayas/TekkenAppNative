// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    userId: null, // Added userId state
  });

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setState((prevState) => ({ ...prevState, user: parsedUser, userId: parsedUser._id }));
        }
      } catch (error) {
        console.error('Error retrieving user from storage:', error);
      }
    };

    checkUser();
  }, []);

  const login = (userData) => {
    setState((prevState) => ({ ...prevState, user: userData, userId: userData._id }));
    AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setState((prevState) => ({ ...prevState, user: null, userId: null }));
    AsyncStorage.removeItem('user');
  };

  const value = { user: state.user, userId: state.userId, login, logout };

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
