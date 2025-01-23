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
    marginTop: 64,
  },
  scrollView: {
    paddingTop: 64,
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    // padding: 16,
    paddingBottom: 40,
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
  searchInput: {
    padding: 16,
    fontSize: 18,
    width: '100%',
    outlineStyle: 'none'
  },
  inputArea: {
    padding: 16,
    fontSize: 18,
    height: 96,
    maxHeight: 96,
  },
  textArea: {
    height: 80,
    ...commonBorder,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: 64,
    padding: 16,
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingRight: 24,
    paddingTop: 24,
    // padding: 8,
    zIndex: 999
  },
  plusButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 40,
    marginTop: 16,
    alignItems: 'center',
    marginBottom: 16,
    width: 40,
    height: 40,
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
    // overflow: 'hidden',
    marginBottom: 16,
    width: '100%',
    overflow: 'scroll'
    // height: 200
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
    width: '100%',
    backgroundColor: 'lightblue',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
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
    fontSize: 18,
    flex: 1,
    padding: 10,
    alignItems: 'flex-start',
    alignSelf: 'center'
  },
  columnRight: {
    width: '9%',
    paddingRight: 5,
    justifyContent: 'center',
  },
  deleteIcon: {
    alignSelf: 'center',
    marginRight: 16
  },
  editIcon: {
    marginRight: 8,
    alignSelf: 'center'
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
  selectedMove: {
    backgroundColor: '#d3d3d3', // Example selected color
  },
  nextButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 8
  },
  backButton: {
    padding: 10,
    backgroundColor: 'gray',
    alignItems: 'center',
    width: '49%',
    marginRight: 8,
    borderRadius: 8 
  },
  addButton: {
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    width: '49%',
    borderRadius: 8
  },
  disabledButton: {
    backgroundColor: 'gray',
    opacity: 0.5,
  },
  counter: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    fontSize: 16,
    color: 'white',
  },
  flowCounter: {
    position: 'absolute',
    top: 0,
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    fontSize: 16,
    color: 'white',
    backgroundColor: 'blue',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20
  },
  flowChartContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // flexWrap: 'wrap', // Allow items to wrap to the next line
  },
  flowChartItemWrapper: {
    position: 'relative',
    marginBottom: 16
    // marginRight: 10, // Space between items
    // marginBottom: 20, // Space between rows
  },
  flowChartItem: {
    // paddingVertical: 10,
    paddingHorizontal: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // Ensure text is above rotated square
  },
  flowChartItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  rotatedSquare: {
    position: 'absolute',
    right: -8, // Positioning the pointed end outside
    top: 6, // Start positioning from the vertical center
    width: 27,
    height: 27, // Equal width and height for a square shape
    transform: [{ rotate: '45deg' }], // TranslateY to adjust for rotation
    zIndex: 1,
  },
  difficultyDot: {
    width: 16,
    height: 16,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 8
  },
  legendContainer: {
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row'
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  legendDot: {
    width: 16,
    height: 16,
    borderRadius: 16,
    marginRight: 4,
  },
  legendText: {
    fontSize: 16,
  },
  comboStarterColumn: {
    flex: 0.20, // 25% of the row width
    justifyContent: 'center',
    paddingTop: 6
  },
  comboRouteColumn: {
    flex: 0.70,
    justifyContent: 'center',
  },
  comboRouteText: {
    paddingLeft: 16,
    fontSize: 18,
  },
  notesColumn: {
    flex: 0.1, // 10% of the row width
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  pickerIOS: {
    backgroundColor: 'white',
  },
  pickerAndroid: {
    backgroundColor: 'white',
  },
  pickerWeb: {
    fontSize: 16,
    height: 50,
    backgroundColor: '#eef',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#aaa',
    outline: 'none', // For better focus styles on web
  },
});
