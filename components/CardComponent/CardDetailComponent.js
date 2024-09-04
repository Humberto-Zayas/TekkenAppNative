import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import ModalComponent from './ModalComponent';

const difficultyColors = {
  easy: '#34db6e',
  intermediate: '#b8a93e',
  hard: '#e67e22',
};

const difficultyOrder = {
  easy: 0,
  intermediate: 1,
  hard: 2,
};

const CardDetailComponent = ({ route }) => {
  const { moveSetName, moves, cardName, image } = route.params;
  const [selectedItem, setSelectedItem] = useState(null);
  const [sortedMoves, setSortedMoves] = useState([]);
  const [groupedCombos, setGroupedCombos] = useState({});

  useEffect(() => {
    if (moveSetName === 'Combos') {
      // Group combos by type
      const grouped = moves.reduce((acc, combo) => {
        if (!acc[combo.type]) {
          acc[combo.type] = [];
        }
        acc[combo.type].push(combo);
        return acc;
      }, {});

      // Sort each group by difficulty
      Object.keys(grouped).forEach(type => {
        grouped[type].sort((a, b) => difficultyOrder[a.difficulty.toLowerCase()] - difficultyOrder[b.difficulty.toLowerCase()]);
      });

      setGroupedCombos(grouped);
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
    <View key={`${index}_${moveSetName}`}>
      <TouchableOpacity style={styles.tableRow} onPress={() => openDrawer(combo)}>
        <View style={styles.comboStarterColumn}>
          {combo.comboStarters.map((starter, starterIndex) => (
            <Text
              style={{ fontSize: 18, marginBottom: 8 }}
              key={starterIndex}
            >
              {starter}
            </Text>
          ))}
        </View>

        <View style={styles.comboRouteColumn}>
          <Text style={styles.comboRouteText}>{combo.comboRoute}</Text>
        </View>

        <View style={styles.notesColumn}>
          <FontAwesome
            style={{ alignSelf: 'center' }}
            name={'file-text-o'}
            size={24}
          />
          <View
            style={[
              styles.difficultyDot,
              { backgroundColor: difficultyColors[combo.difficulty.toLowerCase()] },
            ]}
          />
        </View>
      </TouchableOpacity>
    </View>
  );

  const getColorForIndex = (index) => {
    const colors = ['#3498db', '#9b59b6', '#e67e22', '#e74c3c'];
    return colors[index % colors.length];
  };

  const renderFollowUpOrMoveFlowChart = (followUpOrMoveFlow, index) => (
    <ScrollView
      key={`${index}_${moveSetName}`}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flowChartContainer}
    >
      {followUpOrMoveFlow.moves.map((move, moveIndex) => (
        <View
          key={moveIndex}
          style={[
            styles.flowChartItemWrapper,
            { zIndex: followUpOrMoveFlow.moves.length - moveIndex },
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
      case 'HeatEngagers':
      case 'Punishers':
      case 'Important Moves':
        return (
          <View style={styles.tableHeader}>
            <View style={styles.columnEqual}>
              <Text style={styles.headerText}>Move</Text>
            </View>
            <View style={{ ...styles.columnEqual, alignSelf: 'center' }}>
              <Text style={styles.headerText}>Start Frames</Text>
            </View>
            <View style={styles.columnEqual}>
              <Text style={{ ...styles.headerText, alignSelf: 'center' }}>Notes</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image source={image} style={styles.heroImage} />
        <View style={styles.heroInfo}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{cardName}</Text>
          <Text>{moveSetName}</Text>
        </View>
      </View>

      {/* Legend */}
      {moveSetName === 'Combos' && (
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: difficultyColors.easy }]} />
            <Text style={styles.legendText}>Easy</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: difficultyColors.intermediate }]} />
            <Text style={styles.legendText}>Intermediate</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: difficultyColors.hard }]} />
            <Text style={styles.legendText}>Hard</Text>
          </View>
        </View>
      )}

      {moveSetName !== 'Combos' && renderHeader()}

      <ScrollView>
        {moveSetName === 'Combos' && Object.keys(groupedCombos).map((type) => (
          <View key={type}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10 }}>{type}</Text>
            {groupedCombos[type].map((combo, comboIndex) => renderCombo(combo, comboIndex))}
          </View>
        ))}
        {moveSetName !== 'Combos' && sortedMoves.map((item, index) => {
          if (moveSetName === 'Move Flow Chart' || moveSetName === 'Follow Ups') {
            return renderFollowUpOrMoveFlowChart(item, index);
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
