// SavedListComponent.js
import React, { useEffect, useState } from 'react';
import { Alert, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Expo Router hooks
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import Pagination from '../Pagination';
import CardItem from '../CardItem';
import { characters } from '../../data/characters.js';
import { deleteCard, unbookmarkCardById } from '../../utils/api';
import { calculateAverageRating, getBackgroundColor } from '../../utils/utils';

const SavedListComponent = ({ characterName }) => {
  const [bookmarkedCards, setBookmarkedCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // Number of items per page
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const [cardToDelete, setCardToDelete] = useState(null);
  const { user, token } = useAuth();
  const router = useRouter(); 
  const userId = user?.userId;

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
          const totalCount = response.headers.get('X-Total-Count');
          const totalPages = Math.ceil(totalCount / pageSize); // Calculate total pages

          const data = await response.json();

          // Map the fetched cards and add the character image
          const cardsWithData = data.bookmarks.map((card) => {
            const sanitizedCharacterName = card.characterName.toLowerCase().replace(/\s+|_/g, '');

            // Find the matching character
            const matchingCharacterKey = Object.keys(characters).find((char) => {
              const sanitizedCharKey = char.toLowerCase().replace(/\s+|_/g, '');
              return sanitizedCharKey === sanitizedCharacterName;
            });

            const character = characters[matchingCharacterKey] || null; // Use null if not found
            const characterImage = character ? character.image : null;

            return {
              ...card,
              averageRating: calculateAverageRating(card),
              characterImage, // Add the character image to the card object
            };
          });

          // Sort the cards
          const sortedBookmarks = sortOrder === 'ascending'
            ? cardsWithData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            : cardsWithData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

          setBookmarkedCards(sortedBookmarks);
          setTotalCount(totalCount);
          setTotalPages(totalPages);
        } catch (error) {
          console.error('Error fetching bookmarks:', error);
        }
      }
    };

    fetchBookmarks();
  }, [user, sortOrder]);


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


  const handleSavedCardPress = (id, characterName) => {
    const frameData = loadFrameData(characterName);
    router.push({
      pathname: `/card/${id}`,
      params: {frameData: JSON.stringify(frameData)}
    });
  };

  const handleEditPress = (item) => {
    const frameData = loadFrameData(item.characterName); // Load frame data for the specific character
    const characterImage = item.characterImage; // Get the character image from the item
    // navigation.navigate('CreateCardComponent', {
    //   cardData: item,
    //   isEdit: true,
    //   characterImage,
    //   frameData
    // });

    router.push({
      pathname: `${item.cardName}/create`,
      params: { cardData: JSON.stringify(item), isEdit: true, characterImage: characterImage, frameData: JSON.stringify(frameData),  },
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
      await deleteCard(item._id, userId, token);
      setBookmarkedCards((prevCards) => prevCards.filter((card) => card._id !== item._id));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleBookmarkPress = async (item) => {
    try {
      // Unbookmark the card
      await unbookmarkCardById(user.userId, item._id, token);

      // Remove the unbookmarked card from the list
      setBookmarkedCards((prevCards) => prevCards.filter((card) => card._id !== item._id));
    } catch (error) {
      console.error("Error unbookmarking card:", error);
    }
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderCardItem = ({ item }) => {
    return (
      <CardItem
        item={item}
        user={user}
        handleCardPress={(id) => handleSavedCardPress(id, item.characterName, item.isBookmarked)}
        handleDeletePress={() => handleDeletePress(item)}
        handleEditPress={() => handleEditPress(item)}
        handleBookmarkPress={handleBookmarkPress}
        getBackgroundColor={getBackgroundColor}
      />
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
                renderItem={renderCardItem}
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

  return (
    <View>
      {renderContent()
      }
      {bookmarkedCards.length > 10 && (
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
  )
};


export default SavedListComponent;
