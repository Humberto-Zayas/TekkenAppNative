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
  const { login } = useAuth(); // Use the useAuth hook to access authentication context

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
          console.error('Token or refresh token missing in the response');
        }
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  
  const handleSignup = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (response.ok) {
        // Signup successful, show an alert message
        Alert.alert('Signup Successful', 'You can now login with your credentials.', [
          {
            text: 'OK',
            onPress: () => {
              // Navigate to the login screen
              setSignUp(false);
            },
          },
        ]);
      } else {
        // Signup failed, show an error alert
        const responseData = await response.json();
        Alert.alert('Signup Failed', responseData.error, [
          {
            text: 'OK',
            onPress: () => {
              // Optionally, you can handle retries or other actions here
            },
          },
        ]);
        console.error('Signup failed:', responseData.error);
      }
    } catch (error) {
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
