import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const FollowUpStepContent = ({
  contentType,
  step,
  selectedMoves,
  notes,
  setSelectedMoves,
  setNotes,
  setStep,
  frameData,
  addFollowUp,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const parsedFrameData = JSON.parse(frameData); // Parse the stringified frame data

  const handleMoveSelect = (move) => {
    setSelectedMoves((prevSelectedMoves) => {
      const isSelected = prevSelectedMoves.some(selected => selected.move === move.move);
      if (!isSelected) {
        return [...prevSelectedMoves, move];
      } else {
        return prevSelectedMoves.filter(selected => selected.move !== move.move);
      }
    });
    setSearchQuery(''); // Reset search query when a move is selected
  };

  // Filter the frameData based on the search query
  const filteredFrameData = parsedFrameData.filter(item => {
    // Ensure item.move is a string before calling toLowerCase
    return typeof item.move === 'string' && item.move.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const renderMoveListHeader = (
    <View style={styles.tableHeader}>
      <View style={styles.column}>
        <Text style={styles.headerText}>Move</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Hit</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Dmg</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Start</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Block</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Hit</Text>
      </View>
    </View>
  );

  const getColorForIndex = (index) => {
    const colors = ['#3498db', '#9b59b6', '#e67e22', '#e74c3c'];
    return colors[index % colors.length];
  };

  switch (step) {
    case 1:
      return (
        <>
          <Text style={styles.header}>Select moves</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
            <FontAwesome name="search" size={20} color="black" />
            <TextInput
              style={styles.searchInput} // Add some styling for this input
              placeholder="Search moves..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
          {renderMoveListHeader}
          <FlatList
            data={filteredFrameData}
            style={styles.flatList}
            renderItem={({ item }) => {
              const isSelected = selectedMoves.some(selected => selected.move === item.move);
              return (
                <TouchableOpacity
                  style={[
                    styles.moveItem,
                    isSelected ? styles.selectedMove : null
                  ]}
                  onPress={() => handleMoveSelect(item)}
                >
                  <View style={{ width: '100%' }}>
                    <View style={styles.tableRow}>
                      <Text style={styles.column}>{item.move}</Text>
                      <Text style={styles.column}>{item.hitLevel}</Text>
                      <Text style={styles.column}>{item.damage}</Text>
                      <Text style={styles.column}>{item.startupFrame}</Text>
                      <Text style={styles.column}>{item.blockFrame}</Text>
                      <Text style={styles.column}>{item.hitFrame}</Text>
                      {isSelected && (
                        <Text style={styles.flowCounter}>{selectedMoves.indexOf(item) + 1}</Text>
                      )}
                    </View>

                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.move}
          />
          <View style={styles.stepperButtons}>
            <TouchableOpacity
              onPress={() => setStep(2)}
              style={styles.nextButton}
            >
              <Text style={{ color: 'white', fontSize: 18 }}>Next</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    case 2:
      return (
        <>
          <Text style={styles.header}>
            
            {contentType === 'followups' ? 'Add Notes About Follow Ups' : 'Add Notes About Flowchart'}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flowChartContainer}
          >
            {selectedMoves.map((move, moveIndex) => (
              <View
                key={moveIndex}
                style={[
                  styles.flowChartItemWrapper,
                  { zIndex: selectedMoves.length - moveIndex },
                ]}
              >
                <TouchableOpacity
                  onPress={() => openDrawer(move)}
                  style={[
                    styles.flowChartItem,
                    { backgroundColor: getColorForIndex(moveIndex) },
                  ]}
                >
                  <Text style={styles.flowChartItemText}>{move.move}</Text>
                </TouchableOpacity>
                <View
                  style={[
                    styles.rotatedSquare,
                    { backgroundColor: getColorForIndex(moveIndex) },
                  ]}
                />
              </View>
            ))}
          </ScrollView>

          <View style={styles.flatList}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
              <FontAwesome name="pencil" size={20} color="black" />
              <TextInput
                style={styles.input}
                placeholder="Enter notes"
                value={notes}
                onChangeText={setNotes}
              />
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => setStep(1)}
                style={styles.backButton}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addFollowUp} style={styles.addButton}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                  {contentType === 'followups' ? 'Add Follow Up' : 'Add Flow Chart'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    default:
      return null;
  }
};

export default FollowUpStepContent;
