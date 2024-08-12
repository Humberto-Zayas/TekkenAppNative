import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import { styles } from './styles';
import ModalComponent from './ModalComponent';

const difficultyColors = {
  easy: 'lightgreen',
  intermediate: 'lightyellow',
  hard: 'lightcoral',
};

const difficultyOrder = {
  easy: 1,
  intermediate: 2,
  hard: 3,
};

const difficultyIcons = {
  easy: 'smile-o',
  intermediate: 'meh-o',
  hard: 'frown-o',
};

const CardDetailComponent = ({ route, navigation }) => {
  const { moveSetName, moves } = route.params;
  const [selectedItem, setSelectedItem] = useState(null);
  const [sortedMoves, setSortedMoves] = useState([]);

  useEffect(() => {
    if (moveSetName === 'Combos') {
      // Sort from easy to hard
      setSortedMoves([...moves].sort((a, b) => difficultyOrder[a.difficulty.toLowerCase()] - difficultyOrder[b.difficulty.toLowerCase()]));
    } else {
      setSortedMoves(moves);
    }
  }, [moves, moveSetName]);

  const openDrawer = (item) => {
    setSelectedItem(item);
  };

  const closeDrawer = () => {
    setSelectedItem(null);
  };

  const renderMove = (move, index) => (
    <TouchableOpacity key={`${index}_${moveSetName}`} onPress={() => openDrawer(move)}>
      <View style={styles.tableRow}>
        <View style={styles.columnLeft}>
          <Text>{move.move}</Text>
        </View>
        <View style={styles.column}>
          <Text>{move.startupFrame}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCombo = (combo, index) => (
    <TouchableOpacity key={`${index}_${moveSetName}`} onPress={() => openDrawer(combo)}>
      <View style={[styles.tableRow, { backgroundColor: difficultyColors[combo.difficulty.toLowerCase()] }]}>
        <View style={styles.columnLeft}>
          {combo.comboStarters.map((starter, starterIndex) => (
            <Text key={starterIndex}>{starter}</Text>
          ))}
        </View>
        <View style={styles.column}>
          <Text>{combo.comboRoute}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome
            name={difficultyIcons[combo.difficulty.toLowerCase()]}
            size={24}
            color={difficultyColors[combo.difficulty.toLowerCase()]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderFollowUpOrMoveFlowChart = (followUpOrMoveFlow, index) => (
    <View key={`${index}_${moveSetName}`} style={styles.tableRow}>
      {followUpOrMoveFlow.moves.map((move, moveIndex) => (
        <View key={moveIndex} style={styles.column}>
          <TouchableOpacity onPress={() => openDrawer(move)}>
            <Text>{move.move}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  const renderHeader = () => {
    switch (moveSetName) {
      case 'Heat Engagers':
      case 'Punishers':
      case 'Important Moves':
        return (
          <View style={styles.tableHeader}>
            <View style={styles.columnLeft}>
              <Text style={styles.headerText}>Move</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headerText}>Start Frames</Text>
            </View>
          </View>
        );
      case 'Combos':
        return (
          <View style={styles.tableHeader}>
            <View style={styles.columnLeft}>
              <Text style={styles.headerText}>Combo Starters</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headerText}>Combo Route</Text>
            </View>
            
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text>{moveSetName}</Text>
      {renderHeader()}
      <ScrollView>
        {sortedMoves.map((item, index) => {
          if (moveSetName === 'Move Flow Chart' || moveSetName === 'Follow Ups') {
            return renderFollowUpOrMoveFlowChart(item, index);
          } else if (moveSetName === 'Combos') {
            return renderCombo(item, index);
          }
          return renderMove(item, index);
        })}
      </ScrollView>
      <Modal visible={selectedItem !== null} animationType="slide" transparent>
        <ModalComponent selectedItem={selectedItem} closeDrawer={closeDrawer} />
      </Modal>
    </View>
  );
};


export default CardDetailComponent;
