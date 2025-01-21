import { Alert, Platform } from 'react-native';
import { createCard, updateCard } from '../utils/api';

const showConfirmation = (message, callback) => {
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    Alert.alert(
      'Confirmation',
      message,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: callback },
      ],
      { cancelable: false }
    );
  } else {
    if (window.confirm(message)) {
      callback();
    }
  }
};

export const handleSaveCard = async ({
  isEdit,
  formData,
  token,
  initialCardData,
  setHasUnsavedChanges,
  router,
}) => {
  if (!formData.cardName || !formData.cardDescription) {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      Alert.alert('Error', 'Please enter a Card Name and Card Description.');
    } else {
      window.alert('Please enter a Card Name and Card Description.');
    }
    return;
  }

  try {
    if (isEdit) {
      await updateCard({ ...formData, _id: initialCardData._id }, token);
      await new Promise((resolve) => {
        if (Platform.OS === 'ios' || Platform.OS === 'android') {
          Alert.alert('Success', 'Card updated successfully!', [
            {
              text: 'OK',
              onPress: () => {
                setHasUnsavedChanges(false);
                resolve();
              },
            },
          ], { cancelable: false });
        } else {
          if (window.confirm('Card updated successfully! Click OK to proceed.')) {
            setHasUnsavedChanges(false);
            resolve();
          }
        }
      });
    } else {
      await createCard(formData, token);
      await new Promise((resolve) => {
        if (Platform.OS === 'ios' || Platform.OS === 'android') {
          Alert.alert('Success', 'Card created successfully!', [
            {
              text: 'OK',
              onPress: () => {
                setHasUnsavedChanges(false);
                resolve();
              },
            },
          ], { cancelable: false });
        } else {
          if (window.confirm('Card created successfully! Click OK to proceed.')) {
            setHasUnsavedChanges(false);
            resolve();
          }
        }
      });
    }

    router.back();
  } catch (error) {
    console.error('Error saving the card:', error);
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      Alert.alert('Error', 'Failed to save the card. Please try again.');
    } else {
      window.alert('Failed to save the card. Please try again.');
    }
  }
};

export const handleYouTubeLinkChange = (youtubeLink, setYoutubeLink, setHasUnsavedChanges) => {
  if (!youtubeLink) {
    setYoutubeLink('');
    setHasUnsavedChanges(false);
    return;
  }

  const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([\w-]{11})(?:\S+)?$/;
  const match = youtubeLink.match(youtubeRegex);

  if (match) {
    const videoId = match[1];
    const shortenedLink = `https://youtu.be/${videoId}`;
    setYoutubeLink(shortenedLink);
    setHasUnsavedChanges(true);
  } else {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      Alert.alert("Invalid URL", "Please copy and paste a valid YouTube link.");
    } else {
      window.alert("Please copy and paste a valid YouTube link.");
    }
  }
};

export const handleTwitchLinkChange = (twitchLink, setTwitchLink, setHasUnsavedChanges) => {
  if (!twitchLink) {
    setTwitchLink('');
    setHasUnsavedChanges(false);
    return;
  }

  const twitchUrlPattern = /^(https?:\/\/)?(www\.)?(twitch\.tv\/)([a-zA-Z0-9_]+(\/v\/\d+|\/videos\/\d+|\/clip\/[a-zA-Z0-9_-]+)?)$/;

  if (twitchUrlPattern.test(twitchLink)) {
    const normalizedLink = twitchLink.startsWith("http") ? twitchLink : `https://${twitchLink}`;
    setTwitchLink(normalizedLink);
    setHasUnsavedChanges(true);
  } else {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      Alert.alert("Invalid Twitch Link", "Please copy and paste a valid Twitch channel, VOD, or clip link.");
    } else {
      window.alert("Please copy and paste a valid Twitch channel, VOD, or clip link.");
    }
  }
};
