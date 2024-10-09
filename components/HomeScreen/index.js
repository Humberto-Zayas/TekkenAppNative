import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import {characters} from '../../data/characters'; // Ensure you're importing the default export
import { useAuth } from '../../utils/AuthContext';

const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      {/* Conditionally display user status */}
      {user && (
        <Text style={styles.userStatus}>
          Logged In as {user.username}
        </Text>
      )}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {/* Convert characters object to an array and map over it */}
        {Object.values(characters).map((character) => (
          <TouchableOpacity
            key={character.id}
            style={styles.box}
            onPress={() => navigation.navigate('CardList', { character })}
          >
            <Image source={character.image} style={{ width: 72, height: 72, borderRadius: 8 }} />
            <Text style={{ marginTop: 12 }}>{character.name.replace(/_/g, ' ')}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  userStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    paddingBottom: 16,
  },
  box: {
    alignItems: 'center',
    margin: 8,
  },
});

export default HomeScreen;
