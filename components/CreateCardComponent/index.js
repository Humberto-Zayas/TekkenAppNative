import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import HeroComponent from '../CardComponent/HeroComponent';
import { FontAwesome } from '@expo/vector-icons';

const CreateCardComponent = ({ route, navigation }) => {
  const { characterName, characterImage } = route.params;
  const [formData, setFormData] = useState({
    move: '',
    description: '',
    hitLevel: '',
    damage: '',
    startUpFrame: '',
    blockFrame: '',
    hitFrame: '',
    counterHitFrame: '',
    notes: '',
    youtube: '',
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Perform save action, you can save to a local store or API
    // For now, let's just log the data
    console.log('Saving Card:', formData);

    // Optionally, you can navigate back to the previous screen after saving
    // navigation.goBack();

    // Optionally, you can reset the form after saving
    setFormData({
      move: '',
      description: '',
      hitLevel: '',
      damage: '',
      startUpFrame: '',
      blockFrame: '',
      hitFrame: '',
      counterHitFrame: '',
      notes: '',
      youtube: '',
    });

    // Close the modal
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <HeroComponent name={characterName} thumbnail={characterImage} />
      <Text style={styles.title}>Create a {characterName} Card</Text>

      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            {/* Your text inputs go here */}
            <TextInput
              style={styles.input}
              placeholder="Move"
              value={formData.move}
              onChangeText={(text) => handleChange('move', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={formData.description}
              onChangeText={(text) => handleChange('description', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Hit Level"
              value={formData.hitLevel}
              onChangeText={(text) => handleChange('hitLevel', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Damage"
              value={formData.damage}
              onChangeText={(text) => handleChange('damage', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Start-up Frame"
              value={formData.startUpFrame}
              onChangeText={(text) => handleChange('startUpFrame', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Block Frame"
              value={formData.blockFrame}
              onChangeText={(text) => handleChange('blockFrame', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Hit Frame"
              value={formData.hitFrame}
              onChangeText={(text) => handleChange('hitFrame', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Counter Hit Frame"
              value={formData.counterHitFrame}
              onChangeText={(text) => handleChange('counterHitFrame', text)}
            />
            <TextInput
              style={styles.textArea}
              placeholder="Notes"
              multiline
              numberOfLines={4}
              value={formData.notes}
              onChangeText={(text) => handleChange('notes', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="YouTube Link"
              value={formData.youtube}
              onChangeText={(text) => handleChange('youtube', text)}
            />

            <Button title="Save Card" onPress={handleSave} />
            <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ color: 'white' }}>Close</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  textArea: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    // paddingTop: 150,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  plusButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default CreateCardComponent;
