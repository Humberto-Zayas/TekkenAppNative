import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { useAuth } from '../../utils/AuthContext';
import { usePathname, useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import logo from '../../assets/favicon.png';

const CustomHeader = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useLocalSearchParams(); // Get query parameters like cardName

  const [screenName, setScreenName] = useState('');

  // Function to determine the current screen name dynamically
  const getScreenName = () => {
    if (pathname === '/') {
      // Home or Hi, {username} when logged in
      return user ? `Hi, ${user.username}` : 'Home';
    }

    if (pathname.startsWith('/cardlist/')) {
      // Dynamic card list slug (e.g., /cardlist/alisa)
      const slug = pathname.split('/').pop(); // Get the last part of the path (e.g., "alisa")
      return slug ? decodeURIComponent(slug.charAt(0).toUpperCase() + slug.slice(1)) : 'Characters';
    }

    if (pathname.startsWith('/card/')) {
      // Card route with a cardName query param (e.g., /card/6757dfe2cb813bcbb882bcc9?cardName=User+3’s+Easy+Alisa+Guide)
      const cardName = searchParams.cardName;
      return cardName ? decodeURIComponent(cardName) : 'Unknown Card';
    }

    if (pathname.startsWith('/users/')) {
      // Users route (e.g., /users/Hzayas/my-cards)
      const username = pathname.split('/')[2]; // Extract the username from /users/:username/my-cards
      return `${username}'s Cards`;
    }

    if (pathname.startsWith('/login')) {
      // Login page with isSignUp query param
      return 'Login';
    }

    return 'Unknown'; // Default fallback screen name
  };

  // Update screen name when pathname or searchParams change
  useEffect(() => {
    setScreenName(getScreenName());
  }, [pathname, searchParams, user]);

  const handleBack = () => {
    if (pathname !== '/') {
      router.back();
    } else {
      router.push('/');
    }
  };

  const handleLoginNavigation = (isSignUp) => {
    setMenuVisible(false);
    router.push(`/login?isSignUp=${isSignUp}`);
  };

  const handleCreatorPress = () => {
    setMenuVisible(false);
    router.push(`/users/${user.username}/my-cards`);
  };

  const handleLogout = () => {
    setMenuVisible(false);
    logout();
    router.push('/');
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
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setMenuVisible(false)}
            >
              <FontAwesome name="close" size={24} color="blue" />
            </TouchableOpacity>
            {user ? (
              <>
                <TouchableOpacity
                  style={{
                    ...styles.menuItem,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                  }}
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
                  style={{
                    ...styles.menuItem,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                  }}
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
