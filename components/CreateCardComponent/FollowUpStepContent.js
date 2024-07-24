import React from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
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
  const handleMoveSelect = (move) => {
    setSelectedMoves((prevSelectedMoves) => {
      const isSelected = prevSelectedMoves.some(selected => selected.move === move.move);
      if (!isSelected) {
        return [...prevSelectedMoves, move];
      } else {
        return prevSelectedMoves.filter(selected => selected.move !== move.move);
      }
    });
  };

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

  switch (step) {
    case 1:
      return (
        <>
          <Text style={styles.header}>Select moves</Text>
          {renderMoveListHeader}
          <FlatList
            data={frameData}
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
                    </View>
                    {isSelected && (
                      <Text style={styles.counter}>{selectedMoves.indexOf(item) + 1}</Text>
                    )}
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
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    case 2:
      return (
        <>
          <Text style={styles.header}>Add Notes About Flowchart</Text>
          {renderMoveListHeader}
          <FlatList
            style={styles.flatList}
            data={selectedMoves}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={styles.column}>{item.move}</Text>
                <Text style={styles.column}>{item.hitLevel}</Text>
                <Text style={styles.column}>{item.damage}</Text>
                <Text style={styles.column}>{item.startupFrame}</Text>
                <Text style={styles.column}>{item.blockFrame}</Text>
                <Text style={styles.column}>{item.hitFrame}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.flatList}>
            <TextInput
              style={styles.input}
              placeholder="Enter notes"
              value={notes}
              onChangeText={setNotes}
            />
            <View style={styles.stepperButtons}>
              <TouchableOpacity
                onPress={() => setStep(1)}
                style={styles.previousButton}
              >
                <Text style={styles.previousButtonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addFollowUp} style={styles.addButton}>
                <Text style={styles.addButtonText}>
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
