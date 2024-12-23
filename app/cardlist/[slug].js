import React, { useState, useEffect } from 'react';
import { Alert, View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; // Expo Router hooks
import SavedListComponent from '../../components/SavedListComponent';
import LoginSignupModalComponent from '../../components/CardListComponent/LoginSignupModalComponent';
import Pagination from '../../components/Pagination';
import CardItem from '../../components/CardItem';
import { useAuth } from '../../utils/AuthContext';
import { getBackgroundColor } from '../../utils/utils';
import { deleteCard, bookmarkCardById, unbookmarkCardById, fetchCardsByCharacter } from '../../utils/api';
import { styles } from '../../components/CardListComponent/styles';
import tags from '../../data/tags';
import { characters } from '../../data/characters'; // Import characters data

// Helper function to find a character by slug
const findCharacterBySlug = (slug) => {
  return Object.values(characters).find(
    (character) =>
      character.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') === slug
  );
};

const CardListPage = () => {
  const { slug } = useLocalSearchParams(); // Use Expo Router's `useSearchParams`
  const router = useRouter(); // Use Expo Router's `useRouter`

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

  const { user, token } = useAuth();

  const character = findCharacterBySlug(slug); // Find character by slug

  const fetchCards = async (page = 1) => {
    try {
      const { cards: fetchedCards, totalCount: fetchedTotalCount, totalPages: fetchedTotalPages } =
        await fetchCardsByCharacter(character.name, page, selectedTags, youtubeQuery, twitchQuery, pageSize, user?.userId);

      const sortedCards = sortOrder === 'ascending' ? fetchedCards : fetchedCards.reverse();

      setCards(sortedCards);
      setTotalCount(fetchedTotalCount);
      setTotalPages(fetchedTotalPages);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleCardPress = (id) => {
    router.push(`/card/${id}`); // Navigate to the specific card page dynamically
  };

  const handleCreateCard = () => {
    setCardMenuVisible(false);
    if (!user) {
      setShowModal(true);
    } else {
      setShowModal(true);
      router.push({
        pathname: `${character.name}/create`,
      });
    }
  };

  const handleTagClick = (tag) => {
    const index = selectedTags.findIndex((t) => t.name === tag.name);
    if (index === -1) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((t) => t.name !== tag.name));
    }
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  const handleBookmarkPress = async (item, isBookmarked) => {
    try {
      if (isBookmarked) {
        // Call bookmark API if the card should now be bookmarked
        await bookmarkCardById(user.userId, item._id, token);
      } else {
        // Call removeBookmark API if the card should be unbookmarked
        await unbookmarkCardById(user.userId, item._id, token);
      }

      // Update the local state after successfully toggling the bookmark
      setCards((prevCards) =>
        prevCards.map((card) =>
          card._id === item._id ? { ...card, isBookmarked } : card
        )
      );
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
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

  const handleDeletePress = (item) => {
    Alert.alert(
      "Delete Card",
      "Are you sure you want to delete this card?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => handleDeleteConfirm(item) },
      ],
      { cancelable: true }
    );
  };

  const handleDeleteConfirm = async (item) => {
    try {
      await deleteCard(item._id, user.userId, token);
      setCards((prevCards) => prevCards.filter((card) => card._id !== item._id));
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  useEffect(() => {
    if (character) {
      fetchCards(currentPage);
    }
  }, [character, selectedTags, currentPage, youtubeQuery, twitchQuery]);

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Character not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        {character.image && (
          <Image
            source={character.image}
            style={styles.heroImage}
          />
        )}
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{character.name}</Text>
      </View>
      {showSavedList ? (
        <SavedListComponent characterName={character.name} />
      ) : (
        <>
          <View style={styles.tagsContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {tags.map((tag) => (
                <TouchableOpacity
                  onPress={() => handleTagClick(tag)}
                  style={[
                    styles.tag,
                    selectedTags.some((t) => t.name === tag.name) && styles.selectedTag,
                  ]}
                  key={tag.name}
                >
                  <Text style={styles.tagText}>{tag.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          {cards.length === 0 && (
            <Text style={styles.noCardsText}>No cards found. Create one!</Text>
          )}
          <TouchableOpacity style={{ marginBottom: 4 }} onPress={toggleSortOrder}>
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
            renderItem={({ item }) => (
              <CardItem
                item={item}
                user={user}
                handleCardPress={handleCardPress}
                getBackgroundColor={getBackgroundColor}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
          {cards.length > pageSize && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePreviousPage={() => setCurrentPage(currentPage - 1)}
              handleNextPage={() => setCurrentPage(currentPage + 1)}
              setCurrentPage={setCurrentPage}
            />
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
      <TouchableOpacity style={styles.fab} onPress={handleCreateCard}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardListPage;
