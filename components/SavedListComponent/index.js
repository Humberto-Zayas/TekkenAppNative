// SavedListComponent.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../utils/AuthContext';
import { savedCardData } from '../../data/savedCardData.js';
import {styles} from './styles'; 

const SavedListComponent = ({ navigation }) => {
  const { user } = useAuth();

  const handleSavedCardPress = (item) => {
    navigation.navigate('SavedCardComponent', { item });
  };

  const renderSavedCardItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => handleSavedCardPress(item)}>
      <View style={{ marginRight: 10 }}>
        <Image source={item.thumbnail} style={styles.thumbnailImage} />
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }} numberOfLines={1}>
          {item.name}
        </Text>
        <Text>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderContent = () => {
    if (user) {
      return (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={savedCardData}
          keyExtractor={(item) => item.id}
          renderItem={renderSavedCardItem}
          showsVerticalScrollIndicator={false}
        />
      );
    } else {
      return (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            To view saved cards, you must login or sign up.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login', { isSignUp: false })}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login', { isSignUp: true })}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return <View>{renderContent()}</View>;
};


export default SavedListComponent;
