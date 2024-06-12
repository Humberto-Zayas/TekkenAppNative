import React, { useState } from 'react';
import { View, TextInput, ScrollView, Modal, TouchableOpacity, Text, Button, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EditHeroComponent from './EditHeroComponent';
import PunisherComponent from '../CreateCardComponent/PunisherComponent';
import MoveFlowChartComponent from '../CreateCardComponent/MoveFlowChartComponent';
import FollowUpsComponent from '../CreateCardComponent/FollowUpsComponent';
import ComboComponent from '../CreateCardComponent/ComboComponent';
import alisaFrameData from '../../data/alisaFrameData';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';
import { REACT_APP_API_BASE_URL } from '@env';
import { characters } from '../../data/characters';
import tags from '../../data/tags';

const EditCardComponent = ({ route, navigation }) => {
  const { user } = useAuth();
  const { cardData } = route.params;
  const characterName = cardData.characterName;
  const character = characters.find((char) => char.name === characterName);

  const [cardName, setCardName] = useState(cardData.cardName);
  const [cardDescription, setCardDescription] = useState(cardData.cardDescription);
  const [youtubeLink, setYoutubeLink] = useState(cardData.youtubeLink);
  const [twitchLink, setTwitchLink] = useState(cardData.twitchLink);
  const [punisherData, setPunisherData] = useState(cardData.punisherData);
  const [moveFlowChartData, setMoveFlowChartData] = useState(cardData.moveFlowChartData);
  const [followUpData, setFollowUpData] = useState(cardData.followUpData);
  const [comboData, setComboData] = useState(cardData.comboData);
  const [selectedTags, setSelectedTags] = useState(cardData.tags || []);

  const [showPunishers, setShowPunishers] = useState(false);
  const [showMoveFlowChart, setShowMoveFlowChart] = useState(false);
  const [showFollowUps, setShowFollowUps] = useState(false);
  const [showCombos, setShowCombos] = useState(false);

  const handleCardNameChange = (name) => {
    setCardName(name);
  };

  const handleCardDescriptionChange = (description) => {
    setCardDescription(description);
  };

  const handleYouTubeLinkChange = (youtubeLink) => {
    setYoutubeLink(youtubeLink);
  };

  const handleTwitchLinkChange = (twitchLink) => {
    setTwitchLink(twitchLink);
  };

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
          twitchLink,
          punisherData,
          moveFlowChartData,
          followUpData,
          comboData,
          userId: user?.userId,
          username: user?.username,
          tags: selectedTags,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update the card.');
      }

      Alert.alert(
        'Success',
        'Card updated successfully!',
        [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error updating the card:', error);
      alert('Failed to update the card. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <EditHeroComponent name={cardName} thumbnail={character ? character.image : null} onCardNameChange={handleCardNameChange} />
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
        <TouchableOpacity onPress={() => setShowFollowUps(true)} style={styles.link}>
          <Text style={styles.linkText}>Set Follow Up/Mini Combos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowCombos(true)} style={styles.link}>
          <Text style={styles.linkText}>Combos</Text>
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

      <Modal
        visible={showFollowUps}
        animationType="slide"
        onRequestClose={() => setShowFollowUps(false)}
      >
        <FollowUpsComponent
          onClose={() => setShowFollowUps(false)}
          setFollowUpData={setFollowUpData}
          followUpData={followUpData}
          frameData={alisaFrameData}
        />
      </Modal>

      <Modal
        visible={showCombos}
        animationType="slide"
        onRequestClose={() => setShowCombos(false)}
      >
        <ComboComponent
          onClose={() => setShowCombos(false)}
          setComboData={setComboData}
          comboData={comboData}
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

      <TextInput
        style={styles.input}
        placeholder="Twitch Link"
        value={twitchLink}
        onChangeText={handleTwitchLinkChange}
        numberOfLines={1}
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
    </ScrollView>
  );
};

export default EditCardComponent;
