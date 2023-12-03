import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { cardData } from '../../data/cardData';
import SavedListComponent from '../SavedListComponent';

const CardListComponent = ({ route, navigation }) => {
  const { character } = route.params;
  const { name, image } = character;

  const [showSavedList, setShowSavedList] = useState(false);

  const handleCardPress = (item) => {
    navigation.navigate('CardComponent', { item });
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => handleCardPress(item)}>
      <View style={{ marginRight: 10 }}>
        <Image source={item.thumbnail} style={styles.thumbnailImage} />
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }} numberOfLines={1}>
          {item.name}
        </Text>
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

      {showSavedList ? (
        <SavedListComponent navigation={navigation} />
      ) : (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={cardData}
          keyExtractor={(item) => item.id}
          renderItem={renderCardItem}
          showsVerticalScrollIndicator={false}
        />
      )}

      {/* Toggle Buttons */}
      <View style={styles.toggleButtonContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, { marginRight: 10 }]}
          onPress={() => setShowSavedList(false)}
        >
          <Text style={styles.toggleButtonText}>Show All Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShowSavedList(true)}
        >
          <Text style={styles.toggleButtonText}>Show Saved List</Text>
        </TouchableOpacity>
      </View>
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
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  toggleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    padding: 10
  },
  toggleButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  toggleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardListComponent;
