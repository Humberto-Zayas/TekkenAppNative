import React, { useState } from 'react';
import { View, TextInput, ScrollView, Modal, TouchableOpacity, Text, Button, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HeroCreateComponent from './HeroCreateComponent';
import PunisherComponent from './PunisherComponent';
import MoveFlowChartComponent from './MoveFlowChartComponent';
import FollowUpsComponent from './FollowUpsComponent';
import ComboComponent from './ComboComponent';
import ImportantMovesComponent from './ImportantMovesComponent';
import alisaFrameData from '../../data/alisaFrameData';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';
import tags from '../../data/tags';
import { createCard } from '../../utils/api';  // Import the createCard function

const CreateCardComponent = ({ route, navigation }) => {
  const { characterName, characterImage } = route.params;
  const [showPunishers, setShowPunishers] = useState(false);
  const [showMoveFlowChart, setShowMoveFlowChart] = useState(false);
  const [showFollowUps, setShowFollowUps] = useState(false);
  const [showCombos, setShowCombos] = useState(false);
  const [showImportantMoves, setShowImportantMoves] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [twitchLink, setTwitchLink] = useState('');
  const [punisherData, setPunisherData] = useState([]);
  const [moveFlowChartData, setMoveFlowChartData] = useState([]);
  const [followUpData, setFollowUpData] = useState([]);
  const [comboData, setComboData] = useState([]);
  const [importantMoveData, setImportantMoveData] = useState([]);
  console.log(importantMoveData)
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

  const handleTwitchLinkChange = (twitchLink) => {
    setTwitchLink(twitchLink);
  }

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

    // if (punisherData.length < 3 || moveFlowChartData.length < 3 || comboData.length < 3) {
    //   alert('Please add at least 3 moves in both Punishers and Move/Flowchart data sets.');
    //   return;
    // }

    try {
      const cardData = {
        cardName,
        characterName,
        cardDescription,
        youtubeLink,
        twitchLink,
        punisherData,
        moveFlowChartData,
        followUpData,
        comboData,
        moveData: importantMoveData,
        userId: user?.userId,
        username: user?.username,
        tags: selectedTags
      };

      await createCard(cardData, user?.token);

      setCardName('');
      setCardDescription('');
      setYoutubeLink('');
      setTwitchLink('');
      setPunisherData([]);
      setMoveFlowChartData([]);
      setComboData([]);
      setImportantMoveData([]);

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
      <HeroCreateComponent name={cardName} thumbnail={characterImage} onCardNameChange={handleCardNameChange} cardDescription={cardDescription} onCardDescriptionChange={handleCardDescriptionChange} youtubeLink={youtubeLink} onYouTubeLinkChange={handleYouTubeLinkChange} twitchLink={twitchLink} onTwitchLinkChange={handleTwitchLinkChange} />
      <View style={{ marginTop: 16 }}>
        <TouchableOpacity onPress={() => setShowPunishers(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Punishers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowMoveFlowChart(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Move Flow Chart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowImportantMoves(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Important Moves</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowFollowUps(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Set Follow Up/Mini Combos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowCombos(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
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
        onRequestClose={() => setShowPunishers(false)}
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

      <Modal
        visible={showImportantMoves}
        animationType="slide"
        onRequestClose={() => setShowImportantMoves(false)}
      >
        <ImportantMovesComponent
          onClose={() => setShowImportantMoves(false)}
          setImportantMoveData={setImportantMoveData}
          importantMoveData={importantMoveData}
          frameData={alisaFrameData}
        />
      </Modal>

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

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateCardComponent;
