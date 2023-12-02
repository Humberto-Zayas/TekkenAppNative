import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { cardData, savedCardData } from '../../data/cardData';
import { FontAwesome } from '@expo/vector-icons';
import SavedListComponent from '../SavedListComponent';

const Tab = createBottomTabNavigator();

const CardListComponent = ({ route, navigation }) => {
  const { params } = route || {};
  const { character: routeCharacter } = params || {};
  const { name, image } = routeCharacter || {};

  const handleCardPress = (item) => {
    navigation.navigate('CardComponent', { item });
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => handleCardPress(item)}>
      <View style={{ marginRight: 10 }}>
        <Image source={item.thumbnail} style={styles.thumbnailImage} />
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }} numberOfLines={1}>{item.name}</Text>
        <Text>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image source={image} style={styles.heroImage} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>{name}</Text>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'All') {
              iconName = focused ? 'list' : 'list'; // Use the same icon for both focused and unfocused states
            } else if (route.name === 'Saved') {
              iconName = focused ? 'bookmark' : 'bookmark'; // Use the same icon for both focused and unfocused states
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="All" component={() => (
          <FlatList
            contentContainerStyle={styles.flatList}
            data={cardData}
            keyExtractor={(item) => item.id}
            renderItem={renderCardItem}
            showsVerticalScrollIndicator={false}
          />
        )} />
        <Tab.Screen name="Saved" component={SavedListComponent} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 20,
  },
  flatList: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    width: '100%', // Full width
  },
  heroContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  heroImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  thumbnailImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default CardListComponent;
