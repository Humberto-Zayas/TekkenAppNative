import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import ComboList from './ComboList';
import StepContent from './StepContent';

const ComboComponent = ({ onClose, comboData, setComboData, frameData }) => {
  const [selectedComboStarters, setSelectedComboStarters] = useState([]);
  const [comboString, setComboString] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [comboType, setComboType] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [notes, setNotes] = useState(''); // New state for notes
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (editingIndex !== null) {
      const comboToEdit = comboData[editingIndex];
      setSelectedComboStarters(comboToEdit.comboStarters);
      setComboString(comboToEdit.comboRoute);
      setDifficulty(comboToEdit.difficulty);
      setComboType(comboToEdit.type);
      setNotes(comboToEdit.notes || ''); // Initialize notes if present
      setStep(3);
    }
  }, [editingIndex]);

  const addCombo = () => {
    const newCombo = {
      comboStarters: selectedComboStarters,
      comboRoute: comboString,
      difficulty: difficulty,
      type: comboType,
      notes: notes, // Add notes to new combo object
    };
    const updatedCombos = editingIndex !== null
      ? comboData.map((combo, index) => index === editingIndex ? newCombo : combo)
      : [...comboData, newCombo];

    setComboData(updatedCombos);
    resetForm();
  };

  const resetForm = () => {
    setSelectedComboStarters([]);
    setComboString('');
    setDifficulty('Easy');
    setComboType('');
    setEditingIndex(null);
    setNotes(''); // Reset notes
    setModalVisible(false);
    setStep(1);
  };

  const deleteCombo = (index) => {
    setComboData(comboData.filter((_, i) => i !== index));
  };

  const handleAddComboUpPress = () => setModalVisible(true);

  const handleCloseModal = () => {
    resetForm(); // Reset the form data when closing
    setModalVisible(false); // Close the modal
  };

  return (
    <View style={styles.rowContainer}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Combos</Text>
      <ComboList
        comboData={comboData}
        onDelete={deleteCombo}
        onEdit={(index) => { setEditingIndex(index); setModalVisible(true) }}
      />
      <View style={{ marginVertical: 8 }}></View>

      <TouchableOpacity onPress={handleAddComboUpPress} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
            <FontAwesome name="times" size={20} color="black" />
          </TouchableOpacity>
          <StepContent
            step={step}
            comboType={comboType}
            selectedComboStarters={selectedComboStarters}
            comboString={comboString}
            difficulty={difficulty}
            notes={notes} // Pass notes to StepContent
            setComboType={setComboType}
            setSelectedComboStarters={setSelectedComboStarters}
            setComboString={setComboString}
            setDifficulty={setDifficulty}
            setNotes={setNotes} // Pass setNotes to StepContent
            setStep={setStep}
            frameData={frameData}
            addCombo={addCombo}
            editingIndex={editingIndex}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ComboComponent;
