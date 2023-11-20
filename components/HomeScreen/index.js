// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const boxTitles = Array.from({ length: 32 }, (_, index) => `Box ${index + 1}`);

  const handleBoxPress = () => {
    navigation.navigate('CardList');
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {boxTitles.map((title, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => navigation.navigate('CardList', { title })}
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

export default HomeScreen;
