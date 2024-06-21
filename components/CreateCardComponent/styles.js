// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  moveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  textArea: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  modalContainer: {
    // flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: 100,
    padding: 20
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20
  },
  plusButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 10, // Changed from 28 to 10
    alignItems: 'center',
    marginBottom: 20,
    width: 150, // Increased width for better touch area
    alignSelf: 'center',
    justifyContent: 'center', // Added to center text vertically
  },
  link: {
    backgroundColor: 'gray',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row', // Add this to position text and icon in a row
    alignItems: 'center', // Center align the items
  },
  linkText: {
    marginLeft: 8, // Space between the icon and text
    color: 'white', // Text color
    fontWeight: 'bold',
  },
  flatList: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    overflow: 'hidden',
    marginBottom: 16,
    width: '100%',
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
    width: '23%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    width: '55%',
    padding: 8,
    alignItems: 'flex-start',
  },
  deleteIcon: {
    width: '9%',
    paddingRight: 5,
    justifyContent: 'center'
  },
  moveDetails: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  column: {
    flex: 1,
    padding: 10,
  },
  propertyName: {
    fontWeight: 'bold',
  },
  propertyValue: {
    marginLeft: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedTag: {
    backgroundColor: 'lightblue',
  },
  tagText: {
    marginRight: 5,
  },
});
