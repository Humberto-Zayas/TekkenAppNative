import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native';
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
    const moveFlowChartInputs = moveFlowChartData.map((moveFlowChart) => moveFlowChart.input);
    return frameData.filter((move) => !moveFlowChartInputs.includes(move.input));
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
            <TouchableOpacity style={styles.moveItem} onPress={() => addMoveFlowChart(item)}>
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
    <Text style={styles.header}>Move Flow Chart</Text>
    <FlatList
      style={styles.flatList}
      data={moveFlowChartData}
      renderItem={({ item, index }) => (
        <TouchableOpacity style={styles.punisherItem} onPress={() => handleMovePress(item)}>
          <View style={styles.tableRow}>
            <Text style={styles.columnLeft}>{item.input}</Text>
            <Text style={styles.column}>{item.notes}</Text>
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
