import React, { useState, useCallback, useEffect } from 'react';
import { Alert, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/native';
import SavedListComponent from '../SavedListComponent';
import Pagination from '../Pagination';
import CardItem from '../CardItem/index.js';
import { calculateAverageRating, getBackgroundColor } from '../../utils/utils';
import { deleteCard, bookmarkCardById, unbookmarkCardById } from '../../utils/api';
import { characters } from '../../data/characters';

const MyCardListComponent = ({ navigation }) => {
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [showSavedList, setShowSavedList] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // Number of items per page
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const { user, token } = useAuth();
  const userId = user?.userId;

  useEffect(() => {
    if (user?.username) {
      navigation.setParams({ screenName: `${user.username}'s Cards` }); // Update params dynamically
    }
  }, []);

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

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const frameDataFiles = {
    Alisa: require('../../data/AlisaFrameData.js').default,
    Asuka: require('../../data/AsukaFrameData.js').default,
    Azucena: require('../../data/AzucenaFrameData.js').default,
    Bryan: require('../../data/BryanFrameData.js').default,
    Claudio: require('../../data/ClaudioFrameData.js').default,
    Devil_Jin: require('../../data/Devil_JinFrameData.js').default,
    Dragunov: require('../../data/DragunovFrameData.js').default,
    Eddy: require('../../data/EddyFrameData.js').default,
    Feng: require('../../data/FengFrameData.js').default,
    Hwoarang: require('../../data/HwoarangFrameData.js').default,
    Jin: require('../../data/JinFrameData.js').default,
    Jun: require('../../data/JunFrameData.js').default,
    Kazuya: require('../../data/KazuyaFrameData.js').default,
    King: require('../../data/KingFrameData.js').default,
    Kuma: require('../../data/KumaFrameData.js').default,
    Lars: require('../../data/LarsFrameData.js').default,
    Law: require('../../data/LawFrameData.js').default,
    Lee: require('../../data/LeeFrameData.js').default,
    Lili: require('../../data/LiliFrameData.js').default,
    Nina: require('../../data/NinaFrameData.js').default,
    Panda: require('../../data/PandaFrameData.js').default,
    Paul: require('../../data/PaulFrameData.js').default,
    Raven: require('../../data/RavenFrameData.js').default,
    Reina: require('../../data/ReinaFrameData.js').default,
    Shaheen: require('../../data/ShaheenFrameData.js').default,
    Steve: require('../../data/SteveFrameData.js').default,
    Victor: require('../../data/VictorFrameData.js').default,
    Xiaoyu: require('../../data/XiaoyuFrameData.js').default,
    Yoshimitsu: require('../../data/YoshimitsuFrameData.js').default,
    Zafina: require('../../data/ZafinaFrameData.js').default,
  };

  const loadFrameData = (characterName) => {
    const sanitizedCharacterName = characterName.replace(/\s+/g, '');
    return frameDataFiles[sanitizedCharacterName] || null;
  };

  const handleCardPress = (id, characterName) => {
    const frameData = loadFrameData(characterName);
    navigation.navigate('CardComponent', {
      id,
      frameData
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

  // Add the handleEditPress function
  const handleEditPress = (item) => {
    const frameData = loadFrameData(item.characterName); // Get frame data for the specific character
    const characterImage = item.characterImage; // Get the image from the item
    navigation.navigate('CreateCardComponent', { cardData: item, isEdit: true, characterImage, frameData });
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

  const renderCardItem = ({ item }) => {
    return (
      <CardItem
        item={item}
        user={user}
        handleCardPress={(id) => handleCardPress(id, item.characterName, item.isBookmarked)}
        handleDeletePress={() => handleDeletePress(item)}
        handleEditPress={() => handleEditPress(item)}
        handleBookmarkPress={handleBookmarkPress}
        getBackgroundColor={getBackgroundColor}
      />
    );
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  useFocusEffect(
    useCallback(() => {
      fetchCards();
    }, [user])
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.heroContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          {user.username}'s Cards
        </Text>
      </View> */}

      {showSavedList ? (
        <SavedListComponent navigation={navigation} />
      ) : (
        <>
          {cards.length === 0 ? (
            <>
              <Text style={styles.noCardsText}>
                {`You currently have no cards. Why don't you create one!`}
              </Text>
              <TouchableOpacity style={styles.cab} onPress={() => { navigation.navigate('Home') }}>
                <Text style={styles.cabText}>+</Text>
              </TouchableOpacity>
            </>
          ) : (
            <View>
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
