// SavedListComponent.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import { format } from 'date-fns';

const SavedListComponent = ({ navigation, characterName }) => {
  const [bookmarkedCards, setBookmarkedCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const { user } = useAuth();

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (user) {
        try {
          let url = `${process.env.REACT_APP_API_BASE_URL}/users/${user.userId}/bookmarks`;

          // Append character name to the URL if provided
          if (characterName) {
            url += `?characterName=${encodeURIComponent(characterName)}`;
          }

          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch bookmarks');
          }

          const data = await response.json();
          const cardsWithAverageRating = data.bookmarks.map((card) => ({
            ...card,
            averageRating: calculateAverageRating(card),
          }));

          // Sort the cards based on createdAt field
          const sortedBookmarks = sortOrder === 'ascending'
            ? cardsWithAverageRating.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            : cardsWithAverageRating.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

          setBookmarkedCards(sortedBookmarks);
        } catch (error) {
          console.error('Error fetching bookmarks:', error);
        }
      }
    };

    fetchBookmarks();
  }, [user, sortOrder]);

  const handleSavedCardPress = (id) => {
    navigation.navigate('CardComponent', { id });
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
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

  const renderSavedCardItem = ({ item }) => {
    const formattedCreatedAt = format(new Date(item.createdAt), 'MMMM dd, yyyy HH:mm:ss');

    return (
      <TouchableOpacity style={[styles.cardItem, { backgroundColor: getBackgroundColor(item.averageRating) }]} onPress={() => handleSavedCardPress(item._id)}>
        {/* <View style={{ marginRight: 10 }}>
        <Image source={item.thumbnail} style={styles.thumbnailImage} />
      </View> */}
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }} numberOfLines={1}>
            {item.cardName}
          </Text>
          <Text>Rating: {item.averageRating}</Text>
          <Text style={{ color: 'white' }}>Creator: {item.username}</Text>
          <Text style={{ color: 'white' }}>
            {item.lastEditedAt ? `Last Edited At: ${formattedLastEditedAt}` : `Created: ${formattedCreatedAt}`}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    if (user) {
      return (
        <>
          {bookmarkedCards.length === 0 ? (
            <Text style={styles.noCardsText}>
              {`You currently have no bookmarked cards${characterName ? ` for ${characterName}` : ''}.`}
            </Text>
          ) : (
            <>
              <TouchableOpacity style={styles.sortButton} onPress={toggleSortOrder}>
                <Text style={styles.sortButtonText}>Toggle Sort Order</Text>
              </TouchableOpacity>
              <FlatList
                contentContainerStyle={styles.flatList}
                data={bookmarkedCards}
                keyExtractor={(item) => item._id}
                renderItem={renderSavedCardItem}
                showsVerticalScrollIndicator={false}
              />
            </>
          )}
        </>
      );
    } else {
      return (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            To view saved cards, you must login or sign up.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login', { isSignUp: false })}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login', { isSignUp: true })}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  

  return <View>{renderContent()}</View>;
};


export default SavedListComponent;
