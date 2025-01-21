import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { themeStyles } from '../../styles/styles';

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
    setContext('');
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
      <View style={[themeStyles.container, { marginTop: 48, position: 'relative' }]}>
        {selectedMove ? (
          <>
            <Text style={{ fontSize: 16, marginBottom: 17, marginTop: 17 }}>Add Context for {selectedMove.move}</Text>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
                  <FontAwesome name="pencil" size={20} color="black" />
                  <TextInput
                    style={styles.searchInput}
                    placeholder={`Add Context for ${selectedMove.move}`}
                    value={context}
                    onChangeText={(text) => setContext(text)}
                    
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: -8 }}>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                  <Text style={{ color: 'white' }}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={handleAddMove}>
                  <Text style={{ color: 'white' }}>Add Move</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="search" size={20} color="black" />
              <TextInput
                style={styles.searchInput} // Add some styling for this input
                placeholder="Search moves..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />
            </View>
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
