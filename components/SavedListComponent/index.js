// SavedListComponent.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {savedCardData} from '../../data/savedCardData.js'; // Assuming you have a separate data file for saved cards

const SavedListComponent = ({ navigation }) => {
  const handleSavedCardPress = (item) => {
    navigation.navigate('SavedCardComponent', { item });
  };

  const renderSavedCardItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => handleSavedCardPress(item)}>
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
      <FlatList
        contentContainerStyle={styles.flatList}
        data={savedCardData}
        keyExtractor={(item) => item.id}
        renderItem={renderSavedCardItem}
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
  thumbnailImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default SavedListComponent;
