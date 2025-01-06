import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import CardItem from '../CardItem';
import { styles } from './styles';

const SavedListComponent = ({
  characterName,
  cards,
  user,
  handleCardPress,
  handleDeletePress,
  handleEditPress,
  handleBookmarkPress,
  getBackgroundColor,
}) => {
  const router = useRouter(); // Use Expo Router's `useRouter`

  return (
    <>
      {user ? (
        cards?.length === 0 ? (
          // <Text style={styles.noCardsText}>
          //   {`You currently have no bookmarked cards${characterName ? ` for ${characterName}` : ''}.`}
          // </Text>
          <>
          </>
        ) : (
          <FlatList
            contentContainerStyle={styles.flatList}
            data={cards}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <CardItem
                item={item}
                user={user}
                handleCardPress={(id) => handleCardPress(id, item.characterName, item.isBookmarked)}
                handleDeletePress={() => handleDeletePress(item)}
                handleEditPress={() => handleEditPress(item)}
                handleBookmarkPress={handleBookmarkPress}
                getBackgroundColor={getBackgroundColor}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            To view saved cards, you must login or sign up.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/login?isSignUp=false')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/login?isSignUp=true')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default SavedListComponent;
