import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { characters } from '../data/characters'; // Ensure you're importing the default export
import { Link } from 'expo-router';
// import { useAuth } from '../utils/AuthContext';

// Helper function to create a slug from a name
const slugify = (name) => {
  return name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

export default function Page() {
  return (
    <View style={styles.screen}>
      <Text style={styles.userStatus}>
        Choose A Fighter
      </Text>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {/* Convert characters object to an array and map over it */}
        {Object.values(characters).map((character) => {
          const slug = slugify(character.name); // Create slug for the character
          return (
            <Link key={character.id} href={`/cardlist/${slug}`} style={styles.box}>

              <View style={styles.boxContent}>
              <Image source={character.image} style={{ width: 72, height: 72, borderRadius: 8 }} />
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: '#222',
                }}
              >
                {character.name.replace(/_/g, ' ')}
              </Text>
              </View>
            </Link>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, // Ensures the root view occupies full screen
    backgroundColor: '#fff',
  },
  userStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center', // Align text to the center horizontally
    paddingBottom: 16,
    color: '#222'
  },
  gridContainer: {
    marginTop: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 40,
    maxWidth: 767,
    alignSelf: 'center',
    overflow: 'scroll'
  },
  boxContent: {
    alignItems: 'center', // Ensures vertical alignment of content
  },
  box: {
    alignItems: 'center',
    margin: 8,
  },
});
