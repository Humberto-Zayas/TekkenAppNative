import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import ModalComponent from './ModalComponent';

const CardDetailComponent = ({ route, navigation }) => {
  const { moveSetName, moves } = route.params;
  const [selectedItem, setSelectedItem] = useState(null);

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
          <Text>{move.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCombo = (combo, index) => (
    <TouchableOpacity key={`${index}_${moveSetName}`}>
      <View style={styles.tableRow}>
        <View style={styles.columnLeft}>
          {combo.comboStarters.map((starter, starterIndex) => (
            <Text key={starterIndex}>{starter}</Text>
          ))}
        </View>
        <View style={styles.column}>
          <Text>{combo.comboRoute}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => {
    switch (moveSetName) {
      case 'Heat Engagers':
      case 'Punishers':
        return (
          <View style={styles.tableHeader}>
            <View style={styles.columnLeft}>
              <Text style={styles.headerText}>Move</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headerText}>Description</Text>
            </View>
          </View>
        );
      case 'Move Flow Chart':
      case 'Guaranteed Follow Ups':
        return (
          <View style={styles.tableHeader}>
            <View style={styles.columnLeft}>
              <Text style={styles.headerText}>Move 1</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.headerText}>Move 2</Text>
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
        {moves.map((item, index) => {
          if (item.move1 && item.move2) {
            return (
              <View key={index}>
                {renderMove(item.move1, `${index}_move1`)}
                {renderMove(item.move2, `${index}_move2`)}
              </View>
            );
          } else if (item.comboRoute) {
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
