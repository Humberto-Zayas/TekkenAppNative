import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { format } from 'date-fns';

const HeroComponent = ({ card, user, rating, isBookmarked, toggleBookmark, onRatingChange, handleCreatorPress }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleStarPress = (starNumber) => {
    setSelectedRating(starNumber);
    onRatingChange(starNumber); // Call the onRatingChange callback
  };

  const handleBookmarkPress = () => {
    toggleBookmark();
  };

  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
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

  const getBackgroundColor = (rating) => {
    if (rating >= 4.5) {
      return 'green';
    } else if (rating >= 3) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  const ratingBackgroundColor = getBackgroundColor(selectedRating !== null ? selectedRating : rating);

  return (
    <View style={[styles.heroContainer, { backgroundColor: ratingBackgroundColor }]}>
      {/* <Image source={card.thumbnail} style={styles.thumbnail} /> */}
      <View style={styles.heroInfo}>
        <Text style={styles.heroName}>{card.cardName}</Text>
        <Text style={styles.heroRating}>Rating: {selectedRating !== null ? selectedRating : rating}</Text>
        <Text onPress={() => handleCreatorPress()} style={styles.heroRating}>
          {card.username}
        </Text>
        <Text style={styles.heroRating}>
          {card.lastEditedAt
            ? `Last Edited: ${format(new Date(card.lastEditedAt), 'MMM dd, yyyy HH:mm')}`
            : `Created: ${format(new Date(card.createdAt), 'MMM dd, yyyy HH:mm')}`}
        </Text>
      </View>
      <View style={styles.ratingContainer}>
        {user?.userId === card?.userId && (
          <TouchableOpacity onPress={openMenu}>
            <FontAwesome name="ellipsis-h" size={24} color="blue" style={styles.menuIcon} />
          </TouchableOpacity>
        )}
        <View style={styles.starContainer}>{renderStars()}</View>
      </View>
      <Modal
        animationType="slide"
        visible={isMenuVisible}
        onRequestClose={closeMenu}
        transparent
        backdropTransitionOutTiming={0.3}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1} // Add this line
          onPressOut={closeMenu} // Add this line
        >
          <View style={styles.modalContainer}>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="edit" size={24} color="blue" style={styles.menuItemIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="trash" size={24} color="red" style={styles.menuItemIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleBookmarkPress}>
                <FontAwesome
                  name={isBookmarked ? 'bookmark' : 'bookmark-o'}
                  size={24}
                  color="blue"
                  style={styles.bookmarkIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default HeroComponent;
