import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Pagination from '../Pagination';
import CardItem from '../CardItem'; // Use the CardItem component
import { calculateAverageRating, getBackgroundColor } from '../../utils/utils';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import { format } from 'date-fns';
import { characters } from '../../data/characters';

const CreatorCardListComponent = ({ route, navigation }) => {
  const { creatorId, creator } = route.params;
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // Number of items per page
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const { user } = useAuth();
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
  
      const cardsWithAverageRating = data.map((card) => ({
        ...card,
        averageRating: calculateAverageRating(card), // Assuming calculateAverageRating is a function that exists
      }));
  
      const sortedCards = sortOrder === 'ascending' ? cardsWithAverageRating : cardsWithAverageRating.reverse();
  
      setCards(sortedCards);
      setTotalCount(totalCount);
      setTotalPages(totalPages);
    } catch (error) {
      // Log any error that occurs during the fetch
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

  const handleCardPress = (id, characterName, bookmarked) => {
    const frameData = loadFrameData(characterName);
    navigation.navigate('CardComponent', { 
      id,
      frameData,
      bookmarked
    });
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
  
  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  useEffect(() => {
    fetchCards();
  }, [creatorId, sortOrder]);

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          {creator}'s Cards
        </Text>
      </View>
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

    </View>
  );
};

export default CreatorCardListComponent;
