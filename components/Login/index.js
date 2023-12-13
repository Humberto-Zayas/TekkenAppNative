import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = ({ route }) => {
  const { isSignUp } = route.params || { isSignUp: false };
  const [signUp, setSignUp] = useState(isSignUp);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
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
        // Perform actions after successful login
      } else {
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  const handleSignup = async () => {
    try {
      const registrationDate = new Date().getTime();

      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase(), // Convert email to lowercase
          password,
          username,
          registrationDate,
        }),
      });

      if (response.ok) {
        console.log('Signup successful!');
        // Navigate back to the home screen or any other screen
        navigation.goBack();
      } else {
        console.error('Signup failed.');
      }
    } catch (error) {
      console.error('Error:', error);
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
            onChangeText={(text) => setEmail(text.toLowerCase())} // Convert email to lowercase
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
            onChangeText={(text) => setEmail(text.toLowerCase())} // Convert email to lowercase
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
