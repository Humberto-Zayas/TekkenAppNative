import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Platform, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';

const StepContent = ({
  step,
  comboType,
  selectedComboStarters,
  comboString,
  difficulty,
  notes,
  setComboType,
  setSelectedComboStarters,
  setComboString,
  setDifficulty,
  setNotes,
  setStep,
  frameData,
  addCombo,
  editingIndex,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const pickerStyles = Platform.select({
    ios: styles.pickerIOS, // Styles specific to iOS
    android: styles.pickerAndroid, // Styles specific to Android
    default: styles.pickerWeb, // Styles for web and other platforms
  });

  const handleMoveSelect = (move) => {
    setSelectedComboStarters(selectedComboStarters.includes(move)
      ? selectedComboStarters.filter((starter) => starter !== move)
      : [...selectedComboStarters, move]
    );
    setSearchQuery(''); // Reset search query when a move is selected
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

  // Filter the frameData based on the search query
  const filteredFrameData = frameData.filter(item => {
    return typeof item.move === 'string' && item.move.toLowerCase().includes(searchQuery.toLowerCase());
  });

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

  switch (step) {
    case 1:
      return (
        <View style={styles.flatList}>
          <Text style={{ fontSize: 16, marginBottom: 17, marginTop: 17 }}>Select Combo Type</Text>
          <Picker style={pickerStyles} selectedValue={comboType} onValueChange={handleComboTypeChange}>
            <Picker.Item label="Select Combo Type" value="" />
            <Picker.Item label="Normal" value="Normal" />
            <Picker.Item label="Counter Hit" value="Counter Hit" />
            <Picker.Item label="Heat Dash" value="Heat Dash" />
            <Picker.Item label="Wall Ender" value="Wall Ender" />
            <Picker.Item label="Wall Tornado" value="Wall Tornado" />
          </Picker>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 16, marginTop: 16 }}>
            <TouchableOpacity
              onPress={() => (comboType === 'Wall Ender' || comboType === 'Wall Tornado' ? setStep(3) : setStep(2))}
              style={[styles.addButton, (!comboType) && styles.disabledButton]}
              disabled={!comboType}
            >
              <Text style={{ color: 'white' }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    case 2:
      return (
        <>

          <Text style={{ fontSize: 16, marginBottom: 17, marginTop: 17 }}>Choose The Combo Starters</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
            <FontAwesome name="search" size={20} color="black" />
            <TextInput
              style={styles.searchInput} // Add some styling for this input
              placeholder="Search moves..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          {renderMoveListHeader()}

          <FlatList
            style={styles.flatList}
            data={filteredFrameData}
            renderItem={({ item }) => {
              const isSelected = selectedComboStarters.includes(item.move);
              return (
                <TouchableOpacity
                  style={[
                    styles.moveItem,
                    isSelected ? styles.selectedMove : null
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
              );
            }}
            keyExtractor={(item) => item.move}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 16 }}>
            <TouchableOpacity onPress={() => setStep(1)} style={styles.backButton}>
              <Text style={{ color: 'white' }}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setStep(3)}
              style={[styles.addButton, (selectedComboStarters.length === 0) && styles.disabledButton]}
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
          <View>
            <Text style={{ fontSize: 16, marginBottom: 17, marginTop: 17 }}>Add The Combo Difficulty</Text>
            <Picker
              selectedValue={difficulty}
              style={pickerStyles}
              onValueChange={(itemValue) => setDifficulty(itemValue)}
            >
              <Picker.Item label="Easy" value="Easy" />
              <Picker.Item label="Intermediate" value="Intermediate" />
              <Picker.Item label="Difficult" value="Difficult" />
            </Picker>
          </View>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 17, marginTop: 17 }}>Add The Combo String</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
              <FontAwesome name="pencil" size={20} color="black" />
              <TextInput
                style={styles.searchInput}
                placeholder="Enter Combo String"
                value={comboString}
                onChangeText={setComboString}
              />
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 17, marginTop: 17 }}>Add Notes</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
              <FontAwesome name="pencil" size={20} color="black" />
              <TextInput
                style={styles.searchInput}
                placeholder="Enter Notes"
                value={notes}
                onChangeText={setNotes}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 16 }}>
            <TouchableOpacity onPress={() => setStep(2)} style={styles.backButton}>
              <Text style={{ color: 'white' }}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={addCombo}
              style={[styles.addButton, (!comboString || !notes) && styles.disabledButton]}
              disabled={!comboString || !notes}
            >
              <Text style={{ color: 'white' }}>{editingIndex !== null ? 'Update Combo' : 'Add Combo'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    default:
      return null;
  }
};

export default StepContent;
