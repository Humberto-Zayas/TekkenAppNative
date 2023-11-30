// CardListComponent.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardListComponent from '../CardListComponent';
import SavedListComponent from '../SavedListComponent';

const Tab = createBottomTabNavigator();

const CardScreen = ({ route }) => {
  const { character } = route.params;
  return <CardListComponent route={route} navigation={navigation} character={character} />;
};

const SavedScreen = ({ navigation }) => {
  return <SavedListComponent navigation={navigation} />;
};

const CardNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cards" component={CardScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
    </Tab.Navigator>
  );
};

export default CardNavigator;
