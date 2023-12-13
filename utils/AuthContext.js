// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in (you can modify this logic based on your app's needs)
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error retrieving user from storage:', error);
      }
    };

    checkUser();
  }, []);

  const login = (userData) => {
    // Perform login logic (you can modify this based on your server response)
    setUser(userData);
    AsyncStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    // Perform logout logic
    setUser(null);
    AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
