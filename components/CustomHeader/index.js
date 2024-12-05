import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { useAuth } from '../../utils/AuthContext';
import { useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import logo from '../../assets/favicon.png';

const CustomHeader = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { user, logout } = useAuth();
  const route = useRoute();
  const screenName = route.params?.character?.name || route.params?.screenName || route.name;
  
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.navigate('Home');
    }
  };

  const handleLoginNavigation = (isSignUp) => {
    setMenuVisible(false);
    navigation.navigate('Login', { isSignUp });
  };

  const handleCreatorPress = () => {
    setMenuVisible(false);
    navigation.navigate('MyCardListComponent');
  };

  const handleLogout = () => {
    setMenuVisible(false);
    logout();
    navigation.navigate('Home');
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBack}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.screenName}>{screenName}</Text>
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
        <FontAwesome name="bars" size={24} color="blue" />
      </TouchableOpacity>
      <Modal
        transparent
        animationType="fade"
        visible={isMenuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Close Icon */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setMenuVisible(false)}
            >
              <FontAwesome name="close" size={24} color="blue" />
            </TouchableOpacity>
            {/* Menu Items */}
            {user ? (
              <>
                <TouchableOpacity
                  style={{...styles.menuItem, borderBottomWidth: 1, borderBottomColor: '#ddd' }}
                  onPress={handleCreatorPress}
                >
                  <Text style={styles.menuText}>{user.username} Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={handleLogout}
                >
                  <Text style={styles.menuText}>Logout</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                 style={{...styles.menuItem, borderBottomWidth: 1, borderBottomColor: '#ddd' }}
                  onPress={() => handleLoginNavigation(false)}
                >
                  <Text style={styles.menuText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => handleLoginNavigation(true)}
                >
                  <Text style={styles.menuText}>Sign Up</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
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
    paddingTop: 64,
    paddingBottom: 24,
    paddingHorizontal: 24,
    backgroundColor: 'transparent',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  screenName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  menuItem: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default CustomHeader;
