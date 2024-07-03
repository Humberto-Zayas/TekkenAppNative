import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { MoveTableHeader } from './MoveTable';

const ComboComponent = ({ onClose, comboData, setComboData, frameData }) => {
  const [selectedComboStarters, setSelectedComboStarters] = useState([]); // Combo starters
  const [comboString, setComboString] = useState(''); // Combo string
  const [difficulty, setDifficulty] = useState('Easy'); // Combo difficulty
  const [comboType, setComboType] = useState(''); // Combo type
  const [editingIndex, setEditingIndex] = useState(null); // Track index of combo being edited
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState(1); // Stepper state

  useEffect(() => {
    if (editingIndex !== null) {
      const comboToEdit = comboData[editingIndex];
      setSelectedComboStarters(comboToEdit.comboStarters);
      setComboString(comboToEdit.comboRoute);
      setDifficulty(comboToEdit.difficulty);
      setComboType(comboToEdit.type);
      setStep(3); // Set to last step when editing
    }
  }, [editingIndex]);

  const addCombo = () => {
    const newCombo = {
      comboStarters: selectedComboStarters,
      comboRoute: comboString,
      difficulty: difficulty,
      type: comboType,
    };
    if (editingIndex !== null) {
      const updatedCombos = [...comboData];
      updatedCombos[editingIndex] = newCombo;
      setComboData(updatedCombos);
      setEditingIndex(null);
    } else {
      setComboData([...comboData, newCombo]);
    }
    setSelectedComboStarters([]); // Reset selected combo starters
    setComboString(''); // Reset combo string
    setDifficulty('Easy'); // Reset difficulty
    setComboType(''); // Reset combo type
    setModalVisible(false);
    setStep(1); // Reset to first step
  };

  const deleteCombo = (index) => {
    const updatedCombos = [...comboData];
    updatedCombos.splice(index, 1);
    setComboData(updatedCombos);
  };

  const handleMoveSelect = (move) => {
    if (selectedComboStarters.includes(move)) {
      setSelectedComboStarters(selectedComboStarters.filter((starter) => starter !== move));
    } else {
      setSelectedComboStarters([...selectedComboStarters, move]);
    }
  };

  const editCombo = (index) => {
    setModalVisible(true);
    setEditingIndex(index);
  };

  const handleAddComboUpPress = () => {
    setModalVisible(true); // To select the first move
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

  const handleComboTypeChange = (itemValue) => {
    setComboType(itemValue);
    if (itemValue === 'Wall Ender' || itemValue === 'Wall Tornado') {
      setSelectedComboStarters([itemValue === 'Wall Ender' ? 'WE' : 'WT']);
      setStep(3);
    } else {
      // Remove 'WE' or 'WT' from selectedComboStarters if they are present
      setSelectedComboStarters(selectedComboStarters.filter(starter => starter !== 'WE' && starter !== 'WT'));
      setStep(2);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.flatList}>
            <Text style={styles.header}>Select Combo Type</Text>
            <Picker
              selectedValue={comboType}
              style={styles.picker}
              onValueChange={handleComboTypeChange}
            >
              <Picker.Item label="Select Combo Type" value="" />
              <Picker.Item label="Normal" value="Normal" />
              <Picker.Item label="Counter Hit" value="Counter Hit" />
              <Picker.Item label="Heat Dash" value="Heat Dash" />
              <Picker.Item label="Wall Ender" value="Wall Ender" />
              <Picker.Item label="Wall Tornado" value="Wall Tornado" />
            </Picker>
            <TouchableOpacity
              onPress={() => (comboType === 'Wall Ender' || comboType === 'Wall Tornado' ? setStep(3) : setStep(2))}
              style={[styles.nextButton, (!comboType) && styles.disabledButton]}
              disabled={!comboType}
            >
              <Text style={{ color: 'white' }}>Next</Text>
            </TouchableOpacity>
          </View>
        );
      case 2:
        return (
          <>
            {renderMoveListHeader()}
            <FlatList
              style={styles.flatList}
              data={frameData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.moveItem,
                    selectedComboStarters.includes(item.move) && styles.selectedMoveItem
                  ]}
                  onPress={() => handleMoveSelect(item.move)}
                >
                  <View style={{ width: '100%' }}>
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
            <View style={styles.stepperNavigation}>
              <TouchableOpacity onPress={() => setStep(1)} style={styles.backButton}>
                <Text style={{ color: 'white' }}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setStep(3)}
                style={[styles.nextButton, (selectedComboStarters.length === 0) && styles.disabledButton]}
                disabled={selectedComboStarters.length === 0}
              >
                <Text style={{ color: 'white' }}>Next</Text>
              </TouchableOpacity>
            </View>
          </>
        );
      case 3:
        return (
          <>
            <View style={styles.flatList}>
              <TextInput
                style={styles.input}
                placeholder="Enter Combo String"
                value={comboString}
                onChangeText={setComboString}
              />
              <Picker
                selectedValue={difficulty}
                style={styles.picker}
                onValueChange={(itemValue) => setDifficulty(itemValue)}
              >
                <Picker.Item label="Easy" value="Easy" />
                <Picker.Item label="Intermediate" value="Intermediate" />
                <Picker.Item label="Difficult" value="Difficult" />
              </Picker>
              <View style={styles.stepperNavigation}>
                <TouchableOpacity onPress={() => setStep(1)} style={styles.backButton}>
                  <Text style={{ color: 'white' }}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={addCombo}
                  style={[styles.addButton, (!comboString) && styles.disabledButton]}
                  disabled={!comboString}
                >
                  <Text>{editingIndex !== null ? 'Update Combo' : 'Add Combo'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.rowContainer}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Combos</Text>
      <MoveTableHeader firstHeader='Starter' secondHeader='Combo Route' />
      <FlatList
        style={styles.flatList}
        data={comboData}
        renderItem={({ item, index }) => (
          <View style={styles.tableRow}>
            <View style={styles.columnLeft}>
              {item.comboStarters.map((starter, idx) => (
                <Text key={idx}>{starter}</Text>
              ))}
            </View>
            <Text style={styles.column}>{item.comboRoute}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => deleteCombo(index)} style={styles.deleteButton}>
                <FontAwesome name="trash" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => editCombo(index)} style={{ marginTop: 8 }}>
                <FontAwesome name="pencil" size={24} color="blue" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyList}>No combos added yet</Text>}
      />
      <TouchableOpacity onPress={handleAddComboUpPress} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          {renderStepContent()}
        </View>
      </Modal>
    </View>
  );
};

export default ComboComponent;
