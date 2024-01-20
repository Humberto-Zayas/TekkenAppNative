import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import HeroComponent from './HeroComponent';
import ModalComponent from './ModalComponent';
import { characters } from '../../data/characters';
import {styles} from './styles';

const CardComponent = ({ route }) => {
  const { id } = route.params;
  const [card, setCard] = useState(null);
  const [character, setCharacter] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cards/id/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cards');
        }
        const data = await response.json();
        setCard(data);

        // Find the character object in the characters array
        const foundCharacter = characters.find(char => char.name === data.characterName);
        setCharacter(foundCharacter);

      } catch (error) {
        console.error('Error fetching card:', error);
      }
    };

    fetchCard();
  }, [id]);

  const openDrawer = (item) => {
    setSelectedItem(item);
  };

  const closeDrawer = () => {
    setSelectedItem(null);
  };

  const renderTableItem = ({ card, index, moveSetType }) => {
    const { move, description, youtubeLink } = card;

    // Exclude __v and YouTube link from rendering
    if (moveSetType === '__v' || moveSetType === 'youtubeLink') {
      return null;
    }

    return (
      <TouchableOpacity onPress={() => openDrawer(card)}>
        <View style={styles.tableRow}>
          <View style={styles.columnLeft}>
            <Text style={styles.value} numberOfLines={2}>
              {move}
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.value} numberOfLines={2}>
              {description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderMoveSet = (moveSetType) => {
    console.log('Character:', character);
    console.log('Heat Engager Data:', character?.heatEngagersData);
    if (moveSetType === '__v' || moveSetType === 'youtubeLink') {
      return null;
    }

    const moves = moveSetType === 'heatEngagersData' ? character?.heatEngagersData || [] : card?.[moveSetType] || [];

    if (!Array.isArray(moves)) {
      // If moves is not an array, handle it appropriately
      return null; // You can also render an error message or an empty view
    }

    return (
      <View style={styles.flatList} key={moveSetType}>
        <Text style={styles.tableTitle}>{moveSetType}</Text>
        {moves.map((item, index) => (
          <View key={`${index}_${moveSetType}`}>
            {renderTableItem({ card: item, index, moveSetType })}
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <HeroComponent name={card?.cardName} thumbnail={card?.thumbnail} rating={card?.rating} />
      <View style={{ paddingBottom: 64 }}>
        {renderMoveSet('heatEngagersData')}
        {Object.keys(card || {}).map((moveSetType) => renderMoveSet(moveSetType))}

        <View>
        <Text style={styles.tableTitle}>The Strategy</Text>
        <Text style={{ marginTop: 10 }}>{card?.cardDescription}</Text>

        {card?.youtubeLink && (
          <View style={styles.tableRow}>
            <Text style={styles.columnLeft}>
              <Text style={styles.value} numberOfLines={2}>
                YouTube Link
              </Text>
            </Text>
            <View style={styles.column}>
              <Text style={styles.value} numberOfLines={2}>
                {card?.youtubeLink}
              </Text>
            </View>
          </View>
        )}
      </View>
      </View>
     
      <Modal visible={selectedItem !== null} animationType="slide" transparent>
        <ModalComponent selectedItem={selectedItem} closeDrawer={closeDrawer} />
      </Modal>
    </ScrollView>
  );
};



export default CardComponent;
