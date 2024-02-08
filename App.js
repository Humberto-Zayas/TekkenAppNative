import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './utils/AuthContext';
import HomeScreen from './components/HomeScreen';
import BoxComponent from './components/BoxComponent';
import CardListComponent from './components/CardListComponent';
import CardComponent from './components/CardComponent';
import CardDetailComponent from './components/CardComponent/CardDetailComponent';
import CreateCardComponent from './components/CreateCardComponent';
import EditCardComponent from './components/EditCardComponent';
import CreatorCardListComponent from './components/CreatorCardListComponent';
import MyCardListComponent from './components/MyCardListComponent';
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
          <Stack.Screen name="CardDetailComponent" component={CardDetailComponent} />
          <Stack.Screen name="CreateCardComponent" component={CreateCardComponent} />
          <Stack.Screen name="EditCardComponent" component={EditCardComponent} />
          <Stack.Screen name="CreatorCardListComponent" component={CreatorCardListComponent} />
          <Stack.Screen name="MyCardListComponent" component={MyCardListComponent} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AuthProvider>
  );
}
