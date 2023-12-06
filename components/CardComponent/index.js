import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { FlatList as GestureFlatList } from 'react-native-gesture-handler';
import HeroComponent from './HeroComponent';
import ModalComponent from './ModalComponent'; // Import the new component
import { heatEngagersData, punishersData, moveFlowchartData, customData } from '../../data/moveData';

const CardComponent = ({ route }) => {
  const { item } = route.params;
  const [selectedItem, setSelectedItem] = useState(null);

  const openDrawer = (item) => {
    setSelectedItem(item);
  };

  const closeDrawer = () => {
    setSelectedItem(null);
  };

  const dataMap = {
    heatEngagersData,
    punishersData,
    moveFlowchartData,
  };

  const renderTableItem = ({ item, index, moveSetType }) => (
    <TouchableOpacity onPress={() => openDrawer(item)}>
      <View style={styles.tableRow}>
        <View style={styles.columnLeft}>
          <Text style={styles.value} numberOfLines={2}>
            {item.move}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.value} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderMoveSet = (moveSetType) => {
    const moves = dataMap[moveSetType];
    return (
      <View style={styles.flatList}>
        <Text style={styles.tableTitle}>{moveSetType}</Text>
        {moves.map((item, index) => (
          <View key={`${index}_${moveSetType}`}>
            {renderTableItem({ item, index, moveSetType })}
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <HeroComponent name={item.name} thumbnail={item.thumbnail} rating={item.rating} />
      <View style={{paddingBottom: 32}}>
        {Object.keys(dataMap).map((moveSetType) => renderMoveSet(moveSetType))}
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
