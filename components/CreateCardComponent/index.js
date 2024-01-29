import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import HeroCreatComponent from './HeroCreateComponent';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';
import { REACT_APP_API_BASE_URL } from '@env';

const CreateCardComponent = ({ route, navigation }) => {
  const { user } = useAuth();
  const { characterName, characterImage } = route.params;
  const [punisherData, setPunisherData] = useState([]);
  const [moveFlowChartData, setMoveFlowChartData] = useState([]);
  const [cardName, setCardName] = useState(null);
  const [cardDescription, setCardDescription] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState(null);
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

  const handleCardNameChange = (cardName) => {
    // handleChange('cardName', cardName);
    setCardName(cardName)
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

    setFormData((prevData) => ({
      ...prevData,
      move: '',
      description: '',
      hitLevel: '',
      damage: '',
      startUpFrame: '',
      blockFrame: '',
      hitFrame: '',
      counterHitFrame: '',
      notes: '',
    }));
    setModalVisible(false);
  };

  const handleEditMove = (index, moveSet) => {
    setFormData({ ...getMoveSet(moveSet)[index] });
    setSelectedMoveIndex(index);
    setSelectedMoveSet(moveSet);
    setModalVisible(true);
  };

  const handleDeleteMove = (index, moveSet) => {
    const updatedMoves = getMoveSet(moveSet).filter((_, i) => i !== index);
    setMoveSet(moveSet, updatedMoves);
  };

  const handleSave = async () => {
    if (!cardName || !cardDescription) {
      alert('Please enter a Card Name and Card Description.');
      return;
    }

    if (punisherData.length < 3 || moveFlowChartData.length < 3) {
      alert('Please add at least 3 moves in both Punishers and Move/Flowchart data sets.');
      return;
    }

    try {
      // Send a POST request to your server
      const response = await fetch(`${REACT_APP_API_BASE_URL}/cards/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`, // Include the JWT token in the headers
        },
        body: JSON.stringify({
          cardName,
          characterName,
          cardDescription,
          youtubeLink,
          userId: user?.userId,
          username: user?.username,
          punisherData,
          moveFlowChartData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save the card.');
      }

      setCardName('');
      setCardDescription('');
      setYoutubeLink('');
      setPunisherData([]);
      setMoveFlowChartData([]);
      setModalVisible(false);

      // Show an alert with a confirmation message
      Alert.alert(
        'Success',
        'Card created successfully!',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(), // Navigate back on confirmation
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error saving the card:', error);
      alert('Failed to save the card. Please try again.');
    }
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
      default:
        return [];
    }
  };

  const renderMoveSet = (moves, moveSetType) => {
    return moves.map((item, index) => (
      <TouchableOpacity key={`${index}_${moveSetType}`} onPress={() => handleEditMove(index, moveSetType)}>
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
          <TouchableOpacity onPress={() => handleDeleteMove(index, moveSetType)}>
            <FontAwesome style={{ marginRight: 10 }} name="trash" size={25} color="red" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <HeroCreatComponent name={characterName} thumbnail={characterImage} onCardNameChange={handleCardNameChange} />
      <View style={{ paddingBottom: 52 }}>
        {/* Render Punishers */}
        <View style={styles.flatList}>
          <Text style={styles.tableTitle}>Punishers</Text>
          {renderMoveSet(punisherData, 'punisherData')}
        </View>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => {
            setSelectedMoveIndex(null);
            setSelectedMoveSet('punisherData');
            setModalVisible(true);
          }}
        >
          <FontAwesome name="plus" size={15} color="white" />
        </TouchableOpacity>
        {/* Render Move/Flowchart */}
        <View style={styles.flatList}>
          <Text style={styles.tableTitle}>Move/Flowchart</Text>
          {renderMoveSet(moveFlowChartData, 'moveFlowChartData')}
        </View>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => {
            setSelectedMoveIndex(null);
            setSelectedMoveSet('moveFlowChartData');
            setModalVisible(true);
          }}
        >
          <FontAwesome name="plus" size={15} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.textArea}
          placeholder="Explain Your Strategy"
          multiline
          numberOfLines={4}
          value={cardDescription}
          onChangeText={(text) => setCardDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder='YouTube Link'
          value={youtubeLink}
          onChangeText={(text) => handleChange('youtubeLink', text)}
        />
        <Button title="Save Card" onPress={handleSave} />
      </View>
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
    </ScrollView>
  );
};


export default CreateCardComponent;
