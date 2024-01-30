import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Modal } from 'react-native';
import SavedListComponent from '../SavedListComponent';
import LoginSignupModalComponent from './LoginSignupModalComponent';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';

const CardListComponent = ({ route, navigation }) => {
  const { character } = route.params;
  const { name, image } = character;
  const [showSavedList, setShowSavedList] = useState(false);
  const [isCardMenuVisible, setCardMenuVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending'); // Track sorting order
  const { user } = useAuth();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/character/${name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cards');
        }
        const data = await response.json();

        // Calculate and set the average rating for each card
        const cardsWithAverageRating = data.map((card) => ({
          ...card,
          averageRating: calculateAverageRating(card),
        }));

        // Sort cards based on sortOrder
        const sortedCards = sortOrder === 'ascending' ? cardsWithAverageRating : cardsWithAverageRating.reverse();
        
        setCards(sortedCards);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, [name, sortOrder]);

  const calculateAverageRating = (card) => {
    const totalRating = card.ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return card.ratings.length > 0 ? totalRating / card.ratings.length : 0;
  };

  const getBackgroundColor = (averageRating) => {
    if (averageRating >= 4.5) {
      return 'green'; // High rating, green background
    } else if (averageRating >= 3) {
      return 'yellow'; // Medium rating, yellow background
    } else {
      return 'red'; // Low rating, red background
    }
  };

  const handleCardPress = (id) => {
    navigation.navigate('CardComponent', { id });
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.cardItem, { backgroundColor: getBackgroundColor(item.averageRating) }]}
      onPress={() => handleCardPress(item._id)}
    >
      {/* <View style={{ marginRight: 10 }}>
        <Image source={item.thumbnail} style={styles.thumbnailImage} />
      </View> */}
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} numberOfLines={1}>
          {item.cardName}
        </Text>
        <Text style={{ color: 'white' }}>Average Rating: {item.averageRating}</Text>
      </View>
    </TouchableOpacity>
  );

  const toggleCardMenu = () => {
    setCardMenuVisible(!isCardMenuVisible);
  };

  const handleCreateCard = () => {
    setCardMenuVisible(false);

    if (!user) {
      setShowModal(true);
    } else {
      // User is logged in, navigate to 'Create Card'
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
    // Toggle between ascending and descending order
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

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image source={image} style={styles.heroImage} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          {name}
        </Text>
      </View>

      {showSavedList ? (
        <SavedListComponent navigation={navigation} />
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
