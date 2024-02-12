import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const MoveFlowChartComponent = ({ onClose, setMoveFlowChartData, moveFlowChartData }) => {
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() === '') return;
    setMoveFlowChartData([...moveFlowChartData, newItem]);
    setNewItem('');
  };

  const deleteItem = (index) => {
    const updatedItems = [...moveFlowChartData];
    updatedItems.splice(index, 1);
    setMoveFlowChartData(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Move Flow Chart</Text>

      {/* Input for adding new items */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Enter a new item"
        />
        <TouchableOpacity onPress={addItem} style={styles.addButton}>
          <FontAwesome name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* List of items */}
      <FlatList
        data={moveFlowChartData}
        renderItem={({ item, index }) => (
          <View style={styles.flowChartItem}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => deleteItem(index)}>
              <FontAwesome name="trash" size={20} color="red" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Plus Button */}
      <TouchableOpacity onPress={() => setNewItem('')} style={styles.plusButton}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>

      {/* Back button */}
      <TouchableOpacity onPress={onClose} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={20} color="black" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoveFlowChartComponent;
