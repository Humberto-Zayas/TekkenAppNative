import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const BlankComponent = () => {
  // Sample data for the card list
  const cardData = [
    { id: '1', name: 'Card 1', thumbnail: 'Thumbnail 1', rating: 4.5 },
    { id: '2', name: 'Card 2', thumbnail: 'Thumbnail 2', rating: 3.8 },
    { id: '3', name: 'Card 3', thumbnail: 'Thumbnail 3', rating: 5.0 },
    // Add more cards as needed
  ];

  const renderCardItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={{ marginRight: 10 }}>
        <Text>{item.thumbnail}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
        <Text>Rating: {item.rating}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={renderCardItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
});

export default BlankComponent;
