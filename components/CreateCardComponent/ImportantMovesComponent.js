import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import MoveDetailsModal from './MoveDetailsModal';
import MoveListModal from './MoveListModal';
import { MoveTableHeader, MoveTableRow } from './MoveTable';

const ImportantMovesComponent = ({ onClose, setImportantMoveData, importantMoveData, frameData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailMove, setDetailMove] = useState(null);

  const addPunisher = (move) => {
    setImportantMoveData([...importantMoveData, move]);
    setModalVisible(false);
  };

  const deletePunisher = (index) => {
    const updatedPunishers = [...importantMoveData];
    updatedPunishers.splice(index, 1);
    setImportantMoveData(updatedPunishers);
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
      <Text style={styles.header}>Important Moves</Text>
      <MoveTableHeader firstHeader='Move' secondHeader='Start Up' />
      <FlatList
        style={styles.flatList}
        data={importantMoveData}
        renderItem={({ item, index }) => (
          <MoveTableRow item={item} index={index} onMovePress={handleMovePress} onDelete={deletePunisher} />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text style={styles.emptyList}>No moves added yet</Text>}
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

export default ImportantMovesComponent;
