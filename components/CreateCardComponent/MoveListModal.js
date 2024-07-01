import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const MoveListModal = ({ modalVisible, setModalVisible, addPunisher, filterFrameData }) => {
  const [selectedMove, setSelectedMove] = useState(null);
  const [context, setContext] = useState('');

  useEffect(() => {
    if (!modalVisible) {
      setSelectedMove(null);
      setContext('');
    }
  }, [modalVisible]);

  const handleMoveSelect = (move) => {
    setSelectedMove(move);
  };

  const handleAddMove = () => {
    if (selectedMove) {
      const moveWithDetail = { ...selectedMove, notes: context, damage: Array.isArray(selectedMove.damage) ? selectedMove.damage : [selectedMove.damage] };
      addPunisher(moveWithDetail);
      setContext('');
      setModalVisible(false);
    }
  };

  const renderMoveListHeader = () => (
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

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        {selectedMove ? (
          <Text style={styles.header}>Add Context for {selectedMove.move}</Text>
        ) : (
          <Text style={styles.header}>Choose Move</Text>
        )}
        {selectedMove ? (
          <>
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
            {renderMoveListHeader()}
            <FlatList
              style={styles.flatList}
              data={filterFrameData()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleMoveSelect(item)}>
                  <View style={styles.tableRow}>
                    <Text style={styles.column}>{item.move}</Text>
                    <Text style={styles.column}>{item.hitLevel}</Text>
                    <Text style={styles.column}>{item.damage}</Text>
                    <Text style={styles.column}>{item.startupFrame}</Text>
                    <Text style={styles.column}>{item.blockFrame}</Text>
                    <Text style={styles.column}>{item.hitFrame}</Text>
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
