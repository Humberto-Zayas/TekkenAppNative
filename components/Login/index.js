import React, { useState } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { REACT_APP_API_BASE_URL } from '@env';
import { useAuth } from '../../utils/AuthContext';

const Login = ({ route }) => {
  const { isSignUp } = route.params || { isSignUp: false };
  const [signUp, setSignUp] = useState(isSignUp);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
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
          navigation.navigate('Home');
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
        Alert.alert('Signup Successful', 'You can now log in with your credentials.', [
          {
            text: 'OK',
            onPress: () => setSignUp(false),
          },
        ]);
      } else if (response.status === 409) {
        const responseData = await response.json();
        
        if (responseData.error === "User with this email already exists") {
          Alert.alert('Signup Failed', 'User with this email already exists.');
        } else if (responseData.error === "Username is already taken") {
          Alert.alert('Signup Failed', 'Username is already taken.');
        } else {
          Alert.alert('Signup Failed', 'An error occurred. Please try again.');
        }
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
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{signUp ? 'Sign Up' : 'Login'}</Text>
        {signUp && (
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text.toLowerCase())}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '80%',
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
