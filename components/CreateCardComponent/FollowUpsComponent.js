import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const FollowUpsComponent = ({ onClose, setFollowUpData, followUpData, frameData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMove, setSelectedMove] = useState(null); // Track the first move selection

  const addFollowUp = (move2) => {
    const newFollowUp = {
      move1: selectedMove,
      move2: move2,
    };
    setFollowUpData([...followUpData, newFollowUp]);
    setSelectedMove(null); // Reset after pairing
    setModalVisible(false);
  };

  const deleteFollowUp = (index) => {
    const updatedFollowUps = [...followUpData];
    updatedFollowUps.splice(index, 1);
    setFollowUpData(updatedFollowUps);
  };

  const handleMoveSelect = (move) => {
    if (!selectedMove) {
      setSelectedMove(move); // First move selected
      // Do not close modal here if you want it to stay open for the second selection
    } else {
      addFollowUp(move); // Second move selected, add the pair
    }
  };

  const handleAddFollowUpPress = () => {
    setModalVisible(true); // To select the first move
  };

  const filteredFrameData = () => {
    return frameData.filter((frameMove) =>
      !followUpData.some((followUp) =>
        [followUp.move1?.move, followUp.move2?.move].includes(frameMove.move))
    );
  };

  const renderListData = () => {
    // Temporarily include the selected first move if it hasn't been paired yet
    const listData = [...followUpData];
    if (selectedMove) {
      listData.push({ move1: selectedMove, move2: null }); // Temporarily show the selected first move
    }
    return listData;
  };

  const MoveListModal = () => (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => {
        setModalVisible(false);
        if (selectedMove) {
          // If a move was selected but not paired, reset it
          setSelectedMove(null);
        }
      }}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.header}>
          Select {selectedMove ? 'the second move' : 'a move'}
        </Text>
        <FlatList
          data={frameData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.moveItem}
              onPress={() => handleMoveSelect(item)}
            >
              <Text>{item.move}</Text>
              <Text>{item.description}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.move}
        />
        {/* <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
          <FontAwesome name="times" size={20} color="black" />
        </TouchableOpacity> */}
      </View>
    </Modal>
  );

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Follow Ups</Text>
      <FlatList
        style={styles.flatList}
        data={renderListData()}
        renderItem={({ item, index }) => (
          <View style={styles.tableRow}>
            <Text style={styles.columnLeft}>{item.move1.move}</Text>
            <Text style={styles.columnRight}>{item.move2 ? ` ${item.move2.move}` : ''}</Text>
            <TouchableOpacity style={styles.deleteIcon} onPress={() => deleteFollowUp(index)}>
              <FontAwesome name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyList}>No follow ups added yet</Text>}
      />
      <TouchableOpacity onPress={handleAddFollowUpPress} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <MoveListModal />
    </View>
  );
};

export default FollowUpsComponent;
