import React, { useState, useEffect } from 'react';
import { Alert, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Pagination from '../Pagination';
import CardItem from '../CardItem';
import { calculateAverageRating, getBackgroundColor } from '../../utils/utils';
import { deleteCard, bookmarkCardById, unbookmarkCardById } from '../../utils/api';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import { characters } from '../../data/characters';

const CreatorCardListComponent = () => {
  const router = useRouter();
  const { creatorId, creator } = useLocalSearchParams();
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { user, token } = useAuth();
  const userId = user?.userId;

  const fetchCards = async () => {
    try {
      let url = `${process.env.REACT_APP_API_BASE_URL}/cards/user/${creatorId}`;

      if (userId) {
        url += `?userId=${userId}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }

      const totalCount = response.headers.get('X-Total-Count');
      const totalPages = Math.ceil(totalCount / pageSize);

      const data = await response.json();

      const cardsWithData = data.map((card) => {
        const sanitizedCharacterName = card.characterName.toLowerCase().replace(/\s+|_/g, '');
        const matchingCharacterKey = Object.keys(characters).find((char) => {
          const sanitizedCharKey = char.toLowerCase().replace(/\s+|_/g, '');
          return sanitizedCharKey === sanitizedCharacterName;
        });

        const character = characters[matchingCharacterKey] || null;
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

  const handleCardPress = (id, characterName, bookmarked) => {
    const frameData = loadFrameData(characterName);
    router.push({
      pathname: `/card/${id}`,
      params: { frameData: JSON.stringify(frameData) },
    });
  };

  const handleEditPress = (item) => {
    const frameData = loadFrameData(item.characterName);
    const characterImage = item.characterImage;
    router.push({
      pathname: `${item.cardName}/create`,
      params: { cardData: JSON.stringify(item), isEdit: true, characterImage: characterImage, frameData: JSON.stringify(frameData)},
    });
  };

  const handleDeletePress = (item) => {
    Alert.alert(
      'Delete Card',
      'Are you sure you want to delete this card?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => handleDeleteConfirm(item) },
      ],
      { cancelable: true }
    );
  };

  const handleDeleteConfirm = async (item) => {
    try {
      await deleteCard(item._id, user.userId, token);
      setCards((prevCards) => prevCards.filter((card) => card._id !== item._id));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const handleBookmarkPress = async (item, isBookmarked) => {
    try {
      if (isBookmarked) {
        await bookmarkCardById(user.userId, item._id, token);
      } else {
        await unbookmarkCardById(user.userId, item._id, token);
      }

      setCards((prevCards) =>
        prevCards.map((card) =>
          card._id === item._id ? { ...card, isBookmarked } : card
        )
      );
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  const renderCardItem = ({ item }) => (
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

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  useEffect(() => {
    fetchCards();
  }, [creatorId, sortOrder]);

  return (
    <View style={styles.container}>
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
              handlePreviousPage={() => setCurrentPage(currentPage - 1)}
              handleNextPage={() => setCurrentPage(currentPage + 1)}
              setCurrentPage={setCurrentPage}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default CreatorCardListComponent;
