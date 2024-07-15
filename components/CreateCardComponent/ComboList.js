import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const ComboList = ({ comboData, onDelete, onEdit }) => {
  return (
    <FlatList
      style={styles.flatList}
      data={comboData}
      renderItem={({ item, index }) => (
        <View style={styles.tableRow}>
          <View style={styles.columnLeft}>
            {item.comboStarters.map((starter, idx) => (
              <Text key={idx}>{starter}</Text>
            ))}
          </View>
          <Text style={styles.column}>{item.comboRoute}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => onDelete(index)} style={styles.deleteButton}>
              <FontAwesome name="trash" size={24} color="red" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onEdit(index)} style={{ marginTop: 8 }}>
              <FontAwesome name="pencil" size={24} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={(_, index) => index.toString()}
      ListEmptyComponent={<Text style={styles.emptyList}>No combos added yet</Text>}
    />
  );
};

export default ComboList;
