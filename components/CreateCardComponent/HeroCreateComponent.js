import React, { useState, useRef } from 'react';
import { View, TextInput, Image, StyleSheet, Animated, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeroComponent = ({ cardName, thumbnail, onCardNameChange, cardDescription, onCardDescriptionChange, youtubeLink, onYouTubeLinkChange, twitchLink, onTwitchLinkChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Track focus state
  const animation = useRef(new Animated.Value(0)).current;
  const inputRefs = useRef([]);

  const toggleExpanded = () => {
    setIsExpanded(prevState => !prevState);
    setIsFocused(prevState => !prevState);
    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleFocus = () => {
    setIsExpanded(true);
    setIsFocused(true); // Update focus state
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (!inputRefs.current.some(ref => ref.isFocused())) {
        if (!cardName) {
          setIsExpanded(false);
          setIsFocused(false); // Update focus state
          Animated.timing(animation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      }
    }, 100);
  };

  const handleDescriptionChange = (text) => {
    onCardDescriptionChange(text);
  };

  const containerHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 280], // Adjust the expanded height as needed
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={[styles.container, { height: containerHeight }]}>
        <View style={styles.heroContainer}>
          <TouchableOpacity onPress={toggleExpanded} style={styles.thumbnailContainer}>
            <Image source={thumbnail} style={styles.thumbnail} />
            {isExpanded && (
              <TouchableOpacity onPress={toggleExpanded} style={styles.closeIcon}>
                <FontAwesome name="times-circle" size={32} color="black" />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
          <View style={styles.heroInfo}>
            <TextInput
              style={styles.heroNameInput}
              placeholder="Card Name and Details"
              value={cardName}
              onChangeText={(text) => onCardNameChange(text)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              ref={(ref) => inputRefs.current[0] = ref}
            />
          </View>
        </View>
        {isExpanded && (
          <View style={styles.additionalInputs}>
            <View style={styles.inputContainer}>
              <FontAwesome name="pencil" size={20} color="#000" style={styles.icon} />
              <TextInput
                style={[styles.descriptionInput, isFocused ? styles.descriptionInputFocused : null]} // Apply focused style conditionally
                placeholder="Enter Your Strategy"
                value={cardDescription}
                onChangeText={handleDescriptionChange}
                multiline={true}
                numberOfLines={4} // Limit to 4 visible lines
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={(ref) => inputRefs.current[1] = ref}
              />
            </View>
            <View style={styles.inputContainer}>
              <FontAwesome name="youtube-play" size={20} color="#000" style={styles.icon} />
              <TextInput
                style={[styles.input, styles.cardLinkInput]}
                placeholder="YouTube Link"
                value={youtubeLink}
                onChangeText={onYouTubeLinkChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={(ref) => inputRefs.current[2] = ref}
                numberOfLines={1}
              />
            </View>
            <View style={styles.inputContainer}>
              <FontAwesome name="twitch" size={20} color="#000" style={styles.icon} />
              <TextInput
                style={[styles.input, styles.cardLinkInput]}
                placeholder="Twitch Link"
                value={twitchLink}
                onChangeText={onTwitchLinkChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={(ref) => inputRefs.current[3] = ref}
                numberOfLines={1}
              />
            </View>
          </View>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  heroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  thumbnailContainer: {
    position: 'relative',
  },
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
  heroInfo: {
    flex: 1,
  },
  heroNameInput: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  additionalInputs: {
    paddingBottom: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'start',
    marginBottom: 16,
  },
  icon: {
    marginRight: 16,
    marginTop: 8,
  },
  descriptionInput: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 96,
    maxHeight: 96,
    flex: 1,
  },
  descriptionInputFocused: {
    fontSize: 16, // Reduce font size when focused
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
});

export default HeroComponent;
