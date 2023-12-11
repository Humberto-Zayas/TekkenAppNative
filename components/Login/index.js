import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ route, navigation }) => {
  const { isSignUp } = route.params || { isSignUp: false };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    // Perform login logic using Fetch API
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log('Login successful!');
      } else {
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignup = async () => {
    // Perform signup logic using Fetch API
    try {
      const registrationDate = new Date().getTime(); // Get current timestamp as registrationDate
  
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
          registrationDate, // Include registrationDate in the request body
        }),
      });
  
      if (response.ok) {
        console.log('Signup successful!');
      } else {
        console.error('Signup failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleToggle = () => {
    // Navigate to the same screen with the opposite isSignUp value
    navigation.setParams({ isSignUp: !isSignUp });
  };

  const handleAction = () => {
    // Run login or signup logic based on isSignUp value
    if (isSignUp) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  return (
    <View style={styles.container}>
      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Login'}</Text>
        {isSignUp && (
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAction}>
          <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Login'}</Text>
        </TouchableOpacity>
      </View>

      {/* Toggle Button */}
      <TouchableOpacity onPress={handleToggle}>
        <Text style={styles.toggleText}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
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
