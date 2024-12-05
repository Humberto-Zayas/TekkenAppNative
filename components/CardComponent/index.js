import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HeroComponent from './HeroComponent';
import { characters } from '../../data/characters';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';
import { fetchCardById, bookmarkCardById, unbookmarkCardById, rateCardById, fetchUserBookmarks } from '../../utils/api';

const CardComponent = ({ route, navigation }) => {
  const { id, frameData } = route.params;
  const [card, setCard] = useState(null);
  const [character, setCharacter] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(null); // Directly set the initial value
  const [userRating, setUserRating] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
  const { user, token } = useAuth();
  const userId = user?.userId;
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetchCard();
  }, [id, userId, user]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchCard();
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (card?.characterName) {
      const foundCharacter = Object.values(characters).find(c => c.name === card.characterName);
      setCharacter(foundCharacter);
    }
  }, [card]);

  useEffect(() => {
    if (card?.cardName) {
      navigation.setParams({ screenName: card.cardName }); // Update params dynamically
    }
  }, [card, navigation]);

  const fetchCard = async () => {
    setLoading(true);
    try {
      const data = await fetchCardById(id, userId || '');
      setCard(data);

      // Fetch user's bookmarks and check if this card is bookmarked
      if (userId) {
        const userBookmarks = await fetchUserBookmarks(userId, token);
        const isBookmarkedByUser = userBookmarks.some(bookmark => bookmark._id === id);
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
    if (moveSetName === 'HeatEngagers') {
      navigation.navigate('CardDetailComponent', { moveSetName, moves: character?.heatEngagersData, cardName: card.cardName, image: character?.image });
    } else {
      navigation.navigate('CardDetailComponent', { moveSetName, moves, cardName: card.cardName, image: character?.image });
    }
  };

  const toggleBookmark = async () => {
    try {
      if (!userId) {
        Alert.alert('Please log in to bookmark this card');
        return;
      }
      if (isBookmarked) {
        await unbookmarkCardById(userId, id, user.token);
        setIsBookmarked(false);
        Alert.alert('Success', 'Card unbookmarked successfully!');
      } else {
        await bookmarkCardById(userId, id, user.token);
        setIsBookmarked(true);
        Alert.alert('Success', 'Card bookmarked successfully!');
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
      Alert.alert('Error', 'Failed to update bookmark. Please try again.');
    }
  };

  const rateCard = async (rating) => {
    try {
      if (!userId) {
        Alert.alert('Please log in to rate this card');
        return;
      }
      await rateCardById(id, userId, rating, user?.username, token);
      Alert.alert('Success', 'Rating submitted successfully!');
      // Optionally fetch the new average rating from API or calculate based on submission
      setAverageRating((prevAverage) => (prevAverage * card.numRatings + userRating) / (card.numRatings + 1));
    } catch (error) {
      console.error('Error submitting rating:', error);
      Alert.alert('Error', 'Failed to submit your rating. Please try again.');
    }
  };

  const handleRatingChange = (newRating) => {
    console.log('Selected Rating:', newRating);  // Debug log
    setUserRating(newRating);
    rateCard(newRating); // Immediately call rateCard when rating is changed
  };

  const handleCreatorPress = () => {
    navigation.navigate('CreatorCardListComponent', { creatorId: card?.userId, creator: card?.username });
  };

  const onDelete = () => {
    navigation.goBack();
  };

  const openLink = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) => {
        Alert.alert('Error', 'Failed to open the link. It may be incorrect or does not exist anymore');
      }
      );
    }
  };


  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <ScrollView style={styles.container}>
      {card && (
        <>
          <HeroComponent
            handleCreatorPress={handleCreatorPress}
            rating={averageRating}
            isBookmarked={isBookmarked}
            user={user}
            card={card}
            image={character?.image}
            frameData={frameData}
            toggleBookmark={toggleBookmark}
            onRatingChange={handleRatingChange}
            onDelete={onDelete}
            navigation={navigation}
          />
          <View style={{ paddingBottom: 64 }}>
            <Text style={{ margin: 8, marginBottom: 16, fontSize: 16 }}>{card?.cardDescription}</Text>
            {character?.heatEngagersData.length > 0 && (
              <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('HeatEngagers', card?.heatEngagersData || [])}>
                <FontAwesome name="external-link" size={16} color="white" />
                <Text style={styles.linkText}>Heat Engagers</Text>
                <Text style={styles.counter}>{character?.heatEngagersData.length}</Text>
              </TouchableOpacity>
            )}
            {card?.punisherData.length > 0 && (
              <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('Punishers', card?.punisherData || [])}>
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
        </>
      )}
    </ScrollView>
  );
};

export default CardComponent;
