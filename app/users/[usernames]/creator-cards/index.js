import React from 'react';
import { Text } from 'react-native';
import CreatorCardListComponent from '../../../../components/CreatorCardListComponent';
import { useLocalSearchParams } from 'expo-router';

const CreatorCardsPage = () => {
  const { username } = useLocalSearchParams();

  if (!username) {
    return <Text>Invalid username. Please check the URL.</Text>;
  }

  return (
    <CreatorCardListComponent creatorUsername={username} />
  );
};

export default CreatorCardsPage;
