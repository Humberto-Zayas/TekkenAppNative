import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HeroComponent = ({ name, thumbnail, rating }) => (
  <View style={styles.heroContainer}>
    <Image source={ thumbnail } style={styles.thumbnail} />
    <View style={styles.heroInfo}>
      <Text style={styles.heroName}>{name}</Text>
      <Text style={styles.heroRating}>Rating: {rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  heroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25, // Adjust border radius to make it circular
    marginRight: 10,
  },
  heroInfo: {
    flex: 1,
  },
  heroName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  heroRating: {
    fontSize: 16,
  },
});

export default HeroComponent;
