import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { format } from 'date-fns';
import RightActions from '../RightActions';
import {styles} from './styles.js'; // Import your styles

const CardItem = ({ item, user, handleCardPress, handleDeletePress, handleEditPress, handleBookmarkPress, getBackgroundColor }) => {
  return (
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
        onPress={() => handleCardPress(item._id)}
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
