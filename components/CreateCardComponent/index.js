import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, Modal, TouchableOpacity, Text, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HeroCreateComponent from './HeroCreateComponent';
import PunisherComponent from './PunisherComponent';
import MoveFlowChartComponent from './MoveFlowChartComponent';
import FollowUpsComponent from './FollowUpsComponent';
import ComboComponent from './ComboComponent';
import ImportantMovesComponent from './ImportantMovesComponent';
import { styles } from './styles';
import { useAuth } from '../../utils/AuthContext';
import tags from '../../data/tags';
import { createCard, updateCard } from '../../utils/api';

const CreateCardComponent = ({ route, navigation }) => {
  const { user, token } = useAuth(); // Get user and token from useAuth
  const { cardData: initialCardData, isEdit, characterName, characterImage, frameData } = route.params;
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
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

  useEffect(() => {
    if (isEdit) {
      setCardName(initialCardData.cardName);
      setCardDescription(initialCardData.cardDescription);
      setYoutubeLink(initialCardData.youtubeLink);
      setTwitchLink(initialCardData.twitchLink);
      setPunisherData(initialCardData.punisherData);
      setMoveFlowChartData(initialCardData.moveFlowChartData);
      setFollowUpData(initialCardData.followUpData);
      setComboData(initialCardData.comboData);
      setImportantMoveData(initialCardData.moveData);
      setSelectedTags(initialCardData.tags || []);
    }
  }, [isEdit, initialCardData]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!hasUnsavedChanges) {
        // If there are no unsaved changes, do nothing
        return;
      }
  
      // Prevent default behavior of leaving the screen
      e.preventDefault();
  
      // Show an alert to confirm navigation
      Alert.alert(
        'Discard changes?',
        'You have unsaved changes. Are you sure you want to discard them and leave?',
        [
          { text: "Don't leave", style: 'cancel', onPress: () => {} },
          {
            text: 'Discard',
            style: 'destructive',
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]
      );
    });
  
    return unsubscribe;
  }, [navigation, hasUnsavedChanges]);  

  const handleCardNameChange = (name) => {
    setCardName(name);
    if (name !== initialCardData?.cardName) setHasUnsavedChanges(true);
  };
  
  const handleCardDescriptionChange = (description) => {
    setCardDescription(description);
    if (description !== initialCardData?.cardDescription) setHasUnsavedChanges(true);
  };
  
  const handleYouTubeLinkChange = (youtubeLink) => {
    setYoutubeLink(youtubeLink);
    if (youtubeLink !== initialCardData?.youtubeLink) setHasUnsavedChanges(true);
  };
  
  const handleTwitchLinkChange = (twitchLink) => {
    setTwitchLink(twitchLink);
    if (twitchLink !== initialCardData?.twitchLink) setHasUnsavedChanges(true);
  };
  

  const handleTagPress = (tag) => {
    const tagIndex = selectedTags.findIndex(t => t.name === tag.name);
    if (tagIndex !== -1) {
      setSelectedTags(selectedTags.filter(t => t.name !== tag.name));
    } else {
      setSelectedTags([...selectedTags, { name: tag.name }]);
    }
    setHasUnsavedChanges(true);
  };

  const handleSave = async () => {
    if (!cardName || !cardDescription) {
      alert('Please enter a Card Name and Card Description.');
      return;
    }

    const formData = {
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

    try {
      if (isEdit) {
        await updateCard({ ...formData, _id: initialCardData._id }, token); // Pass token here
        Alert.alert('Success', 'Card updated successfully!', [{ text: 'OK', onPress: () => navigation.goBack() }], { cancelable: false });
      } else {
        await createCard(formData, token); // Pass token here
        Alert.alert('Success', 'Card created successfully!', [{ text: 'OK', onPress: () => navigation.goBack() }], { cancelable: false });
      }
    } catch (error) {
      console.error('Error saving the card:', error);
      alert('Failed to save the card. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeroCreateComponent
        cardName={cardName}
        thumbnail={characterImage}
        onCardNameChange={handleCardNameChange}
        cardDescription={cardDescription}
        onCardDescriptionChange={handleCardDescriptionChange}
        youtubeLink={youtubeLink}
        onYouTubeLinkChange={handleYouTubeLinkChange}
        twitchLink={twitchLink}
        onTwitchLinkChange={handleTwitchLinkChange}
      />
      <View style={{ marginTop: 16 }}>
        <TouchableOpacity onPress={() => setShowPunishers(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Punishers</Text>
          {punisherData.length > 0 && <Text style={styles.counter}>{punisherData.length}</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowMoveFlowChart(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Move Flow Chart</Text>
          {moveFlowChartData.length > 0 && <Text style={styles.counter}>{moveFlowChartData.length}</Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowImportantMoves(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Important Moves</Text>
          {importantMoveData.length > 0 && <Text style={styles.counter}>{importantMoveData.length}</Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowFollowUps(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Set Follow Up/Mini Combos</Text>
          {followUpData.length > 0 && <Text style={styles.counter}>{followUpData.length}</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowCombos(true)} style={styles.link}>
          <FontAwesome name="external-link" size={16} color="white" />
          <Text style={styles.linkText}>Combos</Text>
          {comboData.length > 0 && <Text style={styles.counter}>{comboData.length}</Text>}
        </TouchableOpacity>
      </View>
      <Modal visible={showPunishers} animationType="slide" onRequestClose={() => setShowPunishers(false)}>
        <PunisherComponent
          onClose={() => setShowPunishers(false)}
          setPunisherData={(data) => {
            setPunisherData(data);
            setHasUnsavedChanges(true); // Track unsaved changes
          }}
          punisherData={punisherData}
          frameData={frameData}
        />
      </Modal>

      <Modal visible={showMoveFlowChart} animationType="slide" onRequestClose={() => setShowMoveFlowChart(false)}>
        <MoveFlowChartComponent
          onClose={() => setShowMoveFlowChart(false)}
          setMoveFlowChartData={(data) => {
            setMoveFlowChartData(data);
            setHasUnsavedChanges(true)
          }}
          moveFlowChartData={moveFlowChartData}
          frameData={frameData}
        />
      </Modal>

      <Modal visible={showFollowUps} animationType="slide" onRequestClose={() => setShowFollowUps(false)}>
        <FollowUpsComponent
          onClose={() => setShowFollowUps(false)}
          setFollowUpData={(data) => {
            setFollowUpData(data);
            setHasUnsavedChanges(true);
          }}
          followUpData={followUpData}
          frameData={frameData}
        />
      </Modal>

      <Modal visible={showCombos} animationType="slide" onRequestClose={() => setShowCombos(false)}>
        <ComboComponent
          onClose={() => setShowCombos(false)}
          setComboData={(data) => {
            setComboData(data);
            setHasUnsavedChanges(true);
          }}
          comboData={comboData}
          frameData={frameData}
        />
      </Modal>

      <Modal visible={showImportantMoves} animationType="slide" onRequestClose={() => setShowImportantMoves(false)}>
        <ImportantMovesComponent
          onClose={() => setShowImportantMoves(false)}
          setImportantMoveData={(data) => {
            setImportantMoveData(data);
            setHasUnsavedChanges(true);
          }}
          importantMoveData={importantMoveData}
          frameData={frameData}
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
        <Text style={styles.saveButtonText}>{isEdit ? 'Update Card' : 'Save Card'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateCardComponent;
