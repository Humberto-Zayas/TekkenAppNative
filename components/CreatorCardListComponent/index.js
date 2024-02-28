import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Pagination from '../Pagination';
import { calculateAverageRating, getBackgroundColor } from '../../utils/utils';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import { format } from 'date-fns';

const CreatorCardListComponent = ({ route, navigation }) => {
  const { creatorId, creator } = route.params;
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // Number of items per page
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const { user } = useAuth();

  const fetchCards = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/user/${creatorId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }
      const totalCount = response.headers.get('X-Total-Count');
      const totalPages = Math.ceil(totalCount / pageSize); // Calculate total pages
      const data = await response.json();
      const cardsWithAverageRating = data.map((card) => ({
        ...card,
        averageRating: calculateAverageRating(card),
      }));
      const sortedCards = sortOrder === 'ascending' ? cardsWithAverageRating : cardsWithAverageRating.reverse();

      // Save both as initial and current set of cards
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

  useEffect(() => {
    fetchCards();
  }, [creatorId, sortOrder]);

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        {/* <Image source={image} style={styles.heroImage} /> */}
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          {creator}'s Cards
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.sortButton} onPress={toggleSortOrder}>
          <Text style={styles.sortButtonText}>Toggle Sort Order</Text>
        </TouchableOpacity>
        {/* 
          <TouchableOpacity style={styles.sortButton} onPress={toggleSortFilterModal}>
            <Text style={styles.sortButtonText}>Sort & Filter</Text>
          </TouchableOpacity> */}
        <FlatList
          contentContainerStyle={styles.flatList}
          data={cards}
          keyExtractor={(item) => item._id}
          renderItem={renderCardItem}
          showsVerticalScrollIndicator={false}
        />
        {cards.length > 0 && (
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
