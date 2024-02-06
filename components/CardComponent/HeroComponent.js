import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { format } from 'date-fns';

const RatingModal = ({ visible, onClose, onStarPress, selectedRating }) => {
  return (
    <Modal animationType="slide" visible={visible} transparent>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.menuContainer}>
            {[1, 2, 3, 4, 5].map((i) => (
              <TouchableOpacity key={i} onPress={() => onStarPress(i)}>
                <FontAwesome
                  name={selectedRating !== null && selectedRating >= i ? 'star' : 'star-o'}
                  size={24}
                  color="gold"
                  style={styles.starIcon}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const HeroComponent = ({ card, user, rating, isBookmarked, toggleBookmark, onRatingChange, handleCreatorPress }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isRatingModalVisible, setRatingModalVisible] = useState(false);

  const handleStarPress = (starNumber) => {
    setSelectedRating(starNumber);
    onRatingChange(starNumber);
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

  const openRatingModal = () => {
    setRatingModalVisible(true);
  };

  const closeRatingModal = () => {
    setRatingModalVisible(false);
  };

  const handleDeletePress = async () => {
    try {
      // Assuming you have the card ID in card._id
      const response = await fetch(`${REACT_APP_API_BASE_URL}/cards/${card._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user?.token}`, // Add your access token here
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user.userId
        }),
      });

      if (response.ok) {
        // Handle success, you might want to refresh your card list or take other actions
        console.log('Card deleted successfully');
      } else {
        // Handle errors, show an alert or other feedback to the user
        console.error('Error deleting card:', response.status);
      }
    } catch (error) {
      console.error('Error deleting card:', error);
      // Handle other errors
    }
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
          <>
            <TouchableOpacity onPress={openMenu}>
              <FontAwesome name="ellipsis-h" size={24} color="blue" style={styles.menuIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openRatingModal}>
              <FontAwesome name="star" size={24} color="gold" style={styles.starIcon} />
            </TouchableOpacity>
          </>
        )}
      </View>
      <RatingModal
        visible={isRatingModalVisible}
        onClose={closeRatingModal}
        onStarPress={handleStarPress}
        selectedRating={selectedRating}
      />
      <Modal
        animationType="slide"
        visible={isMenuVisible}
        onRequestClose={closeMenu}
        transparent
        backdropTransitionOutTiming={0}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={closeMenu}
        >
          <View style={styles.modalContainer}>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.menuItem}>
                <FontAwesome name="edit" size={24} color="blue" style={styles.menuItemIcon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={handleDeletePress}>
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
