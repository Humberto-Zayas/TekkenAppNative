// CustomHeader.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { useAuth } from '../../utils/AuthContext';
import { useRoute } from '@react-navigation/native';

const CustomHeader = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { user, logout } = useAuth();
  const route = useRoute();
  const [screenName, setScreenName] = useState(route.name);

  const handleLoginNavigation = (isSignUp) => {
    setMenuVisible(false);
    navigation.navigate('Login', { isSignUp });
  };

  const handleLogout = () => {
    setMenuVisible(false);
    logout();
    navigation.navigate('Home');
  };

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.headerContainer}>
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.backArrow}>{'< Back'}</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.screenName}>{screenName}</Text>

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
    padding: 20,
    marginTop: 50,
    backgroundColor: 'transparent',
  },
  backArrow: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  screenName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
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
