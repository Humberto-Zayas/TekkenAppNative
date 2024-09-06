export const calculateAverageRating = (card) => {
  const totalRating = card.ratings.reduce((sum, rating) => sum + rating.rating, 0);
  return card.ratings.length > 0 ? totalRating / card.ratings.length : 0;
};

export const getBackgroundColor = (averageRating) => {
  if (averageRating >= 4.5) {
    return '#228B22'; // Forest Green
  } else if (averageRating >= 3) {
    return '#a68d00'; // Gold
  } else {
    return '#D32F2F'; // Firebrick Red
  }
};
