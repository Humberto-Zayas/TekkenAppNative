import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { format } from 'date-fns';
import { REACT_APP_API_BASE_URL } from '@env';

const RatingModal = ({ visible, onClose, onStarPress, selectedRating, card }) => {
  const handleTagPress = (tag) => {
    // Implement your logic here, for example:
    console.log(`Pressed tag: ${tag.name}`);
  };

  // Define handleTagLongPress function to handle long press on a tag
  const handleTagLongPress = (tag) => {
    // Implement your long press logic here, for example:
    console.log(`Long pressed tag: ${tag.name}`);
  };
  return (
    <Modal animationType="slide" visible={visible} transparent>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.menuContainer}>
            <View style={styles.tagsContainer}>
              {card?.tags.map((tag) => (
                <Pressable
                  key={tag._id}
                  onPress={() => handleTagPress(tag)}
                  onLongPress={() => handleTagLongPress(tag)} // Add the onLongPress handler
                >
                  <View style={styles.tag}>
                    <Text style={styles.tagText}>{tag.name}</Text>
                    <FontAwesome name="hand-pointer-o" size={16} color="blue" />
                  </View>
                </Pressable>
              ))}
            </View>

          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};


const ConfirmationModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={styles.centeredModalContainer}>
          <View style={styles.centeredMenuContainer}>
            <Text style={styles.confirmationText}>Are you sure you want to delete this card?</Text>
            <View style={styles.confirmationButtonsContainer}>
              <TouchableOpacity onPress={onConfirm}>
                <FontAwesome name="check" size={24} color="green" style={styles.menuItemIcon} />
                <Text style={styles.confirmationButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose}>
                <FontAwesome name="times" size={24} color="red" style={styles.menuItemIcon} />
                <Text style={styles.confirmationButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const HeroComponent = ({ card, user, rating, isBookmarked, toggleBookmark, onRatingChange, handleCreatorPress, onDelete, navigation }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isRatingModalVisible, setRatingModalVisible] = useState(false);
  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);

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

  const handleEditPress = (card) => {
    setMenuVisible(false);
    navigation.navigate('EditCardComponent', { cardData: card })
  };

  const handleDeletePress = () => {
    setMenuVisible(false)
    setConfirmationModalVisible(true);
  };

  const handleConfirmDelete = async () => {
    console.log(user?.userId)
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/cards/${card._id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user?.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.userId,
        }),
      });

      if (response.ok) {
        console.log('Card deleted successfully');
        onDelete();
      } else {
        console.error('Error deleting card:', response.status);
      }
    } catch (error) {
      console.error('Error deleting card:', error);
    } finally {
      setConfirmationModalVisible(false);
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
        card={card}
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
                <FontAwesome name="edit" size={24} color="blue" style={styles.menuItemIcon} onPress={() => handleEditPress(card)} />
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
      <ConfirmationModal
        visible={isConfirmationModalVisible}
        onClose={() => setConfirmationModalVisible(false)}
        onConfirm={handleConfirmDelete}
      />
    </View>
  );
};

export default HeroComponent;
