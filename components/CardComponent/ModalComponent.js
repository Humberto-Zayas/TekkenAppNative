import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ModalComponent = ({ selectedItem, closeDrawer }) => {
  const scrollViewRef = useRef(null);
  const modalContainerRef = useRef(null);

  const handleScrollEndDrag = (e) => {
    const offsetY = e.nativeEvent.contentOffset.y;

    if (offsetY <= 0) {
      closeDrawer();
    } else {
      modalContainerRef.current.setNativeProps({
        style: { transform: [{ translateY: offsetY }] },
      });
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      onScrollEndDrag={handleScrollEndDrag}
      scrollEventThrottle={100}
    >
      <View ref={modalContainerRef} style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{selectedItem?.move}</Text>
          <Text style={styles.modalDescription}>{selectedItem?.description}</Text>
          <View style={styles.additionalDataContainer}>
            <Text style={styles.additionalData}>Hit Level: {selectedItem?.hitLevel}</Text>
            <Text style={styles.additionalData}>
              Damage: {selectedItem?.damage ? selectedItem.damage.join(', ') : ''}
            </Text>
            <Text style={styles.additionalData}>Start up frame: {selectedItem?.startUpFrame}</Text>
            <Text style={styles.additionalData}>Block frame: {selectedItem?.blockFrame}</Text>
            <Text style={styles.additionalData}>Hit frame: {selectedItem?.hitFrame}</Text>
            <Text style={styles.additionalData}>Counter hit frame: {selectedItem?.counterHitFrame}</Text>
            <Text style={styles.additionalData}>Notes: {selectedItem?.notes}</Text>
          </View>

          <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: '100%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 50,
    marginHorizontal: 20,
    height: '100%',
  },
  modalContent: {
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  additionalDataContainer: {
    marginBottom: 20,
  },
  additionalData: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ModalComponent;
