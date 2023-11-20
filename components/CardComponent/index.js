import React from 'react';
import { View, Text } from 'react-native';

const CardComponent = ({ route }) => {
  const { title, item } = route.params;

  return (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Title: {title}</Text>
      {/* Other details like Thumbnail and Rating can be accessed using item */}
      <Text>Thumbnail: {item.thumbnail}</Text>
      <Text>Rating: {item.rating}</Text>
    </View>
  );
};

export default CardComponent;
