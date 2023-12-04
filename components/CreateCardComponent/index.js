import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateCardComponent = ({ onSave }) => {
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
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
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
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Card</Text>
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
      {/* Repeat TextInput for other fields as needed */}
      <Button title="Save Card" onPress={handleSave} />
    </View>
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
});

export default CreateCardComponent;
