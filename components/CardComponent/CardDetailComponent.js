import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
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
  const { moveSetName, moves, cardName, image } = route.params;
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
        <View style={styles.columnEqual}>
          <Text style={{ fontSize: 18 }}>{move.move}</Text>
        </View>
        <View style={styles.columnEqual}>
          <Text style={{ fontSize: 18, alignSelf: 'center', marginLeft: -8 }}>{move.startupFrame}</Text>
        </View>
        <View style={styles.columnEqual}>
          <FontAwesome
            style={{ alignSelf: 'center' }}
            name={'file-text-o'}
            size={24}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCombo = (combo, index) => (
    <TouchableOpacity key={`${index}_${moveSetName}`} onPress={() => openDrawer(combo)}>
      <View style={[styles.tableRow, { backgroundColor: difficultyColors[combo.difficulty.toLowerCase()] }]}>
        <View style={styles.columnLeft}>
          {combo.comboStarters.map((starter, starterIndex) => (
            <Text style={{ fontSize: 18, marginBottom: 8 }} key={starterIndex}>{starter}</Text>
          ))}
        </View>
        <View style={styles.column}>
          <Text style={{fontSize: 18}}>{combo.comboRoute}</Text>
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

  const getColorForIndex = (index) => {
    const colors = ['#3498db', '#9b59b6', '#e67e22', '#e74c3c']; // Blue, Purple, Orange, Red
    return colors[index % colors.length];
  };

  const renderFollowUpOrMoveFlowChart = (followUpOrMoveFlow, index) => (
    <ScrollView
      key={`${index}_${moveSetName}`}
      horizontal
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      contentContainerStyle={styles.flowChartContainer}
    >
      {followUpOrMoveFlow.moves.map((move, moveIndex) => (
        <View
          key={moveIndex}
          style={[
            styles.flowChartItemWrapper,
            { zIndex: followUpOrMoveFlow.moves.length - moveIndex } // Higher z-index for earlier items
          ]}
        >
          <TouchableOpacity
            onPress={() => openDrawer(move)}
            style={[
              styles.flowChartItem,
              { backgroundColor: getColorForIndex(moveIndex) },
            ]}
          >
            <Text style={styles.flowChartItemText}>{move.move}</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.rotatedSquare,
              { backgroundColor: getColorForIndex(moveIndex) },
            ]}
          />
        </View>
      ))}
    </ScrollView>
  );

  const renderHeader = () => {
    switch (moveSetName) {
      case 'HeatEngagers': // Updated to match your logged movesetname
      case 'Punishers':
      case 'Important Moves':
        return (
          <View style={styles.tableHeader}>
            <View style={styles.columnEqual}>
              <Text style={styles.headerText}>Move</Text>
            </View>
            <View style={{...styles.columnEqual, alignSelf: 'center'}}>
              <Text style={styles.headerText}>Start Frames</Text>
            </View>
            <View style={styles.columnEqual}>
              <Text style={{ ...styles.headerText, alignSelf: 'center' }}>Notes</Text>
            </View>

          </View>
        );
      case 'Combos':
        return (
          <View style={styles.tableHeader}>
            <View style={styles.columnLeft}>
              <Text style={styles.headerText}>Starters</Text>
            </View>
            <View style={styles.column}>
              <Text style={{...styles.headerText, alignSelf: 'flex-start'}}>Combo Route</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.heroContainer]}>
        <Image source={image} style={styles.heroImage} />
        <View style={styles.heroInfo}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{cardName}</Text>
          <Text>{moveSetName}</Text>
        </View>
      </View>
      {renderHeader()}
      <ScrollView>
        {sortedMoves.map((item, index) => {
          if (moveSetName === `Move Flow Chart` || moveSetName === 'Follow Ups') {
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
