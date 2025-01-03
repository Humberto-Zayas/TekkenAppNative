import React from 'react';
import { FlatList, Text } from 'react-native';
import CardItem from '../CardItem'; // Adjust the path as needed
import { styles } from '../../components/CardListComponent/styles';

const CardList = ({
  cards,
  user,
  handleCardPress,
  handleDeletePress,
  handleEditPress,
  handleBookmarkPress,
  getBackgroundColor,
}) => {
  return (
    <>
      {cards.length === 0 ? (
        <Text style={styles.noCardsText}>No cards found. Create one!</Text>
      ) : (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={cards}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <CardItem
              item={item}
              user={user}
              handleCardPress={handleCardPress}
              handleDeletePress={() => handleDeletePress(item)}
              handleEditPress={handleEditPress}
              handleBookmarkPress={handleBookmarkPress}
              getBackgroundColor={getBackgroundColor}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
};

export default CardList;
