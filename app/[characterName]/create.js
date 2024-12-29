import React, { useState, useEffect, useMemo } from 'react';
import { View, ScrollView, Modal, TouchableOpacity, Text, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HeroCreateComponent from '../../components/CreateCardComponent/HeroCreateComponent';
import PunisherComponent from '../../components/CreateCardComponent/PunisherComponent';
import MoveFlowChartComponent from '../../components/CreateCardComponent/MoveFlowChartComponent';
import FollowUpsComponent from '../../components/CreateCardComponent/FollowUpsComponent';
import ComboComponent from '../../components/CreateCardComponent/ComboComponent';
import ImportantMovesComponent from '../../components/CreateCardComponent/ImportantMovesComponent';
import { styles } from '../../components/CreateCardComponent/styles';
import { useAuth } from '../../utils/AuthContext';
import tags from '../../data/tags';
import { createCard, updateCard } from '../../utils/api';
import { useRouter, useLocalSearchParams } from 'expo-router';

const CreateCardPage = () => {
  const { user, token } = useAuth(); // Get user and token from useAuth
  const router = useRouter();
  const { cardData: rawCardData, isEdit, characterName, characterImage, frameData } = useLocalSearchParams();
  const initialCardData = useMemo(() => (rawCardData ? JSON.parse(rawCardData) : {}), [rawCardData]);

  const parsedFrameData = JSON.parse(frameData); // Parse the stringified frame data
  
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
    console.log('Unsaved Changes:', hasUnsavedChanges);
  }, [hasUnsavedChanges]);

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

      // Reset unsaved changes because we are loading existing data
      setHasUnsavedChanges(false);
    }
  }, [isEdit, initialCardData]);

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
      tags: selectedTags,
    };

    try {
      if (isEdit) {
        await updateCard({ ...formData, _id: initialCardData._id }, token);
        await new Promise((resolve) => {
          Alert.alert('Success', 'Card updated successfully!', [
            {
              text: 'OK',
              onPress: () => {
                setHasUnsavedChanges(false); // Reset unsaved changes after update
                resolve(); // Resolve the promise to indicate the alert was dismissed
              },
            },
          ], { cancelable: false });
        });
      } else {
        await createCard(formData, token);
        await new Promise((resolve) => {
          Alert.alert('Success', 'Card created successfully!', [
            {
              text: 'OK',
              onPress: () => {
                setHasUnsavedChanges(false); // Reset unsaved changes after creation
                resolve(); // Resolve the promise to indicate the alert was dismissed
              },
            },
          ], { cancelable: false });
        });
      }

      // Navigate back after the alert is dismissed
      router.back();

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
        onCardNameChange={(name) => { setCardName(name); setHasUnsavedChanges(true); }}
        cardDescription={cardDescription}
        onCardDescriptionChange={(desc) => { setCardDescription(desc); setHasUnsavedChanges(true); }}
        youtubeLink={youtubeLink}
        onYouTubeLinkChange={(link) => { setYoutubeLink(link); setHasUnsavedChanges(true); }}
        twitchLink={twitchLink}
        onTwitchLinkChange={(link) => { setTwitchLink(link); setHasUnsavedChanges(true); }}
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
          frameData={parsedFrameData}
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
          frameData={parsedFrameData}
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
          frameData={parsedFrameData}
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
          frameData={parsedFrameData}
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
          frameData={parsedFrameData}
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

export default CreateCardPage;
