import React, { useState } from 'react';
import { View, TextInput, ScrollView, Modal, TouchableOpacity, Text, Button, Alert } from 'react-native';
import HeroCreateComponent from './HeroCreateComponent';
import PunisherComponent from './PunisherComponent';
import MoveFlowChartComponent from './MoveFlowChartComponent';
import alisaFrameData from '../../data/alisaFrameData';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';

const CreateCardComponent = ({ route, navigation }) => {
  const { characterName, characterImage } = route.params;
  const [showPunishers, setShowPunishers] = useState(false);
  const [showMoveFlowChart, setShowMoveFlowChart] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [punisherData, setPunisherData] = useState([]);

  const [moveFlowChartData, setMoveFlowChartData] = useState([]);
  const { user } = useAuth();

  const handleCardNameChange = (name) => {
    setCardName(name);
  };

  const handleCardDescriptionChange = (description) => {
    setCardDescription(description);
  };

  const handleYouTubeLinkChange = (youtubeLink) => {
    setYoutubeLink(youtubeLink);
  }

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
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({
          cardName,
          characterName,
          cardDescription,
          youtubeLink,
          punisherData,
          moveFlowChartData,
          userId: user?.userId,
          username: user?.username
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
      setShowPunishers(false);
      setShowMoveFlowChart(false);

      // Show a success message
      Alert.alert(
        'Success',
        'Card created successfully!',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error saving the card:', error);
      alert('Failed to save the card. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeroCreateComponent name={cardName} thumbnail={characterImage} onCardNameChange={handleCardNameChange} />
      <TextInput
        style={styles.input}
        placeholder="Enter Card Description"
        value={cardDescription}
        onChangeText={handleCardDescriptionChange}
        multiline={true}
        numberOfLines={4}
      />
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
        style={styles.input}
        placeholder="YouTube Link"
        value={youtubeLink}
        onChangeText={handleYouTubeLinkChange}
        numberOfLines={1}
      />

      <Button title="Save Card" onPress={handleSave} />
    </ScrollView>
  );
};

export default CreateCardComponent;
