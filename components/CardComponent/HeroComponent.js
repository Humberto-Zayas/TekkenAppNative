import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const HeroComponent = ({ name, thumbnail, rating, isBookmarked, toggleBookmark, onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleStarPress = (starNumber) => {
    setSelectedRating(starNumber);
    onRatingChange(starNumber); // Call the onRatingChange callback
  };

  const handleBookmarkPress = () => {
    toggleBookmark();
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starIcon = selectedRating !== null && selectedRating >= i ? 'star' : 'star-o';
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
        <Text style={styles.heroRating}>Rating: {selectedRating !== null ? selectedRating : rating}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <TouchableOpacity onPress={handleBookmarkPress}>
          <FontAwesome
            name={isBookmarked ? 'bookmark' : 'bookmark-o'}
            size={24}
            color="blue"
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
        <View style={styles.starContainer}>{renderStars()}</View>
      </View>
    </View>
  );
};

export default HeroComponent;
