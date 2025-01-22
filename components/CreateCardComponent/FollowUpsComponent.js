import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { themeStyles } from '../../styles/styles';
import FollowUpStepContent from './FollowUpStepContent';

const FollowUpsComponent = ({ onClose, setFollowUpData, followUpData, frameData }) => {
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
      const updatedFollowUps = [...followUpData];
      updatedFollowUps[editingIndex] = newFollowUp;
      setFollowUpData(updatedFollowUps);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setFollowUpData([...followUpData, newFollowUp]);
    }

    resetForm();
  }, [selectedMoves, notes, followUpData, setFollowUpData, isEditing, editingIndex]);

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

  const editFollowUp = useCallback((index) => {
    const followUp = followUpData[index];
    setSelectedMoves(followUp.moves);
    setNotes(followUp.notes);
    setIsEditing(true);
    setEditingIndex(index);
    setStep(1);
    setIsAddingFollowUp(true);
    setModalVisible(true);
  }, [followUpData]);

  const handleAddFollowUpPress = () => {
    setIsAddingFollowUp(true);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    resetForm(); // Reset the form data when closing
    setModalVisible(false); // Close the modal
  };

  const getColorForIndex = (index) => {
    const colors = ['#3498db', '#9b59b6', '#e67e22', '#e74c3c'];
    return colors[index % colors.length];
  };

  return (
    <View style={[themeStyles.container, { marginTop: 48, position: 'relative', flex: 1 }]}>
      {!isAddingFollowUp && (
        <>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <FontAwesome name="times" size={20} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, marginBottom: 17, marginTop: 17 }}>Follow Ups</Text>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            {followUpData.map((followUp, moveIndex) => (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flowChartContainer}
                key={moveIndex}
              >
                {followUp.moves.map((moveObj, moveObjIndex) => (
                  <View
                    key={`move-${moveIndex}-${moveObjIndex}`}
                    style={[
                      styles.flowChartItemWrapper,
                      { zIndex: selectedMoves.length - moveIndex },
                    ]}
                  >
                    <View

                      style={[
                        styles.flowChartItem,
                        { backgroundColor: getColorForIndex(moveObjIndex) },
                      ]}
                    >
                      <Text style={styles.flowChartItemText}>
                        {moveObj.move} {/* Adjust this to match your move object structure */}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.rotatedSquare,
                        { backgroundColor: getColorForIndex(moveIndex) },
                      ]}
                    />
                  </View>

                ))}
                <View style={{ flexDirection: 'row', marginLeft: 24 }}>
                  <TouchableOpacity style={styles.editIcon} onPress={() => editFollowUp(moveIndex)}>
                    <FontAwesome name="edit" size={24} color="blue" />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ ...styles.deleteIcon, marginLeft: 8 }} onPress={() => deleteFollowUp(moveIndex)}>
                    <FontAwesome name="trash" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            ))}
          </ScrollView>

          <TouchableOpacity onPress={handleAddFollowUpPress} style={styles.plusButton}>
            <FontAwesome name="plus" size={20} color="white" />
          </TouchableOpacity>
        </>
      )}
      <Modal visible={modalVisible} animationType="slide">
        <View style={[themeStyles.container, { marginTop: 48, position: 'relative' }]}>
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
            <FontAwesome name="times" size={20} color="black" />
          </TouchableOpacity>
          <FollowUpStepContent
            contentType={'followups'}
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

export default FollowUpsComponent;
