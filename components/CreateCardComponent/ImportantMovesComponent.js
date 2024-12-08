import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import MoveDetailsModal from './MoveDetailsModal';
import MoveListModal from './MoveListModal';
import { MoveTableHeader, MoveTableRow } from './MoveTable';

const ImportantMovesComponent = ({ onClose, setImportantMoveData, importantMoveData, frameData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [detailMove, setDetailMove] = useState(null);

  const addMove = (move) => {
    setImportantMoveData([...importantMoveData, move]);
    setModalVisible(false);
  };

  const deleteMove = (index) => {
    const updatedMoves = [...importantMoveData];
    updatedMoves.splice(index, 1);
    setImportantMoveData(updatedMoves);
  };

  const handleMovePress = (move) => {
    setDetailMove(move);
  };

  const renderRightActions = (progress, dragX, index) => {
    const actionWidth = 6; // Width of the delete button

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
        <TouchableOpacity style={{ marginRight: 8 }} onPress={() => deleteMove(index)}>
          <FontAwesome name="trash" size={28} color="red" />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}
    >
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <FontAwesome name="times" size={20} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Important Moves</Text>
      <MoveTableHeader firstHeader="Move" secondHeader="Start Up" />
      {importantMoveData.length > 0 ? (
        importantMoveData.map((item, index) => (
          <Swipeable
            key={index.toString()}
            renderRightActions={(progress, dragX) =>
              renderRightActions(progress, dragX, index)
            }
            rightThreshold={40} // Makes actions more responsive to swipe
          >
            <MoveTableRow
              item={item}
              index={index}
              onMovePress={handleMovePress}
            />
          </Swipeable>
        ))
      ) : (
        <Text style={styles.emptyList}>No moves added yet</Text>
      )}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.plusButton}
      >
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
      <MoveListModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onMoveSelect={addMove}
        frameData={frameData}
      />
      <MoveDetailsModal detailMove={detailMove} setDetailMove={setDetailMove} />
    </ScrollView>
  );
};

export default ImportantMovesComponent;
