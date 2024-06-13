import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
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
            toggleBookmark={toggleBookmark}
            onRatingChange={setUserRating}
            onDelete={onDelete}
            navigation={navigation}
          />
          <View style={{ paddingBottom: 64 }}>
            <Text style={styles.tableTitle}>The Strategy</Text>
            <Text style={{ marginBottom: 10, marginTop: 10 }}>{card?.cardDescription}</Text>
            <TouchableOpacity onPress={() => handleMoveSetLinkPress('HeatEngagers', card?.heatEngagersData || [])}>
              <Text style={styles.link}>Heat Engagers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMoveSetLinkPress('Punishers', card?.punisherData || [])}>
              <Text style={styles.link}>Punishers</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMoveSetLinkPress('Move Flow Chart', card?.moveFlowChartData || [])}>
              <Text style={styles.link}>Move Flow Chart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMoveSetLinkPress('', card?.followUpData || [])}>
              <Text style={styles.link}>Gauranteed Follow Ups</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleMoveSetLinkPress('Combos', card?.comboData || [])}>
              <Text style={styles.link}>Combos</Text>
            </TouchableOpacity>
            <View>
              {card?.youtubeLink && (
                <View style={styles.tableRow}>
                  <Text style={styles.columnLeft}>
                    <Text style={styles.value} numberOfLines={2}>
                      YouTube Link
                    </Text>
                  </Text>
                  <View style={styles.column}>
                    <Text style={styles.value} numberOfLines={2}>
                      {card?.youtubeLink}
                    </Text>
                  </View>
                </View>
              )}
              {card?.twitchLink && (
                <View style={styles.tableRow}>
                  <Text style={styles.columnLeft}>
                    <Text style={styles.value} numberOfLines={2}>
                      Twitch Link
                    </Text>
                  </Text>
                  <View style={styles.column}>
                    <Text style={styles.value} numberOfLines={2}>
                      {card?.twitchLink}
                    </Text>
                  </View>
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
