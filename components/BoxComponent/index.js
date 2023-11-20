import React from 'react';
import { View, Text, Button } from 'react-native';

const BoxComponent = ({ route, navigation }) => {
  const { title } = route.params;

  const handleBackPress = () => {
    navigation.goBack();
  };

  // Sample data for the two-column list
  const listData = [
    { key: '1', label1: 'Item 1', label2: 'Item 1 description' },
    { key: '2', label1: 'Item 2', label2: 'Item 2 description' },
    { key: '3', label1: 'Item 3', label2: 'Item 3 description' },
    // Add more items as needed
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{title}</Text>
      
      {/* Two-column list */}
      <View style={{ marginTop: 20 }}>
        {listData.map((item) => (
          <View key={item.key} style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{ marginRight: 10 }}>{item.label1}</Text>
            <Text>{item.label2}</Text>
          </View>
        ))}
      </View>

      <Button title="Back" onPress={handleBackPress} />
    </View>
  );
};

export default BoxComponent;
