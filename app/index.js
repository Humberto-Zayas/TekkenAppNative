import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { characters } from '../data/characters'; // Ensure you're importing the default export
// import { useAuth } from '../utils/AuthContext';

export default function Page() {
  return (
    <View style={styles.screen}>
      <Text style={styles.userStatus}>
        Choose A Fighter
      </Text>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {/* Convert characters object to an array and map over it */}
        {Object.values(characters).map((character) => (
          <TouchableOpacity
            key={character.id}
            style={styles.box}
            // onPress={() => navigation.navigate('CardList', { character })}
          >
            <Image source={character.image} style={{ width: 72, height: 72, borderRadius: 8 }} />
            <Text style={{ marginTop: 8, fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', color: '#222' }}>{character.name.replace(/_/g, ' ')}</Text>
          </TouchableOpacity>
        ))}
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
  box: {
    alignItems: 'center',
    margin: 8,
  },
});
