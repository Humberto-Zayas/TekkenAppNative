import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../components/CardListComponent/styles';

const TagFilter = ({
  tags,
  selectedTags,
  handleTagClick,
  toggleSortOrder,
  toggleRatingSort,
  cards,
  handleYouTubeTagClick,
  youtubeQuery,
  handleTwitchTagClick,
  twitchQuery,
  sortOrder, // State for normal sort order
  ratingSortOrder, // State for rating sort order
}) => {
  return (
    <View>
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

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
        {/* Sort Order Toggle Button with Indicator */}
        <TouchableOpacity onPress={toggleSortOrder} style={styles.sortButton}>
          <Text style={styles.sortButtonText}>
            Sort: {sortOrder === 'ascending' ? '▲' : '▼'}
          </Text>
        </TouchableOpacity>

        {/* Rating Sort Toggle Button with Indicator */}
        <TouchableOpacity onPress={toggleRatingSort} style={styles.sortButton}>
          <Text style={styles.sortButtonText}>
            Rating: {ratingSortOrder === 'ascending' ? '▲' : ratingSortOrder === 'descending' ? '▼' : '⏺'}
          </Text>
        </TouchableOpacity>
      </View>

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
    </View>
  );
};

export default TagFilter;
