import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import HeroComponent from './HeroComponent'; // Adjust the import path accordingly

const CardComponent = ({ route }) => {
  const { item } = route.params;

  // Sample data for tables
  const heatEngagersData = [
    { id: '1', value: 'X', description: 'Engages opponent with powerful attacks' },
    { id: '2', value: 'X', description: 'Engages opponent with powerful attacks' },
    // Add more rows as needed
  ];

  const punishersData = [
    {
      id: '1',
      value: '1,1,2',
      description: '10F standing punish',
    },
    // Add more rows as needed
  ];

  const moveFlowchartData = [
    { id: '1', value: 'Forward + X', description: 'Initiates a forward attack' },
    // Add more rows as needed
  ];

  const renderTableItem = ({ item }) => (
    <View style={styles.tableRow}>
      <View style={styles.column}>
        <Text style={styles.value}>{item.value}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.value}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeroComponent name={item.name} thumbnail={item.thumbnail} rating={item.rating} />

      {/* Heat Engagers Table */}
      <View style={styles.subContainer}>
        <Text style={styles.tableTitle}>Heat Engagers</Text>
        <FlatList
          data={heatEngagersData}
          keyExtractor={(item) => item.id}
          renderItem={renderTableItem}
        />
      </View>

      {/* Punishers Table */}
      <View style={styles.subContainer}>
        <Text style={styles.tableTitle}>Punishers</Text>
        <FlatList
          data={punishersData}
          keyExtractor={(item) => item.id}
          renderItem={renderTableItem}
        />
      </View>
      
      {/* Move/Flowchart Table */}
      <View style={styles.subContainer}>
        <Text style={styles.tableTitle}>Move/Flowchart</Text>
        <FlatList
          data={moveFlowchartData}
          keyExtractor={(item) => item.id}
          renderItem={renderTableItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  subContainer: {
    marginTop: 10,
    borderRadius: 10, // Add border radius for rounded corners
    borderWidth: 1, // Add border width
    borderColor: 'lightgray', // Set border color
    overflow: 'hidden', // Hide content outside border
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Set the desired text color
    backgroundColor: 'blue', // Set the desired background color
    padding: 10, // Adjust padding as needed
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  column: {
    flex: 1,
    padding: 8, // Add padding to space out content
  },
  value: {
    fontSize: 16,
  },
});

export default CardComponent;
