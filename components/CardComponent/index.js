import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import HeroComponent from './HeroComponent'; // Adjust the import path accordingly

const CardComponent = ({ route }) => {
  const { item } = route.params;

  // Sample data for tables
  const heatEngagersData = [
    { id: '1', value: 'df1+2', description: 'Engages opponent with powerful attacks' },
    { id: '2', value: 'ff+3', description: 'Engages opponent with powerful attacks' },
    // Add more rows as needed
  ];

  const punishersData = [
    { id: '1', value: '1,1,2', description: '10F standing punish' },
    { id: '2', value: '2,2,2,2', description: '12F standing punish' },
    // Add more rows as needed
  ];

  const moveFlowchartData = [
    { id: '1', value: 'f+2,1', description: 'Initiates a forward attack' },
    { id: '2', value: 'db1+2', description: 'Initiates a forward attack' },
    // Add more rows as needed
  ];

  const renderTableItem = ({ item }) => (
    <View style={styles.tableRow}>
      <View style={styles.columnLeft}>
        <Text style={styles.value} numberOfLines={2}>
          {item.value}
        </Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.value} numberOfLines={2}>
          {item.description}
        </Text>
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    overflow: 'hidden',
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'blue',
    padding: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  columnLeft: {
    // flex: 0.8,
    width: '30%',
    padding: 8,
    alignItems: 'center', // Center the content vertically
    justifyContent: 'center', // Center the content horizontally
  },
  column: {
    // flex: 2,
    width: '80%',
    padding: 8,
    alignItems: 'start', // Center the content vertically
  },
  value: {
    fontSize: 16,
  },
});


export default CardComponent;
