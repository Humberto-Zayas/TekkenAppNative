import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const PunisherComponent = ({ onClose, setPunisherData, punisherData, frameData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailMove, setDetailMove] = useState(null);

  const addPunisher = (move) => {
    setPunisherData([...punisherData, move]);
    setModalVisible(false);
  };

  const deletePunisher = (index) => {
    const updatedPunishers = [...punisherData];
    updatedPunishers.splice(index, 1);
    setPunisherData(updatedPunishers);
  };

  const handleMovePress = (move) => {
    setDetailMove(move)
  };

  const filterFrameData = () => {
    const punisherMoveInputs = punisherData.map((punisher) => punisher.input);
    return frameData.filter((move) => !punisherMoveInputs.includes(move.input));
  };

  const MoveListModal = () => (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.header}>Choose Move</Text>
        <FlatList
          data={filterFrameData()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.moveItem} onPress={() => addPunisher(item)}>
              <Text>{item.input}</Text>
              <Text>{item.notes}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity onPress={() => setModalVisible(null)} style={styles.closeButton}>
          <FontAwesome name="times" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </Modal>
  );

  const MoveDetailsModal = () => (
    <Modal
      visible={detailMove !== null}
      animationType="fade"
      onRequestClose={() => setDetailMove(null)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.header}>Move Details</Text>
        {detailMove && (
          <ScrollView style={styles.moveDetails}>
            <Text>Input: {detailMove.input}</Text>
            <Text>Hit Level: {detailMove.hitLevel}</Text>
            <Text>Damage: {detailMove.damage}</Text>
            <Text>Startup Frame: {detailMove.startupFrame}</Text>
            <Text>Block Frame: {detailMove.blockFrame}</Text>
            <Text>Hit Frame: {detailMove.hitFrame}</Text>
            <Text>Notes: {detailMove.notes}</Text>
          </ScrollView>
        )}
        <TouchableOpacity onPress={() => setDetailMove(null)} style={styles.closeButton}>
          <FontAwesome name="times" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={() => onClose()} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Punishers</Text>
      <FlatList
        style={styles.flatList}
        data={punisherData}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.punisherItem} onPress={() => handleMovePress(item)}>
            <View style={styles.tableRow}>
              <Text style={styles.columnLeft}>{item.input}</Text>
              <Text style={styles.column}>{item.notes}</Text>
              <TouchableOpacity style={styles.deleteIcon} onPress={() => deletePunisher(index)}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text style={styles.emptyList}>No punishers added yet</Text>}
      />
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <MoveListModal />
      <MoveDetailsModal />
    </View>
  );
};

export default PunisherComponent;
