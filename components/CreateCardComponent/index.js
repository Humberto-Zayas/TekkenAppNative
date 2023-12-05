import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { FlatList as GestureFlatList, } from 'react-native-gesture-handler';
import HeroComponent from '../CardComponent/HeroComponent';
import { FontAwesome } from '@expo/vector-icons';

const CreateCardComponent = ({ route, navigation }) => {
  const { characterName, characterImage } = route.params;
  const [punisherData, setPunisherData] = useState([]);
  const [moveFlowChartData, setMoveFlowChartData] = useState([]);
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [youtubeLink, setYouTubeLink] = useState('');
  const [formData, setFormData] = useState({
    move: '',
    description: '',
    hitLevel: '',
    damage: '',
    startUpFrame: '',
    blockFrame: '',
    hitFrame: '',
    counterHitFrame: '',
    notes: '',
  });

  const [selectedMoveIndex, setSelectedMoveIndex] = useState(null); // Track the index of the move being edited
  const [selectedMoveSet, setSelectedMoveSet] = useState(null); // Track the move set being edited
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleAddMove = () => {
    if (selectedMoveIndex !== null && selectedMoveSet) {
      // If editing, update the existing move in the selected move set
      const updatedMoves = [...getMoveSet(selectedMoveSet)];
      updatedMoves[selectedMoveIndex] = { ...formData };
      setMoveSet(selectedMoveSet, updatedMoves);
      setSelectedMoveIndex(null);
      setSelectedMoveSet(null);
    } else {
      // If not editing, add a new move to the selected move set
      setMoveSet(selectedMoveSet, (prevMoves) => [...prevMoves, { ...formData }]);
    }

    setFormData({
      move: '',
      description: '',
      hitLevel: '',
      damage: '',
      startUpFrame: '',
      blockFrame: '',
      hitFrame: '',
      counterHitFrame: '',
      notes: '',
    });

    setModalVisible(false);
  };

  const handleEditMove = (index, moveSet) => {
    // Set form data to the selected move for editing
    setFormData({ ...getMoveSet(moveSet)[index] });
    setSelectedMoveIndex(index);
    setSelectedMoveSet(moveSet);
    setModalVisible(true);
  };

  const handleDeleteMove = (index, moveSet) => {
    // Delete the selected move from the specified move set
    const updatedMoves = getMoveSet(moveSet).filter((_, i) => i !== index);
    setMoveSet(moveSet, updatedMoves);
  };

  const handleSave = () => {
    // Perform save action, you can save to a local store or API
    // For now, let's just log the data
    console.log('Saving Card:', { punisherData, moveFlowChartData });

    // Optionally, you can navigate back to the previous screen after saving
    navigation.goBack();

    // Optionally, you can reset the form after saving
    setPunisherData([]);
    setMoveFlowChartData([]);
    setFormData({
      move: '',
      description: '',
      hitLevel: '',
      damage: '',
      startUpFrame: '',
      blockFrame: '',
      hitFrame: '',
      counterHitFrame: '',
      notes: '',
    });

    // Close the modal
    setModalVisible(false);
  };

  const handleReset = () => {
    setSelectedMoveIndex(null);
    setSelectedMoveSet(null);
    setModalVisible(false);
    setFormData({
      move: '',
      description: '',
      hitLevel: '',
      damage: '',
      startUpFrame: '',
      blockFrame: '',
      hitFrame: '',
      counterHitFrame: '',
      notes: '',
    });
  };

  const setMoveSet = (moveSetType, moves) => {
    switch (moveSetType) {
      case 'punisherData':
        setPunisherData(moves);
        break;
      case 'moveFlowChartData':
        setMoveFlowChartData(moves);
        break;
      // Add more cases if needed
      default:
        break;
    }
  };

  const getMoveSet = (moveSetType) => {
    switch (moveSetType) {
      case 'punisherData':
        return punisherData;
      case 'moveFlowChartData':
        return moveFlowChartData;
      // Add more cases if needed
      default:
        return [];
    }
  };

  const renderTableItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleEditMove(item.index, item.moveSet)}>
      <View style={styles.tableRow}>
        <View style={styles.columnLeft}>
          <Text style={styles.value} numberOfLines={2}>
            {item.move}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.value} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleDeleteMove(item.index, item.moveSet)}>
          <FontAwesome name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeroComponent name={characterName} thumbnail={characterImage} />
      <Text style={styles.title}>Create a {characterName} Card</Text>

      <TextInput style={styles.input} placeholder='Enter A Card Name' value={cardName} onChangeText={(text) => setCardName(text)} />
      <GestureFlatList
        data={punisherData.map((item, index) => ({ ...item, index, moveSet: 'punisherData' }))}
        keyExtractor={(item) => `${item.index}_${item.moveSet}`}
        ListHeaderComponent={<Text style={styles.tableTitle}>Punishers</Text>}
        renderItem={renderTableItem}
        style={styles.flatList}
      />
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => {
          setSelectedMoveIndex(null);
          setSelectedMoveSet('punisherData');
          setModalVisible(true);
        }}
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>

      <GestureFlatList
        data={moveFlowChartData.map((item, index) => ({ ...item, index, moveSet: 'moveFlowChartData' }))}
        keyExtractor={(item) => `${item.index}_${item.moveSet}`}
        ListHeaderComponent={<Text style={styles.tableTitle}>Move/Flowchart</Text>}
        renderItem={renderTableItem}
        style={styles.flatList}
      />

      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => {
          setSelectedMoveIndex(null);
          setSelectedMoveSet('moveFlowChartData');
          setModalVisible(true);
        }}
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
      <TextInput
        style={styles.textArea}
        placeholder="Explain Your Strategy"
        multiline
        numberOfLines={4}
        value={cardDescription}
        onChangeText={(text) => setCardDescription(text)}
      />
      <TextInput style={styles.input} placeholder='YouTube Link' value={youtubeLink} onChangeText={(text) => setYouTubeLink(text)} />
      <Button title="Save Card" onPress={handleSave} />
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            {/* Your text inputs go here */}
            <TextInput
              style={styles.input}
              placeholder="Move"
              value={formData.move}
              onChangeText={(text) => handleChange('move', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={formData.description}
              onChangeText={(text) => handleChange('description', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Hit Level"
              value={formData.hitLevel}
              onChangeText={(text) => handleChange('hitLevel', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Damage"
              value={formData.damage}
              onChangeText={(text) => handleChange('damage', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Start-up Frame"
              value={formData.startUpFrame}
              onChangeText={(text) => handleChange('startUpFrame', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Block Frame"
              value={formData.blockFrame}
              onChangeText={(text) => handleChange('blockFrame', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Hit Frame"
              value={formData.hitFrame}
              onChangeText={(text) => handleChange('hitFrame', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Counter Hit Frame"
              value={formData.counterHitFrame}
              onChangeText={(text) => handleChange('counterHitFrame', text)}
            />
            <TextInput
              style={styles.textArea}
              placeholder="Notes"
              multiline
              numberOfLines={4}
              value={formData.notes}
              onChangeText={(text) => handleChange('notes', text)}
            />

            <Button title={selectedMoveIndex !== null ? 'Edit Move' : 'Add Move'} onPress={handleAddMove} />

            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleReset}
            >
              <Text style={{ color: 'white' }}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  moveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  textArea: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    // paddingTop: 150,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  plusButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 20,
  },
  flatList: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    overflow: 'hidden',
    marginBottom: 16,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  columnLeft: {
    width: '30%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    width: '60%',
    padding: 8,
    alignItems: 'start',
  },
});

export default CreateCardComponent;
