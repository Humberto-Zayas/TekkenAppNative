import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { themeStyles } from '../../styles/styles';
import MoveDetailsModal from './MoveDetailsModal';
import MoveListModal from './MoveListModal';
import { MoveTableHeader, MoveTableRow } from './MoveTable';

const PunisherComponent = ({ onClose, setPunisherData, punisherData, frameData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailMove, setDetailMove] = useState(null);

  const addPunisher = (move) => {
    const updatedPunishers = [...punisherData, move];
    setPunisherData(updatedPunishers);
    setModalVisible(false);
  };

  const deletePunisher = (index) => {
    const updatedPunishers = [...punisherData];
    updatedPunishers.splice(index, 1);
    setPunisherData(updatedPunishers);
  };

  const handleMovePress = (move) => {
    setDetailMove(move);
  };

  const renderRightActions = (progress, dragX, index) => {
    const actionWidth = 6;

    const trans = dragX.interpolate({
      inputRange: [-actionWidth * 3, 0], // Adjust input range based on width of buttons
      outputRange: [0, actionWidth * 3], // Total width of all buttons combined
    });

    return (
      <Animated.View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          transform: [{ translateX: trans }],
        }}
      >
        <TouchableOpacity style={{ marginRight: 8 }} onPress={() => deletePunisher(index)}>
          <FontAwesome name="trash" size={28} color="red" />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View
      style={[themeStyles.container, { marginTop: 48, position: 'relative' }]}
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 16, marginBottom: 17, marginTop: 17 }}>Punishers</Text>
      <MoveTableHeader firstHeader="Move" secondHeader="Start Up" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {punisherData.length > 0 ? (
          punisherData.map((item, index) => (
            <MoveTableRow
              key={index.toString()}
              item={item}
              index={index}
              onMovePress={handleMovePress}
              onDelete={() => deletePunisher(index)} // Pass delete function
            />
          ))
        ) : (
          <Text style={styles.emptyText}>No punishers added yet</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.plusButton}
      >
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <MoveListModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onMoveSelect={addPunisher}
        frameData={frameData}
      />
      <MoveDetailsModal detailMove={detailMove} setDetailMove={setDetailMove} />
    </View>
  );
};

export default PunisherComponent;
