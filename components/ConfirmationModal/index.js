import React from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import  { styles } from './styles.js'; // Ensure you import your existing styles

const ConfirmationModal = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={styles.modalContainer}>
        <View style={styles.centeredModalContainer}>
          <View style={styles.centeredMenuContainer}>
            <Text style={styles.confirmationText}>Are you sure you want to delete this card?</Text>
            <View style={styles.confirmationButtonsContainer}>
              <TouchableOpacity onPress={onConfirm}>
                <FontAwesome name="check" size={24} color="green" style={styles.menuItemIcon} />
                <Text style={styles.confirmationButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onClose}>
                <FontAwesome name="times" size={24} color="red" style={styles.menuItemIcon} />
                <Text style={styles.confirmationButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ConfirmationModal;
