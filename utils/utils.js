export const calculateAverageRating = (card) => {
  const totalRating = card.ratings.reduce((sum, rating) => sum + rating.rating, 0);
  return card.ratings.length > 0 ? totalRating / card.ratings.length : 0;
};
export const getBackgroundColor = (averageRating) => {
  if (averageRating === 0) {
    return '#7a7a7a'; // Light Gray for a rating of 0
  } else if (averageRating === 1) {
    return '#D32F2F'; // Firebrick Red for a rating of 1
  } else if (averageRating >= 4.5) {
    return '#228B22'; // Forest Green
  } else if (averageRating >= 3) {
    return '#FFD700'; // Gold
  } else {
    return '#D32F2F'; // Firebrick Red for ratings < 3
  }
};
