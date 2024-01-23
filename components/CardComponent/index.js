import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, Alert } from 'react-native';
import HeroComponent from './HeroComponent';
import ModalComponent from './ModalComponent';
import { characters } from '../../data/characters';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';

const CardComponent = ({ route }) => {
  const { id } = route.params;
  const [card, setCard] = useState(null);
  const [character, setCharacter] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { user } = useAuth();
  const userId = user?.userId; // Make sure userId is defined


  useEffect(() => {
    const fetchCard = async () => {
      try {
        if (!userId) {
          console.error('User ID is undefined');
          return;
        }

        // Fetch card data
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/id/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cards');
        }
        const data = await response.json();
        setCard(data);

        // Find character data
        const foundCharacter = characters.find(char => char.name === data.characterName);
        setCharacter(foundCharacter);

        // Fetch user bookmarks
        const userBookmarkResponse = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/${userId}/bookmarks`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (userBookmarkResponse.ok) {
          const userBookmarkData = await userBookmarkResponse.json();
          const bookmarked = userBookmarkData.bookmarks.some(bookmark => bookmark._id === id);
          setIsBookmarked(bookmarked);
          console.log('user bookmark data:', userBookmarkData.bookmarks);
        } else {
          setIsBookmarked(false);
          console.error('Failed to fetch user bookmarks');
        }
      } catch (error) {
        console.error('Error fetching card:', error);
      }
    };

    fetchCard();
  }, [id, userId, user]);

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
      // Perform the unbookmarking logic

      // Update the local state to reflect the bookmark status
      setIsBookmarked(false);

      console.log('Card unbookmarked successfully!');
    } catch (error) {
      console.error('Error unbookmarking card:', error);
    }
  };

  const toggleBookmark = () => {
    if (isBookmarked) {
      unbookmarkCard();
    } else {
      bookmarkCard();
    }
  };

  const openDrawer = (item) => {
    setSelectedItem(item);
  };

  const closeDrawer = () => {
    setSelectedItem(null);
  };

  const renderTableItem = ({ card, index, moveSetType }) => {
    const { move, description, youtubeLink } = card;

    // Exclude __v and YouTube link from rendering
    if (moveSetType === '__v' || moveSetType === 'youtubeLink') {
      return null;
    }

    return (
      <TouchableOpacity onPress={() => openDrawer(card)}>
        <View style={styles.tableRow}>
          <View style={styles.columnLeft}>
            <Text style={styles.value} numberOfLines={2}>
              {move}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.value} numberOfLines={2}>
              {description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMoveSet = (moveSetType) => {
    if (moveSetType === '__v' || moveSetType === 'youtubeLink') {
      return null;
    }

    const moves = moveSetType === 'heatEngagersData' ? character?.heatEngagersData || [] : card?.[moveSetType] || [];

    if (!Array.isArray(moves)) {
      return null;
    }

    return (
      <View style={styles.flatList} key={moveSetType}>
        <Text style={styles.tableTitle}>{moveSetType}</Text>
        {moves.map((item, index) => (
          <View key={`${index}_${moveSetType}`}>
            {renderTableItem({ card: item, index, moveSetType })}
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <HeroComponent
        name={card?.cardName}
        thumbnail={card?.thumbnail}
        rating={card?.rating}
        isBookmarked={isBookmarked}
        toggleBookmark={toggleBookmark}
      />

      <View style={{ paddingBottom: 64 }}>
        {renderMoveSet('heatEngagersData')}
        {Object.keys(card || {}).map((moveSetType) => renderMoveSet(moveSetType))}

        <View>
          <Text style={styles.tableTitle}>The Strategy</Text>
          <Text style={{ marginTop: 10 }}>{card?.cardDescription}</Text>

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

      <Modal visible={selectedItem !== null} animationType="slide" transparent>
        <ModalComponent selectedItem={selectedItem} closeDrawer={closeDrawer} />
      </Modal>
    </ScrollView>
  );
};

export default CardComponent;
