import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ModalComponent = ({ selectedItem, closeDrawer }) => {
  const modalContainerRef = useRef(null);
  const scrollViewRef = useRef(null);

  const handleScrollEndDrag = (e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const scrollHeight = e.nativeEvent.contentSize.height;
    const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;

    if (offsetY + scrollViewHeight + 20 >= scrollHeight) {
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
      onScrollEndDrag={handleScrollEndDrag}
      showsVerticalScrollIndicator={false}
    >
      <View ref={modalContainerRef} style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{selectedItem?.value}</Text>
          <Text style={styles.modalText}>{selectedItem?.description}</Text>
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
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 50,
    marginHorizontal: 20,
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
