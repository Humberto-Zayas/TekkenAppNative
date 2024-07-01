import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const MoveTableHeader = () => (
  <View style={styles.tableHeader}>
    <View style={styles.columnLeft}>
      <Text style={styles.headerText}>Move</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.headerText}>Description</Text>
    </View>
  </View>
);

const MoveTableRow = ({ item, index, onMovePress, onDelete }) => (
  <TouchableOpacity onPress={() => onMovePress(item)}>
    <View style={styles.tableRow}>
      <Text style={styles.columnLeft}>{item.move}</Text>
      <Text style={styles.column}>{item.description}</Text>
      <TouchableOpacity style={styles.deleteIcon} onPress={() => onDelete(index)}>
        <FontAwesome name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export { MoveTableHeader, MoveTableRow };
