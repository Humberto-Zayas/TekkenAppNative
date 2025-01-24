import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert, ActivityIndicator, Linking, Modal } from 'react-native';
import HeroComponent from '../../components/CardComponent/HeroComponent';
import CardDetailComponent from '../../components/CardComponent/CardDetailComponent';
import CardLinks from '../../components/CardLinks';
import { characters } from '../../data/characters';
import { useAuth } from '../../utils/AuthContext';
import { fetchCardById, bookmarkCardById, unbookmarkCardById, rateCardById, fetchUserBookmarks } from '../../utils/api';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { themeStyles } from '../../styles/styles';

const CardComponent = () => {
  const { slug } = useLocalSearchParams();
  const router = useRouter();
  const [card, setCard] = useState(null);
  const [character, setCharacter] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(null);
  const [userRating, setUserRating] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
  const { user, token } = useAuth();
  const userId = user?.userId;
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCardDetails, setSelectedCardDetails] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchCard();
    }
  }, [slug, userId, user]);

  const fetchCard = async () => {
    setLoading(true);
    try {
      const data = await fetchCardById(slug, userId || ''); // Fetch card data using slug
      setCard(data);

      if (data.characterName) {
        const foundCharacter = Object.values(characters).find(c => c.name === data.characterName);
        setCharacter(foundCharacter);
      }

      if (userId) {
        const userBookmarks = await fetchUserBookmarks(userId, token);
        const isBookmarkedByUser = userBookmarks.some(bookmark => bookmark._id === data._id);
        setIsBookmarked(isBookmarkedByUser);
      } else {
        setIsBookmarked(false);
      }

      setAverageRating(data.averageRating || 0);
    } catch (error) {
      console.error('Error fetching card:', error);
      Alert.alert('Error', 'Could not load the card. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleMoveSetLinkPress = (moveSetName, moves) => {
    setSelectedCardDetails({
      moveSetName,
      moves,
      cardName: card.cardName,
      image: card.image,
    });
    setIsModalVisible(true);
  };

  const handleEditPress = () => {
    // setMenuVisible(false);
    router.push({
      pathname: `${card.cardName}/create`,
      params: { slug: card._id, userId: user?.Id, isEdit: true },
    });
  };

  const toggleBookmark = async () => {
    if (!userId) {
      Alert.alert('Please log in to bookmark this card');
      return;
    }
    try {
      if (isBookmarked) {
        await unbookmarkCardById(userId, card._id, token);
        setIsBookmarked(false);
        Alert.alert('Success', 'Card unbookmarked successfully!');
      } else {
        await bookmarkCardById(userId, card._id, token);
        setIsBookmarked(true);
        Alert.alert('Success', 'Card bookmarked successfully!');
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      Alert.alert('Error', 'Failed to update bookmark. Please try again.');
    }
  };

  const openLink = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', `Cannot open the URL: ${url}`);
      }
    } catch (error) {
      console.error('Failed to open link:', error);
      Alert.alert('Error', 'An error occurred while trying to open the link.');
    }
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{ flex: 1, justifyContent: 'center' }}
      />
    );
  }

  if (!card) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>Card not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={themeStyles.container}>
      <HeroComponent
        handleCreatorPress={() =>
          router.push({
            pathname: `users/${card.username}/creator-cards`,
            params: { creatorId: card?.userId, username: card?.username },
          })
        }
        rating={averageRating}
        isBookmarked={isBookmarked}
        user={user}
        card={card}
        image={character?.image}
        handleEditPress={handleEditPress}
        toggleBookmark={toggleBookmark}
        onRatingChange={setUserRating}
        onDelete={() => router.back()}
      />
      <View style={{ paddingBottom: 64 }}>
        <Text style={{ margin: 8, marginBottom: 16, fontSize: 16 }}>{card?.cardDescription}</Text>
        <CardLinks card={card} handleMoveSetLinkPress={handleMoveSetLinkPress} openLink={openLink} />

      </View>
      <Modal visible={isModalVisible} animationType="slide" transparent={false}>
        <View style={{ flex: 1, justifyContent: 'center', marginTop: 0, paddingTop: 64, position: 'relative', backgroundColor: '#ede9e8' }}>
          <CardDetailComponent
            route={{ params: selectedCardDetails }}
            navigation={{ setParams: () => { }, navigate: () => { } }} // Dummy navigation object
            closeModal={() => setIsModalVisible(false)} // Pass down the close function
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default CardComponent;
