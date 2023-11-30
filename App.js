import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import BoxComponent from './components/BoxComponent';
import CardListComponent from './components/CardListComponent';
import CardComponent from './components/CardComponent';
import SavedListComponent from './components/SavedListComponent'; // Import the SavedListComponent

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CardNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cards" component={CardListComponent} />
      <Tab.Screen name="Saved" component={SavedListComponent} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BoxComponent" component={BoxComponent} />
        <Stack.Screen name="CardList">
          {() => ( // Wrap the component with an anonymous function
            <CardNavigator />
          )}
        </Stack.Screen>
        <Stack.Screen name="CardComponent" component={CardComponent} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
