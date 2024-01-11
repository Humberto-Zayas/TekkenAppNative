import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { characters } from '../../data/characters';
import { REACT_APP_API_BASE_URL } from '@env';
import { useAuth } from '../../utils/AuthContext'; // Adjust the path accordingly
import Menu from '../Menu'; // Import the Menu component

const HomeScreen = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [countries, setCountries] = useState([]);
  const { user } = useAuth();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLoginNavigation = (isSignUp) => {
    toggleMenu(); // Close the menu
    navigation.navigate('Login', { isSignUp }); // Navigate to the Login screen with the isSignUp parameter
  };

  const handleLogout = () => {
    toggleMenu(); // Close the menu
    logout(); // Logout the user using the logout function from AuthContext
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${REACT_APP_API_BASE_URL}/countries`);
        const data = await response.json();
        setCountries(data);
        console.log('Fetched countries:', data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <View style={styles.container}>
      {/* Display user status */}
      <Text style={styles.userStatus}>
        {user ? `Logged In as ${user.username}` : 'Not Logged In'}
      </Text>
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

      <Menu isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} navigation={navigation} />
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
    bottom: 20,
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
  userStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    alignItems: 'center',
    margin: 10,
  },
});

export default HomeScreen;
