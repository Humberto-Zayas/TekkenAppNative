import React, { useState, useCallback, useEffect } from 'react';
import { Alert, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';
import SavedListComponent from '../SavedListComponent';
import Pagination from '../Pagination';
import CardItem from '../CardItem/index.js';
import CardList from '../../components/CardList/index.js';
import { calculateAverageRating, getBackgroundColor } from '../../utils/utils';
import { deleteCard, bookmarkCardById, unbookmarkCardById, fetchUserBookmarks } from '../../utils/api';
import { characters } from '../../data/characters';
import { themeStyles } from '../../styles/styles.js';

const MyCardListComponent = () => {
  const [cards, setCards] = useState([]);
  const [bookmarkedCards, setBookmarkedCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [showSavedList, setShowSavedList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // Number of items per page
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const { user, token } = useAuth();
  const userId = user?.userId;
  const router = useRouter();

  const fetchCards = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/user/${user.userId}?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }
      const totalCount = response.headers.get('X-Total-Count');
      const totalPages = Math.ceil(totalCount / pageSize); // Calculate total pages
      const data = await response.json();

      const cardsWithData = data.map((card) => {
        // Sanitize the characterName
        const sanitizedCharacterName = card.characterName.toLowerCase().replace(/\s+|_/g, '');

        const matchingCharacterKey = Object.keys(characters).find((char) => {
          const sanitizedCharKey = char.toLowerCase().replace(/\s+|_/g, '');
          return sanitizedCharKey === sanitizedCharacterName;
        });

        const character = characters[matchingCharacterKey] || null; // Use null if not found
        const characterImage = character ? character.image : null;

        return {
          ...card,
          averageRating: calculateAverageRating(card),
          characterImage,
        };
      });

      const sortedCards = sortOrder === 'ascending' ? cardsWithData : cardsWithData.reverse();

      setCards(sortedCards);
      setTotalCount(totalCount);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const loadBookmarks = async () => {
    try {
      // Fetch the bookmarks data from the API
      const bookmarks = await fetchUserBookmarks(userId, token);
  
      // Process bookmarks to include additional data
      const processedBookmarks = bookmarks.map((bookmark) => {
        // Sanitize the characterName
        const sanitizedCharacterName = bookmark.characterName.toLowerCase().replace(/\s+|_/g, '');
  
        // Match the character and get additional info
        const matchingCharacterKey = Object.keys(characters).find((char) => {
          const sanitizedCharKey = char.toLowerCase().replace(/\s+|_/g, '');
          return sanitizedCharKey === sanitizedCharacterName;
        });
  
        const character = characters[matchingCharacterKey] || null; // Use null if not found
        const characterImage = character ? character.image : null;
  
        return {
          ...bookmark,
          averageRating: calculateAverageRating(bookmark),
          characterImage,
        };
      });
  
      // Sort processed bookmarks if needed
      const sortedBookmarks = sortOrder === 'ascending' ? processedBookmarks : processedBookmarks.reverse();
  
      // Set processed bookmarks to state
      setBookmarkedCards(sortedBookmarks);
  
      // Calculate total count and pages
      const totalCount = bookmarks.length;
      const totalPages = Math.ceil(totalCount / pageSize); // Assuming `pageSize` is defined
  
      setTotalCount(totalCount);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    }
  };
  

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleEditPress = (item) => {
    router.push({
      pathname: `${item.characterName}/create`,
      params: { cardData: JSON.stringify(item), isEdit: true, characterImage: item.characterImage, },
    });
  };

  const handleCardPress = (id) => {
    router.push({
      pathname: `/card/${id}`,
      // params: { cardName }
    });
  };

  const handleDeletePress = (item) => {
    Alert.alert(
      "Delete Card",
      "Are you sure you want to delete this card?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => handleDeleteConfirm(item) },
      ],
      { cancelable: true }
    );
  };

  const handleDeleteConfirm = async (item) => {
    try {
      await deleteCard(item._id, user.userId, token);
      setCards((prevCards) => prevCards.filter((card) => card._id !== item._id));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleBookmarkPress = async (item, isBookmarked) => {
    try {
      if (isBookmarked) {
        // Call bookmark API if the card should now be bookmarked
        await bookmarkCardById(user.userId, item._id, token);
      } else {
        // Call removeBookmark API if the card should be unbookmarked
        await unbookmarkCardById(user.userId, item._id, token);
      }

      // Update the local state after successfully toggling the bookmark
      setCards((prevCards) =>
        prevCards.map((card) =>
          card._id === item._id ? { ...card, isBookmarked } : card
        )
      );
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  useEffect(() => {
    fetchCards();
    loadBookmarks();
  }, [user])

  return (
    <View style={themeStyles.container}>

      {showSavedList ? (
        <SavedListComponent
          // characterName={character.name}
          cards={bookmarkedCards}
          user={user}
          handleCardPress={handleCardPress}
          handleDeletePress={handleDeletePress}
          handleEditPress={handleEditPress}
          handleBookmarkPress={handleBookmarkPress}
          getBackgroundColor={getBackgroundColor}
        />
      ) : (
        <>
          {cards.length === 0 ? (
            <>
              <Text style={styles.noCardsText}>
                {`You currently have no cards. Why don't you create one!`}
              </Text>
              <TouchableOpacity style={styles.cab}>
                <Text style={styles.cabText}>+</Text>
              </TouchableOpacity>
            </>
          ) : (
            <View>
              <TouchableOpacity style={styles.sortButton} onPress={toggleSortOrder}>
                <Text style={styles.sortButtonText}>Toggle Sort Order</Text>
              </TouchableOpacity>

              <CardList
                cards={cards}
                user={user}
                handleCardPress={handleCardPress}
                handleDeletePress={handleDeletePress}
                handleEditPress={handleEditPress}
                handleBookmarkPress={handleBookmarkPress}
                getBackgroundColor={getBackgroundColor}
              />

              {cards.length > 10 && (
                <View style={styles.bottomContainer}>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePreviousPage={handlePreviousPage}
                    handleNextPage={handleNextPage}
                    setCurrentPage={setCurrentPage}
                  />
                </View>
              )}
            </View>
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
  );
};

export default MyCardListComponent;
