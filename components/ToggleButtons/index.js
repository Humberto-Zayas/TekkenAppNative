import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../components/CardListComponent/styles';

const ToggleButtons = ({ setShowSavedList, toggleCardMenu }) => {
  return (
      <View style={styles.toggleButtonContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, { marginRight: 10 }]}
          onPress={() => setShowSavedList(false)}
        >
          <Text style={styles.toggleButtonText}>Show All Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShowSavedList(true)}
        >
          <Text style={styles.toggleButtonText}>Show Saved List</Text>
        </TouchableOpacity>
      </View>
  );
};

export default ToggleButtons;
