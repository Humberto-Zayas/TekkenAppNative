import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CardComponent from '../CardComponent';

const CardListComponent = ({ route, navigation }) => {
  const { title } = route.params;

  // Sample data for the card list
  const cardData = [
    { id: '1', name: 'Card 1', thumbnail: 'Thumbnail 1', rating: 4.5 },
    { id: '2', name: 'Card 2', thumbnail: 'Thumbnail 2', rating: 3.8 },
    { id: '3', name: 'Card 3', thumbnail: 'Thumbnail 3', rating: 5.0 },
    // Add more cards as needed
  ];

  const handleCardPress = (item) => {
    navigation.navigate('CardComponent', { item });
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => handleCardPress(item)}>
      <View style={{ marginRight: 10 }}>
        {/* You can use an Image component for the thumbnail */}
        <Text>{item.thumbnail}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
        <Text>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
        Card List for {title}
      </Text>
      <FlatList
        contentContainerStyle={styles.flatList}
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  flatList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
});

export default CardListComponent;
