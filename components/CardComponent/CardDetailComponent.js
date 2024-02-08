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

  return (
    <ScrollView style={styles.container}>
      <Text>{moveSetName}</Text>
      {moves.map((item, index) => (
        <TouchableOpacity key={`${index}_${moveSetName}`} onPress={() => openDrawer(item)}>
          <View style={styles.tableRow}>
            <View style={styles.columnLeft}>
              <Text>{item.move}</Text>
            </View>
            <View style={styles.column}>
              <Text>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      <Modal visible={selectedItem !== null} animationType="slide" transparent>
        <ModalComponent selectedItem={selectedItem} closeDrawer={closeDrawer} />
      </Modal>
    </ScrollView>
  );
};

export default CardDetailComponent;
