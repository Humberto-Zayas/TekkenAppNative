import React from 'react';
import MyCardListComponent from '../../../../components/MyCardListComponent';
import { useLocalSearchParams, useRouter } from 'expo-router';

const UserCardsPage = () => {
  const router = useRouter();
  const { username } = useLocalSearchParams(); // Get the username from the route

  return (
    <MyCardListComponent
      navigation={router} // Pass router for navigation
      username={username} // Pass the username to filter user cards
    />
  );
};

export default UserCardsPage;
