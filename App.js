import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './utils/AuthContext';
import HomeScreen from './components/HomeScreen';
import CardListComponent from './components/CardListComponent';
import CardComponent from './components/CardComponent';
import CardDetailComponent from './components/CardComponent/CardDetailComponent';
import CreateCardComponent from './components/CreateCardComponent';
import CreatorCardListComponent from './components/CreatorCardListComponent';
import MyCardListComponent from './components/MyCardListComponent';
import Login from './components/Login';
import CustomHeader from './components/CustomHeader';

const Stack = createStackNavigator();

export default function App() {

  return (
    <AuthProvider>
      <View style={styles.container}>
        <NavigationContainer>
          {/* <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}> */}
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: (props) => <CustomHeader  {...props} />,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="CardList" component={CardListComponent} />
            <Stack.Screen name="CardComponent" component={CardComponent} />
            <Stack.Screen name="CardDetailComponent" component={CardDetailComponent} />
            <Stack.Screen name="CreateCardComponent" component={CreateCardComponent} />
            <Stack.Screen name="CreatorCardListComponent" component={CreatorCardListComponent} />
            <Stack.Screen name="MyCardListComponent" component={MyCardListComponent} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Ensure relative positioning for modal and overlays
  },
});
