import React, { useState, useEffect, useImperativeHandle } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import HeroComponent from './HeroComponent';
import { characters } from '../../data/characters';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';

const CardComponent = ({ route, navigation, }) => {
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

  const fetchCard = async () => {
    try {
      if (!userId) {
        console.error('User ID is undefined');
        return;
      }

      console.log(`card id: ${id}`, `userId: ${userId}`)
  
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/id/${id}?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }
      const data = await response.json();
      setCard(data);
  
      // Other logic remains unchanged
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

  const bookmarkCard = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${userId}/bookmark/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        const responseData = await response.json();
        if (responseData.error === 'Card already bookmarked') {
          Alert.alert('Already Bookmarked', 'This card is already bookmarked!');
        } else {
          throw new Error('Failed to bookmark card');
        }
      } else {
        setIsBookmarked(true);
        console.log('Card bookmarked successfully!');
      }
    } catch (error) {
      console.error('Error bookmarking card:', error);
    }
  };

  const unbookmarkCard = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${userId}/unbookmark/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        const responseData = await response.json();
        if (responseData.error === 'Card not bookmarked') {
          console.log('Card is not bookmarked');
        } else {
          throw new Error('Failed to unbookmark card');
        }
      } else {
        setIsBookmarked(false);
        console.log('Card unbookmarked successfully!');
      }
    } catch (error) {
      console.error('Error unbookmarking card:', error);
    }
  };

  const rateCard = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/rate/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ userId, rating: userRating, username: user?.username })
      });
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const onDelete = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (userRating !== null) {
      rateCard();
    }
  }, [userRating]);

  const toggleBookmark = () => {
    if (isBookmarked) {
      unbookmarkCard();
    } else {
      bookmarkCard();
    }
  };

  const handleCreatorPress = () => {
    navigation.navigate('CreatorCardListComponent', { creatorId: card?.userId, creator: card?.username });
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
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default CardComponent;
