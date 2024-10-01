import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const difficultyColors = {
  easy: '#34db6e',
  intermediate: '#b8a93e',
  difficult: '#e67e22',
};

const difficultyOrder = {
  easy: 0,
  intermediate: 1,
  difficult: 2,
};

// Function to group combos by type
const groupCombosByType = (comboData) => {
  return comboData.reduce((groups, combo) => {
    const { type } = combo;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(combo);
    return groups;
  }, {});
};

const ComboList = ({ comboData, onDelete, onEdit }) => {
  // Sort combos by difficulty
  const sortedComboData = comboData.sort(
    (a, b) => difficultyOrder[a.difficulty.toLowerCase()] - difficultyOrder[b.difficulty.toLowerCase()]
  );

  // Group combos by type
  const groupedCombos = groupCombosByType(sortedComboData);

  // Check if there are any combos
  const hasCombos = sortedComboData.length > 0;

  return (
    <View>
      {/* Legend for difficulty */}
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
          <View style={[styles.legendDot, { backgroundColor: difficultyColors.difficult }]} />
          <Text style={styles.legendText}>Hard</Text>
        </View>
      </View>

      {/* If no combos are available, show the empty list message */}
      {!hasCombos ? (
        <Text style={styles.emptyList}>No combos added yet</Text>
      ) : (
        Object.keys(groupedCombos).map((type) => (
          <View key={type}>
            {/* Combo type title */}
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 8 }}>{type}</Text>

            {/* Loop through each combo under this type */}
            {groupedCombos[type].map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.comboStarterColumn}>
                  {item.comboStarters.map((starter, idx) => (
                    <Text style={{ fontSize: 18 }} key={idx}>{starter}</Text>
                  ))}
                </View>
                <View style={styles.comboRouteColumn}>
                  <Text style={styles.comboRouteText}>{item.comboRoute}</Text>
                </View>
                <View style={styles.notesColumn}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => onEdit(index)} style={styles.editIcon}>
                      <FontAwesome name="edit" size={24} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onDelete(index)} style={styles.deleteIcon}>
                      <FontAwesome name="trash" size={24} color="red" />
                    </TouchableOpacity>
                    
                  </View>
                  <View
                      style={[
                        styles.difficultyDot,
                        { backgroundColor: difficultyColors[item.difficulty.toLowerCase()] },
                      ]}
                    />
                </View>
              </View>
            ))}
          </View>
        ))
      )}
    </View>
  );
};

export default ComboList;
