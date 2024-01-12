import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './utils/AuthContext'; // Adjust the path accordingly
import HomeScreen from './components/HomeScreen';
import BoxComponent from './components/BoxComponent';
import CardListComponent from './components/CardListComponent';
import CardComponent from './components/CardComponent';
import CreateCardComponent from './components/CreateCardComponent';
import Login from './components/Login';
import CustomHeader from './components/CustomHeader';

const Stack = createStackNavigator();

export default function App() {

  return (
    <AuthProvider>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}> */}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomHeader  {...props} />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BoxComponent" component={BoxComponent} />
          <Stack.Screen name="CardList" component={CardListComponent} />
          <Stack.Screen name="CardComponent" component={CardComponent} />
          <Stack.Screen name="CreateCardComponent" component={CreateCardComponent} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}
