import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HeroComponent from '../../components/CardComponent/HeroComponent';
import { characters } from '../../data/characters';
import { styles } from '../../components/CardComponent/styles';
import { useAuth } from '../../utils/AuthContext';
import { fetchCardById, bookmarkCardById, unbookmarkCardById, rateCardById, fetchUserBookmarks } from '../../utils/api';
import { useLocalSearchParams, useRouter } from 'expo-router';

const CardComponent = () => {
  const { slug } = useLocalSearchParams(); // Get the slug from the URL
  const router = useRouter();
  const [card, setCard] = useState(null);
  const [character, setCharacter] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(null);
  const [userRating, setUserRating] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
  const { user, token } = useAuth();
  const userId = user?.userId;
  const [loading, setLoading] = useState(true);

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
    router.push({
      pathname: '/card-details',
      params: { moveSetName, moves, cardName: card.cardName, image: character?.image },
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
    <ScrollView style={styles.container}>
      <HeroComponent
        handleCreatorPress={() =>
          router.push({
            pathname: '/creator-cards',
            params: { creatorId: card?.userId, creator: card?.username },
          })
        }
        rating={averageRating}
        isBookmarked={isBookmarked}
        user={user}
        card={card}
        image={character?.image}
        frameData={card.frameData}
        toggleBookmark={toggleBookmark}
        onRatingChange={setUserRating}
        onDelete={() => router.back()}
      />
      <View style={{ paddingBottom: 64 }}>
        <Text style={{ margin: 8, marginBottom: 16, fontSize: 16 }}>{card?.cardDescription}</Text>
        {card?.punisherData.length > 0 && (
          <TouchableOpacity
            style={styles.link}
            onPress={() => handleMoveSetLinkPress('Punishers', card?.punisherData || [])}
          >
            <FontAwesome name="external-link" size={16} color="white" />
            <Text style={styles.linkText}>Punishers</Text>
            <Text style={styles.counter}>{card?.punisherData.length}</Text>
          </TouchableOpacity>
        )}
        {/* Add other move set buttons as needed */}
      </View>
    </ScrollView>
  );
};

export default CardComponent;
