import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import Login from '../components/Login';
import { useAuth } from '../utils/AuthContext';

const LoginPage = () => {
  const { user, token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && token) {
      // If user exists and token is present, redirect to home
      router.push('/');
    }
  }, [user, token, router]);

  return <Login />;
};

export default LoginPage;
