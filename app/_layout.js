import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AuthProvider, useAuth } from '../utils/AuthContext';
import AppWrapper from '../components/AppWrapper';
import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { themeStyles } from '../styles/styles';

function HeaderLogo() {
  const router = useRouter();

  const handlePress = () => {
    router.back(); // Navigate to the previous screen
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.logoButton}>
      <Image
        source={require('../assets/favicon.png')} // Replace with your logo's path
        style={styles.logo}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

function HeaderMenu() {
  const [isModalVisible, setModalVisible] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleLogout = () => {
    setModalVisible(false);
    logout();
    router.push('/');
  };

  const handleLoginNavigation = (isSignUp) => {
    setModalVisible(false);
    router.push(`/login?isSignUp=${isSignUp}`);
  };

  const handleCreatorPress = () => {
    setModalVisible(false);
    router.push(`/users/${user.username}/my-cards`);
  };

  return (
    <>
      <TouchableOpacity onPress={openModal} style={styles.menuButton}>
        <FontAwesome name="bars" size={24} color="blue" />
      </TouchableOpacity>

      <Modal
        transparent
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Menu</Text>
            <TouchableOpacity onPress={closeModal} style={styles.modalCloseButton}>
              <FontAwesome name="close" size={24} color="blue" />
            </TouchableOpacity>
            {user ? (
              <>
                <TouchableOpacity onPress={handleCreatorPress} style={styles.menuItem}>
                  <Text style={styles.menuText}>My Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} style={styles.menuItem}>
                  <Text style={styles.menuText}>Logout</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity onPress={handleLoginNavigation} style={styles.menuItem}>
                  <Text style={styles.menuText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLoginNavigation(true)} style={styles.menuItem}>
                  <Text style={styles.menuText}>Register</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}

export default function HomeLayout() {
  return (
    <AuthProvider>
      <AppWrapper>
        <Stack
          animation="slide"
          screenOptions={{
            headerLeft: () => <HeaderLogo />, // Add custom headerLeft with logo
            headerRight: () => <HeaderMenu />, // Add HeaderMenu
            gestureEnabled: true,
          }}
        >
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen
            name="cardlist/[slug]"
            options={({ route }) => ({ title: `${route.params.slug} Cards` })}
          />
          <Stack.Screen
            name="card/[slug]"
            options={({ route }) => {
              const cardName = route.params?.cardName || 'Card Details';
              return { title: cardName };
            }}
          />
          <Stack.Screen
            name="users/[usernames]/creator-cards/index"
            options={{ title: 'Creator Cards' }}
          />
          <Stack.Screen
            name="users/[usernames]/my-cards/index"
            options={{ title: 'My Cards' }}
          />
          <Stack.Screen
            name="[characterName]/create"
            options={{ title: 'Create Card' }}
          />
        </Stack>
      </AppWrapper>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  logoButton: {
    marginLeft: 0,
  },
  logo: {
    width: 100, // Adjust the size of your logo
    height: 30,
  },
  menuButton: {
    marginRight: 32,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalCloseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  menuItem: {
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 18,
    color: 'blue',
  },
});
