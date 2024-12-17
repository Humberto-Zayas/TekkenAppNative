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
      router.push({
        pathname: '/create-card',
        params: {
          characterName: character.name,
        },
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
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{character.name}</Text>
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
      <TouchableOpacity style={styles.fab} onPress={handleCreateCard}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardListPage;
