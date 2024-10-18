import React, { useState, useEffect } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RightActions = ({ progress, dragX, item, user, handleDeletePress, handleEditPress, handleBookmarkPress }) => {
  const isCardOwner = user?.userId === item.userId;
  const actionWidth = isCardOwner ? 65 : 25;

  // Local state for bookmark
  const [isBookmarked, setIsBookmarked] = useState(item.bookmarked);

  // This ensures we reset the bookmark state if the item prop changes
  useEffect(() => {
    setIsBookmarked(item.bookmarked);
  }, [item.bookmarked]);

  const handleBookmarkToggle = () => {
    const newBookmarkState = !isBookmarked; // The next bookmark state
    setIsBookmarked(newBookmarkState); // Optimistically update the UI
    handleBookmarkPress(item, newBookmarkState); // Pass the toggled state to the parent
  };

  const trans = dragX.interpolate({
    inputRange: [-actionWidth * 3, 0], // Adjust input range based on the number of buttons
    outputRange: [0, actionWidth * 3], // Make sure the output range aligns with the total width of the buttons
  });

  return (
    <Animated.View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        transform: [{ translateX: trans }],
      }}
    >
      {isCardOwner && (
        <>
          <TouchableOpacity style={{ padding: 20 }} onPress={handleDeletePress}>
            <FontAwesome name="trash" size={28} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 20 }} onPress={() => handleEditPress(item)}>
            <FontAwesome name="edit" size={28} color="blue" />
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity style={{ padding: 20 }} onPress={handleBookmarkToggle}>
        <FontAwesome name={isBookmarked ? 'bookmark' : 'bookmark-o'} size={28} color="blue" />
      </TouchableOpacity>
    </Animated.View>
  );
};


export default RightActions;
