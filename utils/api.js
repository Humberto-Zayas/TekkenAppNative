// utils/api.js
import { REACT_APP_API_BASE_URL } from '@env';

export const fetchCardById = async (id, userId) => {
  try {
    const response = await fetch(`${REACT_APP_API_BASE_URL}/cards/id/${id}?userId=${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch card');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching card:', error);
    throw error;
  }
};

export const bookmarkCardById = async (userId, cardId, token) => {
  try {
    const response = await fetch(`${REACT_APP_API_BASE_URL}/users/${userId}/bookmark/${cardId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      if (responseData.error === 'Card already bookmarked') {
        Alert.alert('Already Bookmarked', 'This card is already bookmarked!');
      } else {
        throw new Error('Failed to bookmark card');
      }
    }
    return true;
  } catch (error) {
    console.error('Error bookmarking card:', error);
    throw error;
  }
};

export const unbookmarkCardById = async (userId, cardId, token) => {
  try {
    const response = await fetch(`${REACT_APP_API_BASE_URL}/users/${userId}/unbookmark/${cardId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const responseData = await response.json();
      if (responseData.error === 'Card not bookmarked') {
        console.log('Card is not bookmarked');
      } else {
        throw new Error('Failed to unbookmark card');
      }
    }
    return true;
  } catch (error) {
    console.error('Error unbookmarking card:', error);
    throw error;
  }
};

export const rateCardById = async (cardId, userId, rating, username, token) => {
  try {
    const response = await fetch(`${REACT_APP_API_BASE_URL}/cards/rate/${cardId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId, rating, username }),
    });

    if (!response.ok) {
      throw new Error('Failed to rate card');
    }
    return true;
  } catch (error) {
    console.error('Error submitting rating:', error);
    throw error;
  }
};
