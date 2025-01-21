import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Platform, Modal, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { format } from 'date-fns';
import { FontAwesome } from '@expo/vector-icons';
import RightActions from '../RightActions';
import { styles } from './styles.js'; // Import your styles

const CardItem = ({ item, user, handleCardPress, handleDeletePress, handleEditPress, handleBookmarkPress, getBackgroundColor }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const isCardOwner = user?.userId === item.userId;
  const [isBookmarked, setIsBookmarked] = useState(item.bookmarked);

  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    setIsBookmarked(item.bookmarked);
  }, [item.bookmarked]);


  return Platform.OS === 'web' ? (
    <>
      <Pressable
        style={[styles.cardItem, { backgroundColor: getBackgroundColor(item.averageRating), justifyContent: 'space-between' }]}
        onPress={() => handleCardPress(item._id, item.cardName)}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} numberOfLines={1}>
            {item.cardName}
          </Text>
          <Text style={{ color: 'white' }}>Average Rating: {item.averageRating}</Text>
          <Text style={{ color: 'white' }}>Creator: {item.username}</Text>
          <Text style={{ color: 'white' }}>
            {item.lastEditedAt
              ? `Last Edited: ${format(new Date(item.lastEditedAt), 'MMM dd, yyyy')}`
              : `Created: ${format(new Date(item.createdAt), 'MMM dd, yyyy')}`}
          </Text>
        </View>
        <TouchableOpacity onPress={openMenu}>
          <FontAwesome name="ellipsis-h" size={24} color="blue" style={{ marginBottom: 8 }} />
        </TouchableOpacity>
      </Pressable>
      <Modal
        animationType="slide"
        visible={isMenuVisible}
        onRequestClose={closeMenu}
        transparent
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={closeMenu}
        >
          <View style={styles.modalContainer}>
            <View style={styles.menuContainer}>
              {isCardOwner && (
                <>
                  <TouchableOpacity style={styles.menuItem} onPress={() => {
                    handleEditPress(item);
                    closeMenu();

                  }}>
                    <FontAwesome name="edit" size={24} color="blue" style={styles.menuItemIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => {
                    handleDeletePress(item);
                    closeMenu();

                  }}>
                    <FontAwesome name="trash" size={24} color="red" style={styles.menuItemIcon} />
                  </TouchableOpacity>
                </>
              )}
              <TouchableOpacity
                onPress={() => {
                  const newBookmarkState = !isBookmarked;
                  setIsBookmarked(newBookmarkState); // Optimistic update
                  handleBookmarkPress(item, newBookmarkState); // Pass item and new state
                  closeMenu();
                }}
              >
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

    </>
  ) : (
    <Swipeable
      renderRightActions={(progress, dragX) => (
        <RightActions
          progress={progress}
          dragX={dragX}
          item={item}
          user={user}
          handleDeletePress={handleDeletePress}
          handleEditPress={handleEditPress}
          handleBookmarkPress={handleBookmarkPress}
        />
      )}
    >
      <Pressable
        style={[styles.cardItem, { backgroundColor: getBackgroundColor(item.averageRating) }]}
        onPress={() => handleCardPress(item._id, item.cardName)}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} numberOfLines={1}>
            {item.cardName}
          </Text>
          <Text style={{ color: 'white' }}>Average Rating: {item.averageRating}</Text>
          <Text style={{ color: 'white' }}>Creator: {item.username}</Text>
          <Text style={{ color: 'white' }}>
            {item.lastEditedAt
              ? `Last Edited: ${format(new Date(item.lastEditedAt), 'MMM dd, yyyy')}`
              : `Created: ${format(new Date(item.createdAt), 'MMM dd, yyyy')}`}
          </Text>
        </View>
      </Pressable>
    </Swipeable>
  );
};

export default CardItem;
