import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const PunisherComponent = ({ onClose, setPunisherData, punisherData, frameData }) => {
  const [newPunisher, setNewPunisher] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMove, setSelectedMove] = useState(null);

  const addPunisher = () => {
    if (newPunisher.trim() === '') return;
    setPunisherData([...punisherData, newPunisher]);
    setNewPunisher('');
  };

  const deletePunisher = (index) => {
    const updatedPunishers = [...punisherData];
    updatedPunishers.splice(index, 1);
    setPunisherData(updatedPunishers);
  };

  const handleMovePress = (move) => {
    setSelectedMove(move);
    setModalVisible(true);
  };

  const MoveDetailsModal = () => (
    <Modal
      visible={modalVisible}
      animationType="fade"

      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        {/* Display move details */}
        <Text>Input: {selectedMove?.input}</Text>
        <Text>Hit Level: {selectedMove?.hitLevel}</Text>
        <Text>Damage: {selectedMove?.damage}</Text>
        <Text>Startup Frame: {selectedMove?.startupFrame}</Text>
        <Text>Block Frame: {selectedMove?.blockFrame}</Text>
        <Text>Hit Frame: {selectedMove?.hitFrame}</Text>
        <Text>Notes: {selectedMove?.notes}</Text>
        {/* You can add more fields here if needed */}

        {/* Close button */}
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
          <FontAwesome name="times" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.header}>Punishers</Text>
      <View style={styles.modalContainer}>
        <ScrollView style={styles.flatList}>
          {frameData.map((item, index) => (
            <TouchableOpacity key={index} style={styles.tableRow} onPress={() => handleMovePress(item)}>
              <View style={styles.columnLeft}>
                <Text>{item.input}</Text>
              </View>
              <View style={styles.column}>
                <Text>{item.notes}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* List of punishers */}
      <FlatList
        data={punisherData}
        renderItem={({ item, index }) => (
          <View style={styles.punisherItem}>
            <Text>{item.move}</Text>
            <TouchableOpacity onPress={() => deletePunisher(index)}>
              <FontAwesome name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Plus button to open modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>

      {/* Render move details modal */}
      <MoveDetailsModal />
    </View>
  );
};

export default PunisherComponent;
