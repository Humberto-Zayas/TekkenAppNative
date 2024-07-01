import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { MoveTableHeader, FlowChartRow } from './MoveTable'

const MoveFlowChartComponent = ({ onClose, setMoveFlowChartData, moveFlowChartData, frameData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMove, setSelectedMove] = useState(null); // Track the first move selection

  const addFollowUp = (move2) => {
    const newFollowUp = {
      move1: selectedMove,
      move2: move2,
    };
    setMoveFlowChartData([...moveFlowChartData, newFollowUp]);
    setSelectedMove(null); // Reset after pairing
    setModalVisible(false);
  };

  const deleteFollowUp = (index) => {
    const updatedFollowUps = [...moveFlowChartData];
    updatedFollowUps.splice(index, 1);
    setMoveFlowChartData(updatedFollowUps);
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
      !moveFlowChartData.some((followUp) =>
        [followUp.move1?.move, followUp.move2?.move].includes(frameMove.move))
    );
  };

  const renderListData = () => {
    // Temporarily include the selected first move if it hasn't been paired yet
    const listData = [...moveFlowChartData];
    if (selectedMove) {
      listData.push({ move1: selectedMove, move2: null }); // Temporarily show the selected first move
    }
    return listData;
  };

  const renderMoveListHeader = () => (
    <View style={styles.tableHeader}>
      <View style={styles.column}>
        <Text style={styles.headerText}>Move</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Hit</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Dmg</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Start</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Block</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Hit</Text>
      </View>
    </View>
  );

  const MoveListModal = () => (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => {
        setModalVisible(false);
        if (selectedMove) {
          setSelectedMove(null);
        }
      }}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.header}>
          Select {selectedMove ? 'the second move' : 'a move'}
        </Text>
        {renderMoveListHeader()}
        <FlatList
          data={frameData}
          style={styles.flatList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.moveItem}
              onPress={() => handleMoveSelect(item)}
            >
              <View style={styles.flatList}>
                <View style={styles.tableRow}>
                  <Text style={styles.column}>{item.move}</Text>
                  <Text style={styles.column}>{item.hitLevel}</Text>
                  <Text style={styles.column}>{item.damage}</Text>
                  <Text style={styles.column}>{item.startupFrame}</Text>
                  <Text style={styles.column}>{item.blockFrame}</Text>
                  <Text style={styles.column}>{item.hitFrame}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.move}
        />
      </View>
    </Modal>
  );

  return (
    <View style={styles.rowContainer}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Flowcharts</Text>
      <MoveTableHeader firstHeader='Move' secondHeader='Next Move' />
      <FlatList
        style={styles.flatList}
        data={renderListData()}
        renderItem={({ item, index }) => (
          <FlowChartRow item={item} index={index} onDelete={deleteFollowUp} />
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

export default MoveFlowChartComponent;
