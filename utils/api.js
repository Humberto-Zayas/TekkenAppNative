// utils/api.js
import { REACT_APP_API_BASE_URL } from '@env'
import { calculateAverageRating } from './utils';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchCardsByCharacter = async (characterName, page = 1, selectedTags = [], youtubeQuery = false, twitchQuery = false, pageSize = 10) => {
  try {
    let queryParams = `${API_BASE_URL}/cards/character/${characterName}?page=${page}`;

    // Append selected tags to query parameters
    if (selectedTags.length > 0) {
      const tagNames = selectedTags.map(tag => tag.name);
      queryParams += `&tags=${tagNames.join(',')}`;
    }

    // Append YouTube query parameter if true
    if (youtubeQuery) {
      queryParams += '&YouTube=true';
    }

    // Append Twitch query parameter if true
    if (twitchQuery) {
      queryParams += '&Twitch=true';
    }

    const response = await fetch(queryParams);
    if (!response.ok) {
      throw new Error('Failed to fetch cards');
    }

    const totalCount = response.headers.get('X-Total-Count');
    const totalPages = Math.ceil(totalCount / pageSize);
    const data = await response.json();

    const cardsWithAverageRating = data.map((card) => ({
      ...card,
      averageRating: calculateAverageRating(card),
    }));

    return { cards: cardsWithAverageRating, totalCount, totalPages };
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
};

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

export const createCard = async (cardData, token) => {
  try {
    const response = await fetch(`${REACT_APP_API_BASE_URL}/cards/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cardData),
    });

    if (!response.ok) {
      throw new Error('Failed to save the card.');
    }

    return response.json();
  } catch (error) {
    console.error('Error saving the card:', error);
    throw error;
  }
};

export const updateCard = async (cardData, token) => {
  const cardId = cardData._id
  console.log('cardData: ', cardData)
  try {
    const response = await fetch(`${REACT_APP_API_BASE_URL}/cards/edit/${cardId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(cardData),
    });

    if (!response.ok) {
      throw new Error('Failed to update the card.');
    }

    return response.json();
  } catch (error) {
    console.error('Error updating the card:', error);
    throw error;
  }
};
