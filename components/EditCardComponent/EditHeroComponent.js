import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const EditHeroComponent = ({ name, thumbnail, onCardNameChange }) => {
  return (
    <View style={styles.heroContainer}>
      <Image source={thumbnail} style={styles.thumbnail} />
      <View style={styles.heroInfo}>
        <TextInput
          style={styles.heroNameInput}
          placeholder="Enter A Card Name"
          value={name}
          onChangeText={(text) => onCardNameChange(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  heroInfo: {
    flex: 1,
  },
  heroNameInput: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditHeroComponent;
