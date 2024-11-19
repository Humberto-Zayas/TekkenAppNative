import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import MoveDetailsModal from './MoveDetailsModal';
import MoveListModal from './MoveListModal';
import { MoveTableHeader, MoveTableRow } from './MoveTable';

const PunisherComponent = ({ onClose, setPunisherData, punisherData, frameData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailMove, setDetailMove] = useState(null);

  const addPunisher = (move) => {
    const updatedPunishers = [...punisherData, move];
    setPunisherData(updatedPunishers);  // Notify parent of the change
    setModalVisible(false);             // Close modal
  };
  
  const deletePunisher = (index) => {
    const updatedPunishers = [...punisherData];
    updatedPunishers.splice(index, 1);
    setPunisherData(updatedPunishers);  // Notify parent of the change
  };
  

  const handleMovePress = (move) => {
    setDetailMove(move);
  };

  // const filterFrameData = () => {
  //   const punisherMoveInputs = punisherData.map((punisher) => punisher.move);
  //   return frameData.filter((move) => !punisherMoveInputs.includes(move.move));
  // };

  return (
    <View style={styles.rowContainer}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Punishers</Text>
      <MoveTableHeader firstHeader='Move' secondHeader='Start Up' />
      <FlatList
        style={styles.flatList}
        data={punisherData}
        renderItem={({ item, index }) => (
          <MoveTableRow item={item} index={index} onMovePress={handleMovePress} onDelete={deletePunisher} />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text style={{marginTop: 8}}>No punishers added yet</Text>}
      />
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <MoveListModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onMoveSelect={addPunisher}
        frameData={frameData}
      />
      <MoveDetailsModal detailMove={detailMove} setDetailMove={setDetailMove} />
    </View>
  );
};

export default PunisherComponent;
