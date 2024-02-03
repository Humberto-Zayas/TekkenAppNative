import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';

const LoginSignupModalComponent = ({ showModal, closeModal, navigation }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Authentication Required</Text>
          <Text style={styles.modalText}>
            To create cards, you must log in or sign up.
          </Text>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              closeModal();
              navigation.navigate('Login', { isSignUp: false });
            }}
          >
            <Text style={styles.modalButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              closeModal();
              navigation.navigate('Login', { isSignUp: true });
            }}
          >
            <Text style={styles.modalButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButton}
            onPress={closeModal}
          >
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoginSignupModalComponent;
