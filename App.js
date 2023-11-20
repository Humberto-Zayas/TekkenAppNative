import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import BoxComponent from './components/BoxComponent';
import CardListComponent from './components/CardListComponent';
import CardComponent from './components/CardComponent'; // Import the CardComponent

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BoxComponent" component={BoxComponent} />
        <Stack.Screen name="CardList" component={CardListComponent} />
        <Stack.Screen name="CardComponent" component={CardComponent} /> 
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
