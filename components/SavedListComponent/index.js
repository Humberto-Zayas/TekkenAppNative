// SavedListComponent.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import { format } from 'date-fns';
import Pagination from '../Pagination';
import CardItem from '../CardItem';
import { calculateAverageRating, getBackgroundColor } from '../../utils/utils';

const SavedListComponent = ({ navigation, characterName }) => {
  const [bookmarkedCards, setBookmarkedCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // Number of items per page
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
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
          const totalCount = response.headers.get('X-Total-Count');
          const totalPages = Math.ceil(totalCount / pageSize); // Calculate total pages

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
    navigation.navigate('CardComponent', { id, frameData });
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
        handleCardPress={(id) => handleCardPress(id, item.characterName, item.isBookmarked)}
        handleDeletePress={() => {/* Implement delete action here */}}
        handleEditPress={() => {/* Implement edit action here */}}
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
