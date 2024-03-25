import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const ComboComponent = ({ onClose, comboData, setComboData, frameData }) => {
  const [selectedComboStarters, setSelectedComboStarters] = useState([]); // Combo starters
  const [comboString, setComboString] = useState(''); // Combo string
  const [difficulty, setDifficulty] = useState('Easy'); // Combo difficulty
  const [editingIndex, setEditingIndex] = useState(null); // Track index of combo being edited
  const [modalVisible, setModalVisible] = useState(false)

  const addCombo = () => {
    const newCombo = {
      comboStarters: selectedComboStarters,
      comboRoute: comboString,
      difficulty: difficulty,
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
    setModalVisible('false')
  };

  const deleteCombo = (index) => {
    const updatedCombos = [...comboData];
    updatedCombos.splice(index, 1);
    setComboData(updatedCombos);
  };

  const handleMoveSelect = (move) => {
    setSelectedComboStarters([...selectedComboStarters, move]);
  };

  const editCombo = (index) => {
    setModalVisible(true);
    const comboToEdit = comboData[index];
    setSelectedComboStarters(comboToEdit.comboStarters);
    setComboString(comboToEdit.comboRoute);
    setDifficulty(comboToEdit.difficulty);
    setEditingIndex(index);
  };

  const handleAddComboUpPress = () => {
    setModalVisible(true); // To select the first move
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Combos</Text>
      {/* User Created Combos */}
      <FlatList
        style={styles.comboList}
        data={comboData}
        renderItem={({ item, index }) => (
          <View style={styles.comboItem}>
            <Text>{item.comboStarters.join(', ')}</Text>
            <Text>{item.comboRoute}</Text>
            <Text>{item.difficulty}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => deleteCombo(index)} style={styles.deleteButton}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => editCombo(index)} style={styles.editButton}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={<Text style={styles.emptyList}>No combos added yet</Text>}
      />
      {/* When this button is clicked, show the steps below */}
      <TouchableOpacity onPress={handleAddComboUpPress} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      {/* Combo Starter List Step */}
      <Modal
        visible={modalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <FlatList
            style={styles.moveList}
            data={frameData}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.moveItem}
                onPress={() => handleMoveSelect(item.move)}
              >
                <Text>{item.move}</Text>
                <Text>{item.description}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.move}
          />
          {/* Combo String Step */}
          <View style={styles.inputContainer}>
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
            <TouchableOpacity onPress={addCombo} style={styles.addButton}>
              <Text>{editingIndex !== null ? 'Update Combo' : 'Add Combo'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ComboComponent;
