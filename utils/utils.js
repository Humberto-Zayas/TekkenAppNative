export const calculateAverageRating = (card) => {
  const totalRating = card.ratings.reduce((sum, rating) => sum + rating.rating, 0);
  return card.ratings.length > 0 ? totalRating / card.ratings.length : 0;
};

export const getBackgroundColor = (averageRating) => {
  if (averageRating >= 4.5) {
    return 'green';
  } else if (averageRating >= 3) {
    return 'yellow';
  } else {
    return 'red';
  }
};