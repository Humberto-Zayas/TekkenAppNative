import React from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

const MoveDetailsModal = ({ detailMove, setDetailMove }) => {
  const renderDetailRow = (label, value) => (
    <View style={styles.tableRow}>
      <Text style={{ width: '30%', padding: 8, alignItems: 'start', justifyContent: 'center' }}>{label}</Text>
      <Text style={styles.column}>{value}</Text>
    </View>
  );

  return (
    <Modal
      visible={detailMove !== null}
      animationType="fade"
      onRequestClose={() => setDetailMove(null)}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.header}>Move Details</Text>
        {detailMove && (
          <ScrollView style={styles.moveDetails}>
            {renderDetailRow('Move', detailMove.move)}
            {renderDetailRow('Description', detailMove.description)}
            {renderDetailRow('Hit Level', detailMove.hitLevel)}
            {renderDetailRow('Damage', Array.isArray(detailMove.damage) ? detailMove.damage.join(', ') : detailMove.damage)}
            {renderDetailRow('Startup Frame', detailMove.startupFrame)}
            {renderDetailRow('Block Frame', detailMove.blockFrame)}
            {renderDetailRow('Hit Frame', detailMove.hitFrame)}
            {renderDetailRow('User notes', detailMove.notes)}
          </ScrollView>
        )}
        <TouchableOpacity onPress={() => setDetailMove(null)} style={styles.closeButton}>
          <FontAwesome name="times" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MoveDetailsModal;
