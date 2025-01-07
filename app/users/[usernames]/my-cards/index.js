import React from 'react';
import { Text } from 'react-native'; // Import Text from react-native
import MyCardListComponent from '../../../../components/MyCardListComponent';
import { useAuth } from '../../../../utils/AuthContext';

const MyCardsPage = () => {
  const { user } = useAuth();

  if (!user) {
    return <Text>You need to log in to view your cards.</Text>;
  }

  return (
    <MyCardListComponent username={user.username} />
  );
};

export default MyCardsPage;
