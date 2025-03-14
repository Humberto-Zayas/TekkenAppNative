import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Clipboard from 'expo-clipboard';

const HeroComponent = ({
  cardName,
  thumbnail,
  onCardNameChange,
  cardDescription,
  onCardDescriptionChange,
  youtubeLink,
  onYouTubeLinkChange,
  twitchLink,
  onTwitchLinkChange,

}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const animation = useRef(new Animated.Value(1)).current;

  const toggleExpanded = () => {
    setIsExpanded((prevState) => !prevState);
    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  

  const handlePaste = async (setLink) => {
    const clipboardText = await Clipboard.getStringAsync();
    setLink(clipboardText);
  };

  const handleClear = (setLink) => {
    setLink('');
  };

  const containerHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 280], // Adjust these values as per your design
  });  

  return (
    <TouchableWithoutFeedback
      onPress={(e) => {
        const target = e.target;
        if (target.tagName !== 'TEXTAREA' && target.tagName !== 'INPUT') {
          Keyboard.dismiss();
        }
      }}
    >
      <Animated.View style={[styles.container, { height: containerHeight }]}>
        <View style={styles.heroContainer}>
          <TouchableOpacity onPress={toggleExpanded} style={styles.thumbnailContainer}>
            <Image source={thumbnail} style={styles.thumbnail} />
            {isExpanded ? (
              <TouchableOpacity onPress={toggleExpanded} style={styles.closeIcon}>
                <FontAwesome name="times-circle" size={32} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleExpanded} style={styles.closeIcon}>
                <FontAwesome name="edit" size={32} color="black" />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
          <View style={styles.heroInfo}>
            <TextInput
              style={styles.heroNameInput}
              placeholder="Card Name and Details"
              value={cardName}
              onChangeText={(text) => onCardNameChange(text)}
            />
          </View>
        </View>
        {isExpanded && (
          <View style={styles.additionalInputs}>
            <View style={styles.inputContainer}>
              <FontAwesome name="pencil" size={20} color="#000" style={styles.icon} />
              <TextInput
                style={styles.descriptionInput}
                placeholder="Enter Your Strategy"
                value={cardDescription}
                onChangeText={onCardDescriptionChange}
                multiline={true}
                numberOfLines={4}
              />
            </View>

            <View style={styles.inputContainer}>
              <FontAwesome name="youtube-play" size={20} color="#000" style={styles.icon} />
              <TextInput
                style={[styles.input, styles.cardLinkInput]}
                placeholder="YouTube Link"
                value={youtubeLink}
                onChangeText={onYouTubeLinkChange}
              />
              <TouchableOpacity onPress={() => handlePaste(onYouTubeLinkChange)} style={styles.actionIcon}>
                <FontAwesome name="clipboard" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleClear(onYouTubeLinkChange)} style={styles.actionIcon}>
                <FontAwesome name="times" size={20} color="red" />
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <FontAwesome name="twitch" size={20} color="#000" style={styles.icon} />
              <TextInput
                style={[styles.input, styles.cardLinkInput]}
                placeholder="Twitch Link"
                value={twitchLink}
                onChangeText={onTwitchLinkChange}
              />
              <TouchableOpacity onPress={() => handlePaste(onTwitchLinkChange)} style={styles.actionIcon}>
                <FontAwesome name="clipboard" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleClear(onTwitchLinkChange)} style={styles.actionIcon}>
                <FontAwesome name="times" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { overflow: 'hidden' },
  heroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  thumbnailContainer: { position: 'relative' },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  closeIcon: {
    opacity: 0.5,
    position: 'absolute',
    top: -3,
    right: 2,
    borderRadius: 12,
  },
  heroInfo: { flex: 1 },
  heroNameInput: { fontSize: 24, fontWeight: 'bold' },
  additionalInputs: { paddingBottom: 0 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: { marginRight: 16, marginTop: 8 },
  descriptionInput: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 96,
    maxHeight: 96,
    flex: 1,
  },
  cardLinkInput: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flex: 1,
  },
  input: {
    height: 40,
    borderRadius: 8,
    padding: 8,
  },
  actionIcon: {
    marginLeft: 8,
    padding: 4,
  },
});

export default HeroComponent;
