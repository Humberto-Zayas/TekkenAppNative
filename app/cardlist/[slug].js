import React, { useState, useEffect } from 'react';
import { Alert, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; // Expo Router hooks
import SavedListComponent from '../../components/SavedListComponent';
import LoginSignupModalComponent from '../../components/CardListComponent/LoginSignupModalComponent';
import Pagination from '../../components/Pagination';
import TagFilter from '../../components/TagFilter';
import ToggleButtons from '../../components/ToggleButtons/index.js';
import CardList from '../../components/CardList/index.js';
import { useAuth } from '../../utils/AuthContext';
import { getBackgroundColor } from '../../utils/utils';
import { deleteCard, bookmarkCardById, unbookmarkCardById, fetchCardsByCharacter, fetchBookmarksByCharacter } from '../../utils/api';
import { styles } from '../../components/CardListComponent/styles';
import tags from '../../data/tags';
import { characters } from '../../data/characters'; // Import characters data

const CardListPage = () => {
  const { slug } = useLocalSearchParams(); // Use Expo Router's `useSearchParams`
  const router = useRouter(); // Use Expo Router's `useRouter`
  const [showSavedList, setShowSavedList] = useState(false);
  const [isCardMenuVisible, setCardMenuVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [bookmarkedCards, setBookmarkedCards] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending');
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [youtubeQuery, setYouTubeQuery] = useState(false);
  const [twitchQuery, setTwitchQuery] = useState(false);
  const { user, token } = useAuth();

  // Helper function to find a character by slug
  const findCharacterBySlug = (slug) => {
    return Object.values(characters).find(
      (character) =>
        character.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') === slug
    );
  };

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

  const loadBookmarks = async () => {
    try {
      const { sortedBookmarks, totalCount, totalPages } = await fetchBookmarksByCharacter(
        user.userId,
        character.name,
        sortOrder,
        pageSize
      );

      setBookmarkedCards(sortedBookmarks);
      setTotalCount(totalCount);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    }
  };

  const handleCardPress = (id, cardName) => {
    router.push({
      pathname: `/card/${id}`,
      params: { cardName }
    });
  };

  const handleCreateCard = () => {
    setCardMenuVisible(false);
    if (!user) {
      setShowModal(true);
    } else {
      setShowModal(true);
      router.push({
        pathname: `${character.name}/create`,
        params: { characterImage: character.image }
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

  const handleYouTubeTagClick = () => {
    setYouTubeQuery(!youtubeQuery);
  };

  const handleTwitchTagClick = () => {
    setTwitchQuery(!twitchQuery);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
  };

  const toggleCardMenu = () => {
    setCardMenuVisible(!isCardMenuVisible);
  };

  const handleEditPress = (item) => {
    console.log(item.characterName)
    router.push({
      pathname: `${item.characterName}/create`,
      params: { cardData: JSON.stringify(item), isEdit: true, characterImage: character.image },
    });
  };

  const handleBookmarkPress = async (item, isBookmarked) => {
    try {
      if (isBookmarked) {
        await bookmarkCardById(user.userId, item._id, token);
      } else {
        await unbookmarkCardById(user.userId, item._id, token);
      }
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

    if (user) {
      loadBookmarks();
    }


  }, [character, selectedTags, currentPage, youtubeQuery, twitchQuery, user, bookmarkedCards]);

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
      <>
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
          toggleSortOrder={toggleSortOrder}
          cards={cards}
          handleYouTubeTagClick={handleYouTubeTagClick}
          youtubeQuery={youtubeQuery}
          handleTwitchTagClick={handleTwitchTagClick}
          twitchQuery={twitchQuery}
        />
      </>
      {showSavedList ? (
        <>
          <SavedListComponent
            characterName={character.name}
            cards={bookmarkedCards}
            user={user}
            handleCardPress={handleCardPress}
            handleDeletePress={handleDeletePress}
            handleEditPress={handleEditPress}
            handleBookmarkPress={handleBookmarkPress}
            getBackgroundColor={getBackgroundColor}
          />
        </>
      ) : (
        <>
          <CardList
            cards={cards}
            user={user}
            handleCardPress={handleCardPress}
            handleDeletePress={handleDeletePress}
            handleEditPress={handleEditPress}
            handleBookmarkPress={handleBookmarkPress}
            getBackgroundColor={getBackgroundColor}
          />
        </>
      )}
      {cards.length > pageSize && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePreviousPage={() => setCurrentPage(currentPage - 1)}
          handleNextPage={() => setCurrentPage(currentPage + 1)}
          setCurrentPage={setCurrentPage}
        />
      )}
      <ToggleButtons
        setShowSavedList={setShowSavedList}
        toggleCardMenu={toggleCardMenu}
      />
      <TouchableOpacity style={styles.fab} onPress={toggleCardMenu}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {isCardMenuVisible && (
        <View style={styles.fabMenu}>
          <TouchableOpacity style={styles.menuItem} onPress={handleCreateCard}>
            <Text style={{ fontSize: 16 }}>Create {slug.charAt(0).toUpperCase() + slug.slice(1)} Card</Text>
          </TouchableOpacity>
        </View>
      )}
      {showModal && renderLoginSignupModal()}
    </View>
  );
};

export default CardListPage;
