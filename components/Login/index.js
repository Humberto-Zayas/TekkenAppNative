import React, { useState } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { REACT_APP_API_BASE_URL } from '@env';
import { useAuth } from '../../utils/AuthContext';
import { themeStyles } from '../../styles/styles';

const Login = () => {
  const { isSignUp } = useLocalSearchParams() || { isSignUp: false };
  const [signUp, setSignUp] = useState(isSignUp === 'true');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        const { token, refreshToken, username, userId } = userData;

        if (token && refreshToken && username && userId) {
          login({ username, userId }, token, refreshToken);
          router.push('/'); // Redirect to the home page
        } else {
          Alert.alert('Login Error', 'Token or refresh token missing in the response');
        }
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      Alert.alert('Login Error', 'An error occurred during login. Please try again later.');
      console.error('Error during login:', error);
    }
  };

  const validateSignup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password should be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (!validateSignup()) return;

    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Parse the response data
        const responseData = await response.json();
        const { token, refreshToken, userId } = responseData;

        if (token && refreshToken && userId) {
          // Automatically log the user in
          login({ username, userId }, token, refreshToken);
          Alert.alert('Signup Successful', 'You are now logged in!', [
            {
              text: 'OK',
              onPress: () => router.push('/'), // Redirect to home after successful login
            },
          ]);
        } else {
          Alert.alert('Signup Error', 'Failed to retrieve login details. Please log in manually.'[
            {
              text: 'OK',
              onPress: () => setSignUp(false),
            }
          ]);
        }
      } else if (response.status === 409) {
        const responseData = await response.json();
        Alert.alert('Signup Failed', responseData.error || 'An error occurred. Please try again.');
      } else {
        const responseData = await response.json();
        Alert.alert('Signup Failed', responseData.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      Alert.alert('Signup Error', 'An error occurred during signup. Please try again later.');
      console.error('Error during signup:', error);
    }
  };

  const handleToggle = () => {
    setSignUp(!signUp);
  };

  const handleAction = () => {
    if (signUp) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <View style={themeStyles.screen}>
      <View style={[themeStyles.container, styles.container]}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>{signUp ? 'Sign Up' : 'Login'}</Text>
          {signUp && (
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          )}
          {signUp ? (
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          ) : (
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text.toLowerCase())}
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleAction}>
            <Text style={styles.buttonText}>{signUp ? 'Sign Up' : 'Login'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleToggle}>
          <Text style={styles.toggleText}>
            {signUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  toggleText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
  },
});

export default Login;
