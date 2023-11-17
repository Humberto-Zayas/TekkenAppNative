// BoxComponent.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const BoxComponent = ({ route, navigation }) => {
  const { title } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{title}</Text>
      <Button title="Back" onPress={handleBackPress} />
    </View>
  );
};

export default BoxComponent;
