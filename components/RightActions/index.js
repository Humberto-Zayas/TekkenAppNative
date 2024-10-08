import React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RightActions = ({ progress, dragX, item, user, handleDeletePress, handleEditPress }) => {
  const isCardOwner = user?.userId === item.userId;
  const bookmarkIconName = item.bookmarked ? 'bookmark' : 'bookmark-o';
  const actionWidth = isCardOwner ? 65 : 25;

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
      <TouchableOpacity style={{ padding: 20 }}>
        <FontAwesome name={bookmarkIconName} size={28} color="blue" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default RightActions;
