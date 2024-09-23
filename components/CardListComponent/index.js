import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import SavedListComponent from '../SavedListComponent';
import LoginSignupModalComponent from './LoginSignupModalComponent';
import Pagination from '../Pagination';
import { useAuth } from '../../utils/AuthContext';
import { getBackgroundColor } from '../../utils/utils';
import { styles } from './styles';
import { format } from 'date-fns';
import tags from '../../data/tags';
import { fetchCardsByCharacter } from '../../utils/api'; // Import the API function

const CardListComponent = ({ route, navigation }) => {
  const { character } = route.params;
  const { name, image } = character;
  const [showSavedList, setShowSavedList] = useState(false);
  const [isCardMenuVisible, setCardMenuVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [youtubeQuery, setYouTubeQuery] = useState(false);
  const [twitchQuery, setTwitchQuery] = useState(false);

  const { user } = useAuth();

  const handleTagClick = (tag) => {
    const index = selectedTags.findIndex(t => t.name === tag.name);
    if (index === -1) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      const updatedTags = selectedTags.filter(t => t.name !== tag.name);
      setSelectedTags(updatedTags);
    }
  };

  const handleYouTubeTagClick = () => {
    setYouTubeQuery(!youtubeQuery);
  };

  const handleTwitchTagClick = () => {
    setTwitchQuery(!twitchQuery);
  };

  const fetchCards = async (page = 1) => {
    try {
      const { cards: fetchedCards, totalCount: fetchedTotalCount, totalPages: fetchedTotalPages } = await fetchCardsByCharacter(name, page, selectedTags, youtubeQuery, twitchQuery, pageSize);
      const sortedCards = sortOrder === 'ascending' ? fetchedCards : fetchedCards.reverse();

      setCards(sortedCards);
      setTotalCount(fetchedTotalCount);
      setTotalPages(fetchedTotalPages);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleCardPress = (id) => {
    const frameData = loadFrameData(name); // Load frame data based on the character name
    navigation.navigate('CardComponent', {
      id,
      frameData, // Pass the frame data to the CardComponent
    });
  };
  

  const renderCardItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.cardItem, { backgroundColor: getBackgroundColor(item.averageRating) }]}
        onPress={() => handleCardPress(item._id)}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} numberOfLines={1}>
            {item.cardName}
          </Text>
          <Text style={{ color: 'white' }}>Average Rating: {item.averageRating}</Text>
          <Text style={{ color: 'white' }}>Creator: {item.username}</Text>
          <Text style={{ color: 'white' }}>
          {item.lastEditedAt
            ? `Last Edited: ${format(new Date(item.lastEditedAt), 'MMM dd, yyyy')}`
            : `Created: ${format(new Date(item.createdAt), 'MMM dd, yyyy')}`}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const toggleCardMenu = () => {
    setCardMenuVisible(!isCardMenuVisible);
  };

  const frameDataFiles = {
    Alisa: require('../../data/AlisaFrameData.js').default,
    Asuka: require('../../data/AsukaFrameData.js').default,
    Azucena: require('../../data/AzucenaFrameData.js').default,
    Bryan: require('../../data/BryanFrameData.js').default,
    Claudio: require('../../data/ClaudioFrameData.js').default,
    Devil_Jin: require('../../data/Devil_JinFrameData.js').default,
    Dragunov: require('../../data/DragunovFrameData.js').default,
    Eddy: require('../../data/EddyFrameData.js').default,
    Feng: require('../../data/FengFrameData.js').default,
    Hwoarang: require('../../data/HwoarangFrameData.js').default,
    Jin: require('../../data/JinFrameData.js').default,
    Jun: require('../../data/JunFrameData.js').default,
    Kazuya: require('../../data/KazuyaFrameData.js').default,
    King: require('../../data/KingFrameData.js').default,
    Kuma: require('../../data/KumaFrameData.js').default,
    Lars: require('../../data/LarsFrameData.js').default,
    Law: require('../../data/LawFrameData.js').default,
    Lee: require('../../data/LeeFrameData.js').default,
    Lili: require('../../data/LiliFrameData.js').default,
    Nina: require('../../data/NinaFrameData.js').default,
    Panda: require('../../data/PandaFrameData.js').default,
    Paul: require('../../data/PaulFrameData.js').default,
    Raven: require('../../data/RavenFrameData.js').default,
    Reina: require('../../data/ReinaFrameData.js').default,
    Shaheen: require('../../data/ShaheenFrameData.js').default,
    Steve: require('../../data/SteveFrameData.js').default,
    Victor: require('../../data/VictorFrameData.js').default,
    Xiaoyu: require('../../data/XiaoyuFrameData.js').default,
    Yoshimitsu: require('../../data/YoshimitsuFrameData.js').default,
    Zafina: require('../../data/ZafinaFrameData.js').default,

  };

  const loadFrameData = (characterName) => {
    const sanitizedCharacterName = characterName.replace(/\s+/g, '');
    return frameDataFiles[sanitizedCharacterName] || null;
  };
  
  const handleCreateCard = () => {
    setCardMenuVisible(false);
    if (!user) {
      setShowModal(true);
    } else {
      const frameData = loadFrameData(name); // Load frame data based on the character name
      navigation.navigate('CreateCardComponent', {
        characterName: name,
        characterImage: image,
        frameData, // Pass the frame data to the next component
      });
    }
  };   

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  const renderLoginSignupModal = () => {
    return (
      <LoginSignupModalComponent
        showModal={showModal}
        closeModal={closeModal}
        navigation={navigation}
      />
    );
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    fetchCards(currentPage);
  }, [name, selectedTags, currentPage, youtubeQuery, twitchQuery]);

  useFocusEffect(
    useCallback(() => {
      setSelectedTags([]);
      setCurrentPage(1);
      fetchCards();
    }, [name, sortOrder])
  );

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image source={image} style={styles.heroImage} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
          {name}
        </Text>
      </View>
      {showSavedList ? (
        <SavedListComponent characterName={name} navigation={navigation} />
      ) : (
        <>
          <View style={styles.tagsContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {tags.map((tag) => (
                <TouchableOpacity
                  onPress={() => handleTagClick(tag)}
                  style={[
                    styles.tag,
                    selectedTags.some(t => t.name === tag.name) && styles.selectedTag
                  ]}
                  key={tag.name}
                >
                  <Text style={styles.tagText}>{tag.name}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity
                onPress={handleYouTubeTagClick}
                style={[
                  styles.tag,
                  youtubeQuery && styles.selectedTag
                ]}
              >
                <Text style={styles.tagText}>YouTube</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleTwitchTagClick}
                style={[
                  styles.tag,
                  twitchQuery && styles.selectedTag
                ]}
              >
                <Text style={styles.tagText}>Twitch</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {cards.length === 0 && selectedTags.length === 0 && !youtubeQuery && !twitchQuery ? (
            <>
              <Text style={styles.noCardsText}>
                {`There are currently no cards${name ? ` for ${name}` : ''}. Why don't you add one?`}
              </Text>
              <TouchableOpacity style={styles.cab} onPress={handleCreateCard}>
                <Text style={styles.cabText}>+</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity style={{marginBottom: 4}} onPress={toggleSortOrder}>
                <Text style={styles.sortButtonText}>Toggle Sort Order</Text>
              </TouchableOpacity>
              {selectedTags.length > 0 && cards.length === 0 && (
                <Text style={styles.noCardsText}>
                  {`There are currently no cards for the following tag: ${selectedTags.map(tag => tag.name).join(', ')}`}
                </Text>
              )}
              {youtubeQuery && cards.filter(card => card.youtubeLink).length === 0 && (
                <Text style={styles.noCardsText}>
                  There are currently no cards with a YouTube link.
                </Text>
              )}
              {twitchQuery && cards.filter(card => card.twitchLink).length === 0 && (
                <Text style={styles.noCardsText}>
                  There are currently no cards with a Twitch link.
                </Text>
              )}
              <FlatList
                contentContainerStyle={styles.flatList}
                data={cards}
                keyExtractor={(item) => item._id}
                renderItem={renderCardItem}
                showsVerticalScrollIndicator={false}
              />
              {cards.length > 10 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePreviousPage={handlePreviousPage}
                  handleNextPage={handleNextPage}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </>
          )}
        </>
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
