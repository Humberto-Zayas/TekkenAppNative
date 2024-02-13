import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const MoveFlowChartComponent = ({ onClose, setMoveFlowChartData, moveFlowChartData, frameData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailMove, setDetailMove] = useState(null);

  const addMoveFlowChart = (move) => {
    setMoveFlowChartData([...moveFlowChartData, move]);
    setModalVisible(false);
  };

  const deleteMoveFlowChart = (index) => {
    const updatedMoveFlowChart = [...moveFlowChartData];
    updatedMoveFlowChart.splice(index, 1);
    setMoveFlowChartData(updatedMoveFlowChart);
  };

  const handleMovePress = (move) => {
    setDetailMove(move)
  };

  const filterFrameData = () => {
    const moveFlowChartInputs = moveFlowChartData.map((moveFlowChart) => moveFlowChart.move);
    return frameData.filter((move) => !moveFlowChartInputs.includes(move.move));
  };

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
            <Text>Move: {detailMove.move}</Text>
            <Text>Description: {detailMove.description}</Text>
            <Text>Hit Level: {detailMove.hitLevel}</Text>
            <Text>Damage: {Array.isArray(detailMove.damage) ? detailMove.damage.join(', ') : detailMove.damage}</Text>
            <Text>Startup Frame: {detailMove.startupFrame}</Text>
            <Text>Block Frame: {detailMove.blockFrame}</Text>
            <Text>Hit Frame: {detailMove.hitFrame}</Text>
            <Text>User notes: {detailMove.notes}</Text>
          </ScrollView>
        )}
        <TouchableOpacity onPress={() => setDetailMove(null)} style={styles.closeButton}>
          <FontAwesome name="times" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </Modal>
  );

  const MoveListModal = () => {
    const [selectedMove, setSelectedMove] = useState(null);
    const [context, setContext] = useState('');

    const handleMoveSelect = (move) => {
      setSelectedMove(move);
    };

    const handleAddMove = () => {
      if (selectedMove) {
        const moveWithDetail = { ...selectedMove, notes: context, damage: Array.isArray(selectedMove.damage) ? selectedMove.damage : [selectedMove.damage] };
        addMoveFlowChart(moveWithDetail);
        setContext('');
        setModalVisible(false);
      }
    };

    return (
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.header}>Choose Move</Text>
          {selectedMove ? (
            <View style={styles.selectedMoveContainer}>
              <Text>{selectedMove.move}</Text>
              <Text>{selectedMove.description}</Text>
              <TextInput
                style={styles.contextInput}
                placeholder="Add context..."
                value={context}
                onChangeText={(text) => setContext(text)}
                multiline
              />
              <TouchableOpacity style={styles.addButton} onPress={handleAddMove}>
                <Text>Add Move</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              data={filterFrameData()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.moveItem} onPress={() => handleMoveSelect(item)}>
                  <Text>{item.move}</Text>
                  <Text>{item.description}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <FontAwesome name="times" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={() => onClose()} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Move Flow Chart</Text>
      <FlatList
        style={styles.flatList}
        data={moveFlowChartData}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.punisherItem} onPress={() => handleMovePress(item)}>
            <View style={styles.tableRow}>
              <Text style={styles.columnLeft}>{item.move}</Text>
              <Text style={styles.column}>{item.description}</Text>
              <TouchableOpacity style={styles.deleteIcon} onPress={() => deleteMoveFlowChart(index)}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text style={styles.emptyList}>No move flow charts added yet</Text>}
      />
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <MoveListModal />
      <MoveDetailsModal />
    </View>
  );
};

export default MoveFlowChartComponent;
