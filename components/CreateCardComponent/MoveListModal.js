import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const MoveListModal = ({ modalVisible, setModalVisible, onMoveSelect, frameData }) => {
  const [selectedMove, setSelectedMove] = useState(null);
  const [context, setContext] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State to keep track of the search query

  useEffect(() => {
    if (!modalVisible) {
      setSelectedMove(null);
      setContext('');
      setSearchQuery(''); // Reset search query when modal is closed
    }
  }, [modalVisible]);

  const handleMoveSelect = (move) => {
    setSelectedMove(move);
  };

  const handleAddMove = () => {
    if (selectedMove) {
      const moveWithDetail = { 
        ...selectedMove, 
        notes: context, 
        damage: Array.isArray(selectedMove.damage) ? selectedMove.damage : [selectedMove.damage] 
      };
      onMoveSelect(moveWithDetail);
      setContext('');
      setModalVisible(false);
    }
  };

  const handleBack = () => {
    setSelectedMove(null); // Clear the selected move
  };

  const renderMoveListHeader = () => (
    <View style={styles.tableHeader}>
      <View style={styles.column}>
        <Text style={styles.headerText}>Move</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.headerText}>Lvl</Text>
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
    </View>
  );

  // Filter the frameData based on the search query
  const filteredFrameData = frameData.filter(item => 
    typeof item.move === 'string' && item.move.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        {selectedMove ? (
          <>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <FontAwesome name="arrow-left" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.header}>Add Context for {selectedMove.move}</Text>
            {renderMoveListHeader()}
            <View style={styles.flatList}>
              <View style={styles.tableRow}>
                <Text style={styles.column}>{selectedMove.move}</Text>
                <Text style={styles.column}>{selectedMove.hitLevel}</Text>
                <Text style={styles.column}>{selectedMove.damage}</Text>
                <Text style={styles.column}>{selectedMove.startupFrame}</Text>
                <Text style={styles.column}>{selectedMove.blockFrame}</Text>
                <Text style={styles.column}>{selectedMove.hitFrame}</Text>
              </View>
              <View style={styles.flatList}>
                <TextInput
                  style={styles.input}
                  placeholder={`Add Context for ${selectedMove.move}`}
                  value={context}
                  numberOfLines={4}
                  onChangeText={(text) => setContext(text)}
                  multiline
                />
              </View>
              <TouchableOpacity style={styles.addButton} onPress={handleAddMove}>
                <Text>Add Move</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <TextInput
              style={styles.searchInput} // Add some styling for this input
              placeholder="Search moves..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            {renderMoveListHeader()}
            <FlatList
              style={styles.flatList}
              data={filteredFrameData} // Use the filtered data
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleMoveSelect(item)}>
                  <View style={styles.tableRow}>
                    <Text style={styles.column}>{item.move}</Text>
                    <Text style={styles.column}>{item.hitLevel}</Text>
                    <Text style={styles.column}>{item.damage}</Text>
                    <Text style={styles.column}>{item.startupFrame}</Text>
                    <Text style={styles.column}>{item.blockFrame}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        )}
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
          <FontAwesome name="times" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MoveListModal;
