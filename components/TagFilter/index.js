// TagFilter.js
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../components/CardListComponent/styles';

const TagFilter = ({
  tags,
  selectedTags,
  handleTagClick,
  toggleSortOrder,
  cards,
  youtubeQuery,
  twitchQuery,
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
        </ScrollView>
      </View>

      <TouchableOpacity style={{ marginBottom: 4 }} onPress={toggleSortOrder}>
        <Text style={styles.sortButtonText}>Toggle Sort Order</Text>
      </TouchableOpacity>

      {cards.length === 0 && (
        <Text style={styles.noCardsText}>No cards found. Create one!</Text>
      )}

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
