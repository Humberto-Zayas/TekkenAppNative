import React from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { themeStyles } from '../../styles/styles';

const MoveDetailsModal = ({ detailMove, setDetailMove }) => {
  const renderDetailRow = (label, value) => (
    <View style={styles.tableRow}>
      <Text style={{ width: '30%', padding: 8, fontSize: 18, alignItems: 'start', justifyContent: 'center' }}>{label}</Text>
      <Text style={styles.column}>{value}</Text>
    </View>
  );

  return (
    <Modal
      visible={detailMove !== null}
      animationType="fade"
      onRequestClose={() => setDetailMove(null)}
    >
      <View style={[themeStyles.container, { marginTop: 48, position: 'relative' }]}>
        <Text style={{ fontSize: 16, marginBottom: 17, marginTop: 17 }}>Move Details</Text>
        {detailMove && (
          <ScrollView style={styles.moveDetails}>
            {renderDetailRow('Move', detailMove.move)}
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
