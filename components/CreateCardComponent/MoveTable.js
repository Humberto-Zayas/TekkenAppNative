import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const MoveTableHeader = ({ firstHeader, secondHeader }) => (
  <View style={styles.tableHeader}>
    <View style={styles.columnLeft}>
      <Text style={styles.headerText}>{firstHeader}</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.headerText}>{secondHeader}</Text>
    </View>
  </View>
);

const MoveTableRow = ({ item, index, onMovePress, onDelete }) => (
  <Pressable onPress={() => onMovePress(item)} style={styles.tableRow}>
    <View style={styles.columnLeft}>
      <Text style={{ fontSize: 18 }}>{item.move}</Text>
    </View>
    <View style={styles.column}>
      <Text style={{ fontSize: 18 }}>{item.startupFrame}</Text>
    </View>
    <TouchableOpacity onPress={onDelete} style={styles.deleteIcon}>
      <FontAwesome name="trash" size={24} color="red" />
    </TouchableOpacity>
  </Pressable>
);


const FlowChartRow = ({ item, index, onDelete }) => (
  <View style={styles.tableRow}>
    <Text style={styles.column}>{item.move1.move}</Text>
    <Text style={styles.column}>{item.move2 ? ` ${item.move2.move}` : ''}</Text>
    <Text>hann</Text>
    <TouchableOpacity style={styles.deleteIcon} onPress={() => onDelete(index)}>
      <FontAwesome name="trash" size={20} color="red" />
    </TouchableOpacity>
  </View>
);

export { MoveTableHeader, MoveTableRow, FlowChartRow };
