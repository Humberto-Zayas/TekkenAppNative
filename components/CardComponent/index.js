import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from @expo/vector-icons
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
      if (!userId) {
        console.error('User ID is undefined');
        return;
      }
      const data = await fetchCardById(id, userId);
      setCard(data);
    } catch (error) {
      console.error('Error fetching card:', error);
    }
  };

  const handleMoveSetLinkPress = (moveSetName, moves) => {
    if (moveSetName === 'HeatEngagers') {
      navigation.navigate('CardDetailComponent', { moveSetName, moves: character?.heatEngagersData });
    } else {
      navigation.navigate('CardDetailComponent', { moveSetName, moves });
    }
  };

  const toggleBookmark = async () => {
    try {
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
      {user && card && (
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
            <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('HeatEngagers', card?.heatEngagersData || [])}>
              <FontAwesome name="external-link" size={16} color="white" />
              <Text style={styles.linkText}>Heat Engagers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('Punishers', card?.punisherData || [])}>
              <FontAwesome name="external-link" size={16} color="white" />
              <Text style={styles.linkText}>Punishers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('Move Flow Chart', card?.moveFlowChartData || [])}>
              <FontAwesome name="external-link" size={16} color="white" />
              <Text style={styles.linkText}>Move Flow Chart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('', card?.followUpData || [])}>
              <FontAwesome name="external-link" size={16} color="white" />
              <Text style={styles.linkText}>Guaranteed Follow Ups</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => handleMoveSetLinkPress('Combos', card?.comboData || [])}>
              <FontAwesome name="external-link" size={16} color="white" />
              <Text style={styles.linkText}>Combos</Text>
            </TouchableOpacity>
            <View style={{marginTop: 8}}>
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