import { StyleSheet } from 'react-native';

const commonContainer = {
  padding: 16,
};

const commonText = {
  fontSize: 16,
  fontWeight: 'bold',
};

const commonBorder = {
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 10,
};

export const styles = StyleSheet.create({
  container: {
    ...commonContainer,
    flex: 1,
  },
  rowContainer: {
    ...commonContainer,
    marginTop: 32,
  },
  title: {
    ...commonText,
    marginBottom: 10,
  },
  subtitle: {
    ...commonText,
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
    padding: 16,
    fontSize: 16
  },
  inputArea: {
    padding: 16,
    fontSize: 16,
    height: 96,
    maxHeight: 96,
  },
  textArea: {
    height: 80,
    ...commonBorder,
    padding: 10,
  },
  modalContainer: {
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: 100,
    padding: 20,
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
    marginLeft: 20,
  },
  plusButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  link: {
    backgroundColor: 'gray',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    marginLeft: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  flatList: {
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
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
    paddingTop: 8,
    marginBottom: 8,
    backgroundColor: 'lightblue',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontWeight: 'bold',
  },
  columnLeft: {
    width: '23%',
    padding: 8,
    alignItems: 'start',
    justifyContent: 'center',
  },
  column: {
    fontSize: 16,
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
  },
  columnRight: {
    width: '9%',
    paddingRight: 5,
    justifyContent: 'center',
  },
  deleteIcon: {
    width: '9%',
    paddingRight: 5,
    justifyContent: 'center',
  },
  moveDetails: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
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
  saveButton: {
    marginTop: 16,
    alignSelf: 'center',
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
