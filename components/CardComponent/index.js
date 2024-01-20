import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import HeroComponent from './HeroComponent';
import ModalComponent from './ModalComponent';
import { heatEngagersData } from '../../data/moveData';
import { characters } from '../../data/characters'; // I need to extract characters[x].heatEngagerData from here as opposed to the line above

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
        setCharacter(data.characterName)
        console.log(data);
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
    if (moveSetType === '__v' || moveSetType === 'youtubeLink') {
      return null;
    }
  
    const moves = moveSetType === 'heatEngagersData' ? heatEngagersData : card?.[moveSetType] || [];
  
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
      <View style={{ paddingBottom: 32 }}>
        {Object.keys(card || {}).map((moveSetType) => renderMoveSet(moveSetType))}
      </View>
      <View>
        <Text>{card?.cardDescription}</Text>
      </View>
      <Modal visible={selectedItem !== null} animationType="slide" transparent>
        <ModalComponent selectedItem={selectedItem} closeDrawer={closeDrawer} />
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 50,
  },
  flatList: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    overflow: 'hidden',
    marginBottom: 16,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  columnLeft: {
    width: '30%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    width: '70%',
    padding: 8,
    alignItems: 'start',
  },
  value: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  modalContent: {
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default CardComponent;
