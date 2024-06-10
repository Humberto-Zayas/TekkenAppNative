import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './styles';
import ModalComponent from './ModalComponent';

const CardDetailComponent = ({ route, navigation }) => {
  const { moveSetName, moves } = route.params;
  console.log(moves);
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

  return (
    <ScrollView style={styles.container}>
      <Text>{moveSetName}</Text>
      {moves.map((item, index) => {
        if (item.move1 && item.move2) {
          return (
            <View key={index}>
              {renderMove(item.move1, `${index}_move1`)}
              {renderMove(item.move2, `${index}_move2`)}
            </View>
          );
        }
        return renderMove(item, index);
      })}

      <Modal visible={selectedItem !== null} animationType="slide" transparent>
        <ModalComponent selectedItem={selectedItem} closeDrawer={closeDrawer} />
      </Modal>
    </ScrollView>
  );
};

export default CardDetailComponent;
