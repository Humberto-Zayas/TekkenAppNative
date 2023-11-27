// ModalComponent.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

const ModalComponent = ({ selectedItem, closeDrawer }) => {
  return (
    <ScrollView
      style={styles.modalContainer}
      showsVerticalScrollIndicator={false}
      onScrollEndDrag={(e) => {
        const offsetY = e.nativeEvent.contentOffset.y;
        const scrollHeight = e.nativeEvent.contentSize.height;
        if (offsetY + 700 >= scrollHeight) {
          closeDrawer();
        }
      }}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>{selectedItem?.value}</Text>
        <Text style={styles.modalText}>{selectedItem?.description}</Text>
        <BorderlessButton onPress={closeDrawer} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </BorderlessButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  modalContent: {
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default ModalComponent;
