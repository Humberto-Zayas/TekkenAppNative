import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CardComponent = ({ route }) => {
  const { title, item } = route.params;
  const [headerRendered, setHeaderRendered] = useState(false);

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
        {!headerRendered && (
          <Text style={styles.label}>Input</Text>
        )}
        <Text style={styles.value}>{item.value}</Text>
      </View>
      <View style={styles.column}>
        {!headerRendered && (
          <Text style={styles.label}>Description</Text>
        )}
        <Text style={styles.value}>{item.description}</Text>
      </View>
    </View>
  );

  // Set the header as rendered after the first render
  if (!headerRendered) {
    setHeaderRendered(true);
  }

  return (
    <View>
      <Text>Name: {item.name}</Text>
      <Text>Title: {title}</Text>
      <Text>Thumbnail: {item.thumbnail}</Text>
      <Text>Rating: {item.rating}</Text>
      {/* Heat Engagers Table */}
      <Text style={styles.tableTitle}>Heat Engagers</Text>
      <FlatList
        data={heatEngagersData}
        keyExtractor={(item) => item.id}
        renderItem={renderTableItem}
      />
      {/* Punishers Table */}
      <Text style={styles.tableTitle}>Punishers</Text>
      <FlatList
        data={punishersData}
        keyExtractor={(item) => item.id}
        renderItem={renderTableItem}
      />
      {/* Move/Flowchart Table */}
      <Text style={styles.tableTitle}>Move/Flowchart</Text>
      <FlatList
        data={moveFlowchartData}
        keyExtractor={(item) => item.id}
        renderItem={renderTableItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
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
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default CardComponent;
