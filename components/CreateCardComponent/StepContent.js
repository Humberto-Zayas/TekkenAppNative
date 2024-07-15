import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

const StepContent = ({
  step,
  comboType,
  selectedComboStarters,
  comboString,
  difficulty,
  notes, // Receive notes
  setComboType,
  setSelectedComboStarters,
  setComboString,
  setDifficulty,
  setNotes, // Receive setNotes
  setStep,
  frameData,
  addCombo,
  editingIndex, // Receive editingIndex
}) => {
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

  const handleMoveSelect = (move) => {
    setSelectedComboStarters(selectedComboStarters.includes(move) 
      ? selectedComboStarters.filter((starter) => starter !== move)
      : [...selectedComboStarters, move]
    );
  };

  const handleComboTypeChange = (itemValue) => {
    setComboType(itemValue);
    if (itemValue === 'Wall Ender' || itemValue === 'Wall Tornado') {
      setSelectedComboStarters([itemValue === 'Wall Ender' ? 'WE' : 'WT']);
      setStep(3);
    } else {
      setSelectedComboStarters(selectedComboStarters.filter(starter => starter !== 'WE' && starter !== 'WT'));
      setStep(2);
    }
  };

  switch (step) {
    case 1:
      return (
        <View style={styles.flatList}>
          <Text style={styles.header}>Select Combo Type</Text>
          <Picker selectedValue={comboType} style={styles.picker} onValueChange={handleComboTypeChange}>
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
            <TouchableOpacity onPress={() => setStep(2)} style={styles.backButton}>
              <Text style={{ color: 'white' }}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setStep(4)}
              style={[styles.nextButton, (!comboString) && styles.disabledButton]}
              disabled={!comboString}
            >
              <Text style={{ color: 'white' }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    case 4:
      return (
        <View style={styles.flatList}>
          <TextInput
            style={styles.input}
            placeholder="Enter Notes"
            value={notes}
            onChangeText={setNotes}
          />
          <View style={styles.stepperNavigation}>
            <TouchableOpacity onPress={() => setStep(3)} style={styles.backButton}>
              <Text style={{ color: 'white' }}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={addCombo}
              style={[styles.addButton, (!notes) && styles.disabledButton]}
              disabled={!notes}
            >
              <Text>{editingIndex !== null ? 'Update Combo' : 'Add Combo'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    default:
      return null;
  }
};

export default StepContent;
