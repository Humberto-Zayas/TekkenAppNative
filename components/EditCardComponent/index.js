import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import EditHeroComponent from './EditHeroComponent';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles'; // Import your styles
import { useAuth } from '../../utils/AuthContext'; // Import your AuthContext hook
import { REACT_APP_API_BASE_URL } from '@env';
import { characters } from '../../data/characters'

const EditCardComponent = ({ route, navigation }) => {
  const { user } = useAuth();
  const { cardData } = route.params;
  const characterName = cardData.characterName;
  const character = characters.find((char) => char.name === characterName);

  console.log(cardData.cardName)
  const [punisherData, setPunisherData] = useState(cardData.punisherData);
  const [moveFlowChartData, setMoveFlowChartData] = useState(cardData.moveFlowChartData);
  const [cardName, setCardName] = useState(cardData.cardName);
  const [cardDescription, setCardDescription] = useState(cardData.cardDescription);
  const [youtubeLink, setYoutubeLink] = useState(cardData.youtubeLink);
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
  const [selectedMoveIndex, setSelectedMoveIndex] = useState(null);
  const [selectedMoveSet, setSelectedMoveSet] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    if (!cardName || !cardDescription) {
      alert('Please enter a Card Name and Card Description.');
      return;
    }

    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/cards/edit/${cardData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({
          cardName,
          characterName: cardData.characterName,
          cardDescription,
          youtubeLink,
          punisherData,
          moveFlowChartData,
          userId: user?.userId,
          username: user?.username,
        }),
      });

      if (response.ok) {
        console.log('Card updated successfully');
        navigation.goBack(); // Navigate back upon successful update
      } else {
        console.error('Failed to update card:', response.status);
        alert('Failed to update the card. Please try again.');
      }
    } catch (error) {
      console.error('Error updating card:', error);
      alert('Failed to update the card. Please try again.');
    }
  };

  const handleAddMove = () => {
    if (selectedMoveIndex !== null && selectedMoveSet) {
      const updatedMoves = [...getMoveSet(selectedMoveSet)];
      updatedMoves[selectedMoveIndex] = { ...formData };
      setMoveSet(selectedMoveSet, updatedMoves);
      setSelectedMoveIndex(null);
      setSelectedMoveSet(null);
    } else {
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
    setFormData({ ...getMoveSet(moveSet)[index] });
    setSelectedMoveIndex(index);
    setSelectedMoveSet(moveSet);
    setModalVisible(true);
  };

  const handleDeleteMove = (index, moveSet) => {
    const updatedMoves = getMoveSet(moveSet).filter((_, i) => i !== index);
    setMoveSet(moveSet, updatedMoves);
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
      <EditHeroComponent cardName={cardName} thumbnail={character ? character.image : null} onCardNameChange={setCardName} />
      <View style={{ paddingBottom: 52 }}>
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
          placeholder="YouTube Link"
          value={youtubeLink}
          onChangeText={(text) => setYoutubeLink(text)}
        />
        <Button title="Save Card" onPress={handleSave} />
      </View>
      <Modal visible={isModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
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
            <TouchableOpacity style={styles.closeButton} onPress={handleReset}>
              <Text style={{ color: 'white' }}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default EditCardComponent;
