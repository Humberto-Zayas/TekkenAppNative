// BoxComponent.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const BoxComponent = ({ title, onBackPress }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{title}</Text>
      <Button title="Back" onPress={onBackPress} />
    </View>
  );
};

export default BoxComponent;
