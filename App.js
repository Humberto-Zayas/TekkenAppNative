// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BoxComponent from './components/BoxComponent';

export default function App() {
  const boxTitles = Array.from({ length: 32 }, (_, index) => `Box ${index + 1}`);
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxPress = (title) => {
    setSelectedBox(title);
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
      {selectedBox && <BoxComponent title={selectedBox} />}
      <StatusBar style="auto" />
    </View>
  );
}

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
