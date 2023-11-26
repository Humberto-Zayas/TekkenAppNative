// CardListComponent.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CardListComponent = ({ route, navigation }) => {
  const { character } = route.params;
  const { name, image } = character;

  // Sample data for the card list
  const cardData = [
    { id: '1', name: 'Card 1', thumbnail: require('../../data/images/cardThumbs/images.png'), rating: 4.5 },
    { id: '2', name: 'Card 2', thumbnail: require('../../data/images/cardThumbs/images.png'), rating: 3.8 },
    { id: '3', name: 'Card 3', thumbnail: require('../../data/images/cardThumbs/images.png'), rating: 5.0 },
    { id: '4', name: 'Card 4', thumbnail: require('../../data/images/cardThumbs/images.png'), rating: 4.5 },
    { id: '5', name: 'Card 5', thumbnail: require('../../data/images/cardThumbs/images.png'), rating: 3.8 },
    { id: '6', name: 'Card 6', thumbnail: require('../../data/images/cardThumbs/images.png'), rating: 5.0 },
    { id: '7', name: 'Card 7', thumbnail: require('../../data/images/cardThumbs/images.png'), rating: 4.5 },
    { id: '8', name: 'Card 8', thumbnail: require('../../data/images/cardThumbs/images.png'), rating: 3.8 },
    { id: '9', name: 'Card 9', thumbnail: require('../../data/images/cardThumbs/images.png'), rating: 5.0 },
    // Add more cards as needed
  ];

  const handleCardPress = (item) => {
    navigation.navigate('CardComponent', { item });
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => handleCardPress(item)}>
      <View style={{ marginRight: 10 }}>
        <Image source={item.thumbnail} style={styles.thumbnailImage} />
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
        <Text>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );  

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image source={image} style={styles.heroImage} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{name}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={renderCardItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 20,
  },
  flatList: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    width: '100%', // Full width
  },
  heroContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  heroImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  thumbnailImage: {
    width: 50,  // Set the desired width
    height: 50, // Set the desired height
    borderRadius: 25, // Adjust border radius to make it circular
  },  
});

export default CardListComponent;
