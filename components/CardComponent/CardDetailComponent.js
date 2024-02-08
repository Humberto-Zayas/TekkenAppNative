// CardDetailComponent.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const CardDetailComponent = ({ moves, moveSetType, openDrawer }) => {
  return (
    <View style={styles.flatList}>
      <Text style={styles.tableTitle}>{moveSetType}</Text>
      {moves.map((item, index) => (
        <TouchableOpacity key={`${index}_${moveSetType}`} onPress={() => openDrawer(item)}>
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
      ))}
    </View>
  );
};

export default CardDetailComponent;
