import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { characters } from '../../data/characters';

const HomeScreen = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogin = () => {
    // Implement your login logic
    console.log('Login clicked');
  };

  const handleLogout = () => {
    // Implement your logout logic
    console.log('Logout clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {characters.map((character) => (
          <TouchableOpacity
            key={character.id}
            style={styles.box}
            onPress={() => navigation.navigate('CardList', { character })}
          >
            <Image source={character.image} style={{ width: 60, height: 60, borderRadius: 10 }} />
            <Text>{character.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuText}>☰ Menu</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        animationType="slide"
        visible={isMenuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalContent} onPress={toggleMenu}>
            <Text style={styles.menuText}>Close Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalContent} onPress={handleLogin}>
            <Text style={styles.menuText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalContent} onPress={handleLogout}>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  menuContainer: {
    position: 'absolute',
    bottom: 20, // Adjust the bottom value as needed
    right: 20,
    zIndex: 1,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    width: 80,
    height: 100,
    margin: 8,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default HomeScreen;
