import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const FollowUpsComponent = ({ onClose, setFollowUpData, followUpData, frameData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMove, setSelectedMove] = useState(null); // Single move selection at a time

  const addFollowUp = (move2) => {
    // Assuming selectedMove is already set for move1
    const newFollowUp = {
      move1: selectedMove,
      move2: move2,
    };
    setFollowUpData([...followUpData, newFollowUp]);
    setSelectedMove(null); // Reset selection
    setModalVisible(false);
  };

  const deleteFollowUp = (index) => {
    const updatedFollowUps = [...followUpData];
    updatedFollowUps.splice(index, 1);
    setFollowUpData(updatedFollowUps);
  };

  const handleMoveSelect = (move) => {
    if (!selectedMove) {
      setSelectedMove(move); // Select first move
      setModalVisible(false); // Re-open modal for second move selection
    } else {
      addFollowUp(move); // Add pair when second move is selected
    }
  };

  const handleAddFollowUpPress = () => {
    setModalVisible(true); // Open modal to select the first move
  };

  const filteredFrameData = () => {
    // This will return frameData excluding moves already selected as move1 or move2 in followUpData
    return frameData.filter((frameMove) =>
      !followUpData.some((followUp) =>
        [followUp.move1?.move, followUp.move2?.move].includes(frameMove.move))
    );
  };

  const MoveListModal = () => (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.header}>
          Select {selectedMove ? 'the second move' : 'a move'}
        </Text>
        <FlatList
          data={filteredFrameData()}
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
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
          <FontAwesome name="times" size={20} color="black" />
        </TouchableOpacity>
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
        data={followUpData}
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
        ListEmptyComponent={(
          <View style={styles.tableRow}>
            <Text style={styles.columnLeft}>Select First Move/Text</Text>
            <Text style={styles.columnRight}>Add Follow Up</Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={handleAddFollowUpPress} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <MoveListModal />
    </View>
  );
};

export default FollowUpsComponent;
