// CustomHeader.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useAuth } from '../../utils/AuthContext'; // Adjust the path accordingly

const CustomHeader = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { user, logout } = useAuth(); // Access user data and logout function from the authentication context

  const handleLoginNavigation = (isSignUp) => {
    setMenuVisible(false);
    navigation.navigate('Login', { isSignUp });
  };

  const handleLogout = () => {
    setMenuVisible(false);
    logout();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <Text style={styles.menuText}>☰ Menu</Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType="slide"
        visible={isMenuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalContent} onPress={() => setMenuVisible(false)}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
    backgroundColor: 'lightblue',
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
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

export default CustomHeader;
