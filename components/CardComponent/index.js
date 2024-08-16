import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HeroComponent from './HeroComponent';
import { characters } from '../../data/characters';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';
import { fetchCardById, bookmarkCardById, unbookmarkCardById, rateCardById } from '../../utils/api';

const CardComponent = ({ route, navigation }) => {
  const { id } = route.params;
  const [card, setCard] = useState(null);
  const [character, setCharacter] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userRating, setUserRating] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
  const { user } = useAuth();
  const userId = user?.userId;

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
      const foundCharacter = characters.find(c => c.name === card.characterName);
      setCharacter(foundCharacter);
    }
  }, [card]);

  const fetchCard = async () => {
    try {
      const data = await fetchCardById(id, userId || '');
      setCard(data);
    } catch (error) {
      console.error('Error fetching card:', error);
    }
  };

  const handleMoveSetLinkPress = (moveSetName, moves) => {
    if (moveSetName === 'HeatEngagers') {
      navigation.navigate('CardDetailComponent', { moveSetName, moves: character?.heatEngagersData });
    } else {
      navigation.navigate('CardDetailComponent', { moveSetName, moves, cardName: card.cardName });
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
        console.log('Card unbookmarked successfully!');
      } else {
        await bookmarkCardById(userId, id, user.token);
        setIsBookmarked(true);
        console.log('Card bookmarked successfully!');
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  const rateCard = async () => {
    try {
      if (!userId) {
        Alert.alert('Please log in to rate this card');
        return;
      }
      await rateCardById(id, userId, userRating, user?.username, user?.token);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  useEffect(() => {
    if (userRating !== null) {
      rateCard();
    }
  }, [userRating]);

  const handleCreatorPress = () => {
    navigation.navigate('CreatorCardListComponent', { creatorId: card?.userId, creator: card?.username });
  };

  const onDelete = () => {
    navigation.goBack();
  };

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
            toggleBookmark={toggleBookmark}
            onRatingChange={setUserRating}
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
            <View style={{ marginTop: 8 }}>
              {card?.youtubeLink && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesome name="youtube" size={32} color="red" style={{ marginRight: 8 }} />
                  <Text>
                    {card?.youtubeLink}
                  </Text>
                </View>
              )}
              {card?.twitchLink && (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <FontAwesome name="twitch" size={32} color="purple" style={{ marginRight: 8 }} />
                  <Text> {card?.twitchLink} </Text>
                </View>
              )}
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default CardComponent;
