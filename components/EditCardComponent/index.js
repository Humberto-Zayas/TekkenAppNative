import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EditHeroComponent from './EditHeroComponent';
import PunisherComponent from '../CreateCardComponent/PunisherComponent';
import MoveFlowChartComponent from '../CreateCardComponent/MoveFlowChartComponent';
import alisaFrameData from '../../data/alisaFrameData';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';
import { REACT_APP_API_BASE_URL } from '@env';
import { characters } from '../../data/characters'
import tags from '../../data/tags';

const EditCardComponent = ({ route, navigation }) => {
  const { user } = useAuth();
  const { cardData } = route.params;
  const characterName = cardData.characterName;
  const character = characters.find((char) => char.name === characterName);
  const [punisherData, setPunisherData] = useState(cardData.punisherData);
  const [moveFlowChartData, setMoveFlowChartData] = useState(cardData.moveFlowChartData);
  const [showPunishers, setShowPunishers] = useState(false);
  const [showMoveFlowChart, setShowMoveFlowChart] = useState(false);
  const [cardName, setCardName] = useState(cardData.cardName);
  const [cardDescription, setCardDescription] = useState(cardData.cardDescription);
  const [youtubeLink, setYoutubeLink] = useState(cardData.youtubeLink);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagPress = (tag) => {
    const tagIndex = selectedTags.findIndex(t => t.name === tag.name);
    if (tagIndex !== -1) {
      setSelectedTags(selectedTags.filter(t => t.name !== tag.name));
    } else {
      setSelectedTags([...selectedTags, { name: tag.name }]);
    }
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
          tags: selectedTags
        }),
      });

      if (response.ok) {
        console.log('Card updated successfully');
        navigation.goBack(); // Navigate back upon successful update
      } else {
        console.error('Failed to update card:', response.status);
        alert('Failed to update the card. Please try again.');
      }

      setShowPunishers(false);
      setShowMoveFlowChart(false);
    } catch (error) {
      console.error('Error updating card:', error);
      alert('Failed to update the card. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <EditHeroComponent cardName={cardName} thumbnail={character ? character.image : null} onCardNameChange={setCardName} />
      <View style={{ paddingBottom: 52 }}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setShowPunishers(true)} style={styles.link}>
            <Text style={styles.linkText}>Punishers</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowMoveFlowChart(true)} style={styles.link}>
            <Text style={styles.linkText}>Move Flow Chart</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={showPunishers}
          animationType="slide"
          onRequestClose={() => setShowPunishers(false)}
        >
          <PunisherComponent
            onClose={() => setShowPunishers(false)}
            setPunisherData={setPunisherData}
            punisherData={punisherData}
            frameData={alisaFrameData}
          />
        </Modal>

        <Modal
          visible={showMoveFlowChart}
          animationType="slide"
          onRequestClose={() => setShowMoveFlowChart(false)}
        >
          <MoveFlowChartComponent
            onClose={() => setShowMoveFlowChart(false)}
            setMoveFlowChartData={setMoveFlowChartData}
            moveFlowChartData={moveFlowChartData}
            frameData={alisaFrameData}
          />
        </Modal>
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
         <View style={styles.tagsContainer}>
        {tags.map(tag => (
          <TouchableOpacity
            key={tag.name}
            style={[styles.tag, selectedTags.findIndex(t => t.name === tag.name) !== -1 && styles.selectedTag]}
            onPress={() => handleTagPress(tag)}
          >
            <Text style={styles.tagText}>{tag.name}</Text>
            {selectedTags.findIndex(t => t.name === tag.name) !== -1 ? (
              <FontAwesome name="check" size={16} color="green" />
            ) : (
              <FontAwesome name="times" size={16} color="red" />
            )}
          </TouchableOpacity>
        ))}
      </View>
        <Button title="Save Card" onPress={handleSave} />
      </View>

    </ScrollView>
  );
};

export default EditCardComponent;
