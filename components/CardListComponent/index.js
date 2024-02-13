import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import SavedListComponent from '../SavedListComponent';
import LoginSignupModalComponent from './LoginSignupModalComponent';
import SortAndFilterModal from './SortAndFilterModal';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';
import { format } from 'date-fns';

const CardListComponent = ({ route, navigation }) => {
  const { character } = route.params;
  const { name, image } = character;
  const [showSavedList, setShowSavedList] = useState(false);
  const [isCardMenuVisible, setCardMenuVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [originalCards, setOriginalCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [showSortFilterModal, setShowSortFilterModal] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState('All Users');
  const { user } = useAuth();

  const toggleSortFilterModal = () => {
    setShowSortFilterModal(!showSortFilterModal);
  };

  const applyFilter = useCallback((filterUsername) => {
    setSelectedUsername(filterUsername);

    if (filterUsername === 'All Users') {
      setCards(originalCards); // Reset to the original data
    } else {
      const filteredCards = originalCards.filter((card) => card.username === filterUsername);
      setCards(filteredCards);
    }
  }, [originalCards]);


  const fetchCards = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/character/${name}`);
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
      setOriginalCards(sortedCards);
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

  const toggleCardMenu = () => {
    setCardMenuVisible(!isCardMenuVisible);
  };

  const handleCreateCard = () => {
    setCardMenuVisible(false);
    if (!user) {
      setShowModal(true);
    } else {
      navigation.navigate('CreateCardComponent', {
        characterName: name,
        characterImage: image,
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  const renderLoginSignupModal = () => {
    return (
      <LoginSignupModalComponent
        showModal={showModal}
        closeModal={closeModal}
        navigation={navigation}
      />
    );
  };

  // useEffect(() => {
  //   fetchCards();
  // }, [name, sortOrder]);

  useFocusEffect(
    useCallback(() => {
      fetchCards();
    }, [name, sortOrder])
  );

  useEffect(() => {
    let updatedCards;

    if (selectedUsername === 'All Users') {
      updatedCards = originalCards;
    } else {
      updatedCards = originalCards.filter((card) => card.username === selectedUsername);
    }

    if (selectedUsername !== updatedCards) {
      setCards(updatedCards);
    }
  }, [selectedUsername, originalCards]);

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image source={image} style={styles.heroImage} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          {name}
        </Text>
      </View>
      {showSavedList ? (
        <SavedListComponent characterName={name} navigation={navigation} />
      ) : (
        <>
          {cards.length === 0 ? (
            <>
              <Text style={styles.noCardsText}>
                {`There are currently no cards${name ? ` for ${name}` : ''}. Why don't you add one?`}
              </Text>
              <TouchableOpacity style={styles.cab} onPress={handleCreateCard}>
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

      <TouchableOpacity style={styles.fab} onPress={toggleCardMenu}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
      <SortAndFilterModal
        visible={showSortFilterModal}
        onClose={toggleSortFilterModal}
        onSortChange={fetchCards}
        onFilterChange={applyFilter}
        cards={cards}
        selectedUsername={selectedUsername}
      />

      {isCardMenuVisible && (
        <View style={styles.fabMenu}>
          <TouchableOpacity style={styles.menuItem} onPress={handleCreateCard}>
            <Text>Create {name} Card</Text>
          </TouchableOpacity>
        </View>
      )}

      {showModal && renderLoginSignupModal()}
    </View>
  );
};

export default CardListComponent;
