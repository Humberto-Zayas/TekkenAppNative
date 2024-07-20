import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import FollowUpStepContent from './FollowUpStepContent';

const FollowUpsComponent = ({ onClose, setFollowUpData, followUpData, frameData }) => {
  const [selectedMoves, setSelectedMoves] = useState([]);
  const [notes, setNotes] = useState('');
  const [isAddingFollowUp, setIsAddingFollowUp] = useState(false);
  const [step, setStep] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);

  const addFollowUp = useCallback(() => {
    const newFollowUp = {
      moves: selectedMoves,
      notes: notes,
    };
    setFollowUpData([...followUpData, newFollowUp]);
    resetForm();
  }, [selectedMoves, notes, followUpData, setFollowUpData]);

  const resetForm = useCallback(() => {
    setSelectedMoves([]);
    setNotes('');
    setStep(1);
    setIsAddingFollowUp(false);
    setModalVisible(false);
  }, []);

  const deleteFollowUp = useCallback((index) => {
    const updatedFollowUps = [...followUpData];
    updatedFollowUps.splice(index, 1);
    setFollowUpData(updatedFollowUps);
  }, [followUpData, setFollowUpData]);

  const filteredFrameData = useMemo(() => {
    return frameData.filter((frameMove) =>
      !followUpData.some((followUp) =>
        followUp.moves.some((move) => move.move === frameMove.move)
      )
    );
  }, [frameData, followUpData]);

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
          <Text style={styles.header}>Follow Ups</Text>
          <FlatList
            style={styles.flatList}
            data={followUpData}
            renderItem={({ item, index }) => (
              <View style={styles.tableRow}>
                {item.moves.map((moveObj, moveIdx) => (
                  <Text style={styles.column} key={moveIdx}>
                    {moveObj.move}
                  </Text>
                ))}
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
        </>
      )}
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <FollowUpStepContent
            step={step}
            selectedMoves={selectedMoves}
            notes={notes}
            setSelectedMoves={setSelectedMoves}
            setNotes={setNotes}
            setStep={setStep}
            frameData={filteredFrameData}
            addFollowUp={addFollowUp}
          />
        </View>
      </Modal>
    </View>
  );
};

export default FollowUpsComponent;
