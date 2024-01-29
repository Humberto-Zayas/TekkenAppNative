import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Modal } from 'react-native';
import SavedListComponent from '../SavedListComponent';
import { useAuth } from '../../utils/AuthContext';
import { styles } from './styles';

const CardListComponent = ({ route, navigation }) => {
  const { character } = route.params;
  const { name, image } = character;
  const [showSavedList, setShowSavedList] = useState(false);
  const [isCardMenuVisible, setCardMenuVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [averageRating, setAverageRating] = useState(null);
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

        setCards(cardsWithAverageRating);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, [name]);

  const calculateAverageRating = (card) => {
    const totalRating = card.ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return card.ratings.length > 0 ? totalRating / card.ratings.length : 0;
  };


  const handleCardPress = (id) => {
    navigation.navigate('CardComponent', { id });
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => handleCardPress(item._id)}
    >
      <View style={{ marginRight: 10 }}>
        <Image source={item.thumbnail} style={styles.thumbnailImage} />
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }} numberOfLines={1}>
          {item.cardName}
        </Text>
        <Text>Average Rating: {item.averageRating}</Text>
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

  const renderLoginSignupModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Authentication Required</Text>
            <Text style={styles.modalText}>
              To create cards, you must log in or sign up.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                closeModal();
                navigation.navigate('Login', { isSignUp: false });
              }}
            >
              <Text style={styles.modalButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                closeModal();
                navigation.navigate('Login', { isSignUp: true });
              }}
            >
              <Text style={styles.modalButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={closeModal}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
        <FlatList
          contentContainerStyle={styles.flatList}
          data={cards}
          keyExtractor={(item) => item._id}
          renderItem={renderCardItem}
          showsVerticalScrollIndicator={false}
        />
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
