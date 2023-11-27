import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const HeroComponent = ({ name, thumbnail, rating }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false); // New state for bookmark

  const handleStarPress = (starNumber) => {
    setSelectedRating(starNumber);
  };

  const handleBookmarkPress = () => {
    setIsBookmarked(!isBookmarked);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starIcon = selectedRating >= i ? 'star' : 'star-o'; // Use FontAwesome names
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
          <FontAwesome name={starIcon} size={24} color="gold" style={styles.starIcon} />
        </TouchableOpacity>
      );
    }

    return stars;
  };

  return (
    <View style={styles.heroContainer}>
      <Image source={thumbnail} style={styles.thumbnail} />
      <View style={styles.heroInfo}>
        <Text style={styles.heroName}>{name}</Text>
        <Text style={styles.heroRating}>Rating: {rating}</Text>
      </View>
      <View style={styles.ratingContainer}>
        {/* Bookmark icon */}
        <TouchableOpacity onPress={handleBookmarkPress}>
          <FontAwesome
            name={isBookmarked ? 'bookmark' : 'bookmark-o'}
            size={24}
            color="blue"
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
        {/* Star icons */}
        <View style={styles.starContainer}>{renderStars()}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align to the bottom of the container
    justifyContent: 'space-between', // Align to the right
    marginBottom: 10,
    width: '100%', // Make the component full width
    paddingHorizontal: 10, // Add padding for better spacing
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
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  heroRating: {
    fontSize: 16,
    marginRight: 5,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginHorizontal: 2,
  },
  bookmarkIcon: {
    marginVertical: 2,
  },
});

export default HeroComponent;
