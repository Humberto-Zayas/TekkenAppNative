import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import FollowUpStepContent from './FollowUpStepContent';

const MoveFlowChartComponent = ({ onClose, setMoveFlowChartData, moveFlowChartData, frameData }) => {
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [notes, setNotes] = useState('');
  const [isAddingFollowUp, setIsAddingFollowUp] = useState(false);
  const [step, setStep] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const addOrUpdateFollowUp = useCallback(() => {
    const newFollowUp = {
      moves: selectedMoves,
      notes: notes,
    };

    if (isEditing) {
      const updatedFollowUps = [...moveFlowChartData];
      updatedFollowUps[editingIndex] = newFollowUp;
      setMoveFlowChartData(updatedFollowUps);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setMoveFlowChartData([...moveFlowChartData, newFollowUp]);
    }

    resetForm();
  }, [selectedMoves, notes, moveFlowChartData, setMoveFlowChartData, isEditing, editingIndex]);

  const resetForm = useCallback(() => {
    setSelectedMoves([]);
    setNotes('');
    setStep(1);
    setIsAddingFollowUp(false);
    setModalVisible(false);
  }, []);

  const deleteFollowUp = useCallback((index) => {
    const updatedFollowUps = [...moveFlowChartData];
    updatedFollowUps.splice(index, 1);
    setMoveFlowChartData(updatedFollowUps);
  }, [moveFlowChartData, setMoveFlowChartData]);

  const editFollowUp = useCallback((index) => {
    const followUp = moveFlowChartData[index];
    setSelectedMoves(followUp.moves);
    setNotes(followUp.notes);
    setIsEditing(true);
    setEditingIndex(index);
    setStep(1);
    setIsAddingFollowUp(true);
    setModalVisible(true);
  }, [moveFlowChartData]);

  const handleAddFollowUpPress = () => {
    setIsAddingFollowUp(true);
    setModalVisible(true);
  };

  return (
    <View style={styles.rowContainer}>
      {!isAddingFollowUp && (
        <>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <FontAwesome name="times" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.header}>Flowcharts</Text>
          <FlatList
            style={styles.flatList}
            data={moveFlowChartData}
            renderItem={({ item, index }) => (
              <View style={styles.tableRow}>
                {item.moves.map((moveObj, moveIdx) => (
                  <Text style={styles.column} key={moveIdx}>
                    {moveObj.move}
                  </Text>
                ))}
                <TouchableOpacity style={styles.editIcon} onPress={() => editFollowUp(index)}>
                  <FontAwesome name="edit" size={20} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteIcon} onPress={() => deleteFollowUp(index)}>
                  <FontAwesome name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(_, index) => index.toString()}
            ListEmptyComponent={<Text style={styles.emptyList}>No flow charts added yet</Text>}
          />
          <TouchableOpacity onPress={handleAddFollowUpPress} style={styles.plusButton}>
            <FontAwesome name="plus" size={20} color="white" />
          </TouchableOpacity>
        </>
      )}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <FollowUpStepContent
            contentType={'flowchart'}
            step={step}
            selectedMoves={selectedMoves}
            notes={notes}
            setSelectedMoves={setSelectedMoves}
            setNotes={setNotes}
            setStep={setStep}
            frameData={frameData}  // Pass the original frameData directly
            addFollowUp={addOrUpdateFollowUp}
          />
        </View>
      </Modal>
    </View>
  );
};

export default MoveFlowChartComponent;
