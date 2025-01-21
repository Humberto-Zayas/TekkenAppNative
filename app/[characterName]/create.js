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
import { themeStyles } from '../../styles/styles.js';
import { useAuth } from '../../utils/AuthContext';
import tags from '../../data/tags';
import { handleSaveCard, handleYouTubeLinkChange, handleTwitchLinkChange } from '../../utils/cardHandlers';
import { useRouter, useLocalSearchParams } from 'expo-router';

const CreateCardPage = () => {
  const { user, token } = useAuth(); // Get user and token from useAuth
  const router = useRouter();
  const { cardData: rawCardData, isEdit, characterName, characterImage } = useLocalSearchParams();
  const initialCardData = useMemo(() => (rawCardData ? JSON.parse(rawCardData) : {}), [rawCardData]);
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
  const frameDataFiles = {
    Alisa: require('../../data/AlisaFrameData.js').default,
    Asuka: require('../../data/AsukaFrameData.js').default,
    Azucena: require('../../data/AzucenaFrameData.js').default,
    Bryan: require('../../data/BryanFrameData.js').default,
    Claudio: require('../../data/ClaudioFrameData.js').default,
    Devil_Jin: require('../../data/Devil_JinFrameData.js').default,
    Dragunov: require('../../data/DragunovFrameData.js').default,
    Eddy: require('../../data/EddyFrameData.js').default,
    Feng: require('../../data/FengFrameData.js').default,
    Hwoarang: require('../../data/HwoarangFrameData.js').default,
    Jin: require('../../data/JinFrameData.js').default,
    Jun: require('../../data/JunFrameData.js').default,
    Kazuya: require('../../data/KazuyaFrameData.js').default,
    King: require('../../data/KingFrameData.js').default,
    Kuma: require('../../data/KumaFrameData.js').default,
    Lars: require('../../data/LarsFrameData.js').default,
    Law: require('../../data/LawFrameData.js').default,
    Lee: require('../../data/LeeFrameData.js').default,
    Lili: require('../../data/LiliFrameData.js').default,
    Nina: require('../../data/NinaFrameData.js').default,
    Panda: require('../../data/PandaFrameData.js').default,
    Paul: require('../../data/PaulFrameData.js').default,
    Raven: require('../../data/RavenFrameData.js').default,
    Reina: require('../../data/ReinaFrameData.js').default,
    Shaheen: require('../../data/ShaheenFrameData.js').default,
    Steve: require('../../data/SteveFrameData.js').default,
    Victor: require('../../data/VictorFrameData.js').default,
    Xiaoyu: require('../../data/XiaoyuFrameData.js').default,
    Yoshimitsu: require('../../data/YoshimitsuFrameData.js').default,
    Zafina: require('../../data/ZafinaFrameData.js').default,
  };

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

  // Correctly map the frameData to the characterName
  const frameData = useMemo(() => {
    if (!characterName) return null;

    // Normalize characterName to match keys in frameDataFiles
    const formattedCharacterName = characterName.replace(/ /g, '_'); // Replace spaces with underscores
    return frameDataFiles[formattedCharacterName] || null; // Return frameData or null if not found
  }, [characterName]);

  // Debugging tip: Log to verify frameData is being fetched correctly
  useEffect(() => {
    console.log('Selected Frame Data:');
  }, [frameData]);

  const handleSave = () => {
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
  
    handleSaveCard({
      isEdit,
      formData,
      token,
      initialCardData,
      setHasUnsavedChanges,
      router,
    });
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

  return (
    <ScrollView style={themeStyles.container}>
      <HeroCreateComponent
        cardName={cardName}
        thumbnail={characterImage}
        onCardNameChange={(name) => { setCardName(name); setHasUnsavedChanges(true); }}
        cardDescription={cardDescription}
        onCardDescriptionChange={(desc) => { setCardDescription(desc); setHasUnsavedChanges(true); }}
        youtubeLink={youtubeLink}
        onYouTubeLinkChange={(link) => handleYouTubeLinkChange(link, setYoutubeLink, setHasUnsavedChanges)}
        twitchLink={twitchLink}
        onTwitchLinkChange={(link) => handleTwitchLinkChange(link, setTwitchLink, setHasUnsavedChanges)}
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

export default CreateCardPage;
