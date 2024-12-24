import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Linking, Modal } from 'react-native';
import HeroComponent from '../../components/CardComponent/HeroComponent';
import CardDetailComponent from '../../components/CardComponent/CardDetailComponent';
import { characters } from '../../data/characters';
import { styles } from '../../components/CardComponent/styles';
import { useAuth } from '../../utils/AuthContext';
import { fetchCardById, bookmarkCardById, unbookmarkCardById, rateCardById, fetchUserBookmarks } from '../../utils/api';
import { FontAwesome } from '@expo/vector-icons';
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
      image: character?.image,
    });
    setIsModalVisible(true);
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
    <ScrollView style={styles.container}>
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
        {card?.moveData.length > 0 && (
          <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('Important Moves', card?.moveData || [])}>
            <FontAwesome name="external-link" size={16} color="white" />
            <Text style={styles.linkText}>Important Moves</Text>
            <Text style={styles.counter}>{card?.moveData.length}</Text>
          </TouchableOpacity>
        )}
        {card?.moveFlowChartData.length > 0 && (
          <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('Move Flow Chart', card?.moveFlowChartData || [])}>
            <FontAwesome name="external-link" size={16} color="white" />
            <Text style={styles.linkText}>Move Flow Chart</Text>
            <Text style={styles.counter}>{card?.moveFlowChartData.length}</Text>
          </TouchableOpacity>
        )}
        {card?.followUpData.length > 0 && (
          <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('Follow Ups', card?.followUpData || [])}>
            <FontAwesome name="external-link" size={16} color="white" />
            <Text style={styles.linkText}>Guaranteed Follow Ups</Text>
            <Text style={styles.counter}>{card?.followUpData.length}</Text>
          </TouchableOpacity>
        )}
        {card?.comboData.length > 0 && (
          <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('Combos', card?.comboData || [])}>
            <FontAwesome name="external-link" size={16} color="white" />
            <Text style={styles.linkText}>Combos</Text>
            <Text style={styles.counter}>{card?.comboData.length}</Text>
          </TouchableOpacity>
        )}
        {(card?.youtubeLink || card?.twitchLink) && (
          <Text style={{ ...styles.heroName, marginBottom: 8 }}>Guide and Stream Links</Text>
        )}
        <View style={{ marginTop: 0 }}>
          {card?.youtubeLink && (
            <TouchableOpacity
              onPress={() => openLink(card.youtubeLink)}
              style={styles.link}
            >
              <FontAwesome name="youtube" size={24} color="white" />
              <Text style={styles.linkText}>{card?.youtubeLink}</Text>
              <FontAwesome name="external-link" size={20} color="white" style={styles.counter} />
            </TouchableOpacity>
          )}
          {card?.twitchLink && (
            <TouchableOpacity
              onPress={() => openLink(card.twitchLink)}
              style={styles.link}
            >
              <FontAwesome name="twitch" size={24} color="white" />
              <Text style={styles.linkText}>{card?.twitchLink}</Text>
              <FontAwesome name="external-link" size={20} color="white" style={styles.counter} />
            </TouchableOpacity>
          )}
        </View>
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
