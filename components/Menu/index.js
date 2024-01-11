import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import { useAuth } from '../../utils/AuthContext'; // Adjust the path accordingly

const Menu = ({ isMenuVisible, toggleMenu, navigation }) => {
  const { user, logout } = useAuth(); // Access user data and logout function from the authentication context

  const handleLoginNavigation = (isSignUp) => {
    toggleMenu(); // Close the menu
    navigation.navigate('Login', { isSignUp }); // Navigate to the Login screen with the isSignUp parameter
  };

  const handleLogout = () => {
    toggleMenu(); // Close the menu
    logout(); // Logout the user using the logout function from AuthContext
  };

  return (
    <Modal
      transparent
      animationType="slide"
      visible={isMenuVisible}
      onRequestClose={() => toggleMenu(false)}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.modalContent} onPress={() => toggleMenu(false)}>
          <Text style={styles.menuText}>Close Menu</Text>
        </TouchableOpacity>

        <>
          {user ? (
            <TouchableOpacity style={styles.modalContent} onPress={handleLogout}>
              <Text style={styles.menuText}>Logout</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                style={styles.modalContent}
                onPress={() => handleLoginNavigation(false)}
              >
                <Text style={styles.menuText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalContent}
                onPress={() => handleLoginNavigation(true)}
              >
                <Text style={styles.menuText}>Sign Up</Text>
              </TouchableOpacity>
            </>
          )}
        </>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Menu;
