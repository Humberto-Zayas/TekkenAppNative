import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import { format } from 'date-fns';
import { useFocusEffect } from '@react-navigation/native';
import SavedListComponent from '../SavedListComponent';

const MyCardListComponent = ({ navigation }) => {
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [showSavedList, setShowSavedList] = useState(false); 
  const { user } = useAuth();

  const fetchCards = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/user/${user.userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }
      const data = await response.json();
      const cardsWithAverageRating = data.map((card) => ({
        ...card,
        averageRating: calculateAverageRating(card),
      }));
      const sortedCards = sortOrder === 'ascending' ? cardsWithAverageRating : cardsWithAverageRating.reverse();

      // Save both as initial and current set of cards
      setCards(sortedCards);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const calculateAverageRating = (card) => {
    const totalRating = card.ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return card.ratings.length > 0 ? totalRating / card.ratings.length : 0;
  };

  const getBackgroundColor = (averageRating) => {
    if (averageRating >= 4.5) {
      return 'green';
    } else if (averageRating >= 3) {
      return 'yellow';
    } else {
      return 'red';
    }
  };


  const handleCardPress = (id) => {
    navigation.navigate('CardComponent', { id });
  };

  const renderCardItem = ({ item }) => {
    const formattedCreatedAt = format(new Date(item.createdAt), 'MMMM dd, yyyy HH:mm:ss');
    const formattedLastEditedAt = item.lastEditedAt ? format(new Date(item.lastEditedAt), 'MMMM dd, yyyy HH:mm:ss') : null;
  
    return (
      <TouchableOpacity
        style={[styles.cardItem, { backgroundColor: getBackgroundColor(item.averageRating) }]}
        onPress={() => handleCardPress(item._id)}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} numberOfLines={1}>
            {item.cardName}
          </Text>
          <Text style={{ color: 'white' }}>Average Rating: {item.averageRating}</Text>
          <Text style={{ color: 'white' }}>Creator: {item.username}</Text>
          <Text style={{ color: 'white' }}>
            {item.lastEditedAt ? `Last Edited At: ${formattedLastEditedAt}` : `Created: ${formattedCreatedAt}`}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  const toggleSavedList = () => {
    setShowSavedList(!showSavedList);
  };

  useFocusEffect(
    useCallback(() => {
      fetchCards();
    }, [user])
  );

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          {user.username}'s Cards
        </Text>
      </View>
      <View>
        {showSavedList ? (
          <SavedListComponent navigation={navigation} />
        ) : (
          <>
            {cards.length === 0 ? (
              <>
                <Text style={styles.noCardsText}>
                  {`You currently have no cards. Why don't you create one!`}
                </Text>
                <TouchableOpacity style={styles.cab} onPress={() => { navigation.navigate('Home')}}>
                  <Text style={styles.cabText}>+</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity style={styles.sortButton} onPress={toggleSortOrder}>
                  <Text style={styles.sortButtonText}>Toggle Sort Order</Text>
                </TouchableOpacity>
                <FlatList
                  contentContainerStyle={styles.flatList}
                  data={cards}
                  keyExtractor={(item) => item._id}
                  renderItem={renderCardItem}
                  showsVerticalScrollIndicator={false}
                />
              </>
            )}
          </>
        )}
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
    </View>
  );
};

export default MyCardListComponent;
