// CardListComponent.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {cardData} from '../../data/cardData';

const CardListComponent = ({ route, navigation }) => {
  const { character } = route.params;
  const { name, image } = character;

  const handleCardPress = (item) => {
    navigation.navigate('CardComponent', { item });
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => handleCardPress(item)}>
      <View style={{ marginRight: 10 }}>
        <Image source={item.thumbnail} style={styles.thumbnailImage} />
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }} numberOfLines={1}>{item.name}</Text>
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
