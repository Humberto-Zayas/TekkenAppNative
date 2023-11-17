// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BoxComponent from './components/BoxComponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BoxComponent" component={BoxComponent} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  const boxTitles = Array.from({ length: 32 }, (_, index) => `Box ${index + 1}`);

  const handleBoxPress = (title) => {
    navigation.navigate('BoxComponent', { title });
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {boxTitles.map((title, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => handleBoxPress(title)}
          >
            <Text>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    width: 80,
    height: 80,
    margin: 8,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
