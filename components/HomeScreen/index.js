import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { characters } from '../../data/characters';
import Login from '../Login';
import { useAuth } from '../../utils/AuthContext';

const HomeScreen = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's assume login is successful
    const user = { username: 'exampleUser' };
    setUser(user); // Assuming you have a setUser function from useAuth
    toggleLogin(); // Close the login modal
  };

  const handleLogout = () => {
    // Implement your logout logic here
    logout();
    setMenuVisible(false); // Close the menu after logout
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
          {!user ? (
            <TouchableOpacity style={styles.modalContent} onPress={toggleLogin}>
              <Text style={styles.menuText}>Login</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.modalContent} onPress={handleLogout}>
              <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
          )}
        </View>
      </Modal>

      {/* Login modal */}
      <Modal
        transparent
        animationType="slide"
        visible={isLoginVisible}
        onRequestClose={() => setLoginVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Login onLogin={handleLogin} onClose={toggleLogin} />
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
