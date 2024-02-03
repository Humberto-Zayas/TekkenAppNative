import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, FlatList } from 'react-native';

const SortAndFilterModal = ({ visible, onClose, onFilterChange, cards }) => {
  const [selectedUsername, setSelectedUsername] = useState(null);

  const renderUsernameItem = ({ item }) => (
    <TouchableOpacity onPress={() => { setSelectedUsername(item); onClose(); onFilterChange(item); }}>
      <Text style={{ marginVertical: 5, color: item === selectedUsername ? 'blue' : 'black' }}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ alignSelf: 'center', marginTop: 100, backgroundColor: 'white', padding: 20, borderRadius: 10, height: '80%' }}>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Sort and Filter</Text>

        <View style={{ marginTop: 10 }}>
          <Text>Filter by Username:</Text>
          <FlatList
            data={['All Users', ...Array.from(new Set(cards.map(card => card.username)))]}
            renderItem={renderUsernameItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
          <Text style={{ color: 'blue' }}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SortAndFilterModal;
