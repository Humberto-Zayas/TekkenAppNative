import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 48,
  },
  flatList: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgray',
    overflow: 'hidden',
    marginBottom: 16,
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
    width: '30%',
    alignItems: 'start',
    justifyContent: 'center',
    flex: 1,
    padding: 8,
  },
  column: {
    width: '70%',
    padding: 8,
    alignItems: 'start',
  },
  value: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'transparent',
  },
  modalContent: {
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  heroContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align to the bottom of the container
    justifyContent: 'space-between', // Align to the right
    marginBottom: 8,
    // width: '100%', // Make the component full width
    paddingHorizontal: 0, // Add padding for better spacing
  },
  heroImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  heroInfo: {
    flex: 1,
  },
  heroName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  heroRating: {
    fontSize: 16,
    marginRight: 5,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginHorizontal: 2,
  },
  bookmarkIcon: {
    marginVertical: 2,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 50,
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: -15,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  menuItem: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemIcon: {
    fontSize: 24,
  },
  centeredModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  centeredMenuContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 150,
    width: '90%',
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: -15,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  confirmationText: {
    fontSize: 18,
    marginBottom: 10, 
  },
  confirmationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  selectedTag: {
    backgroundColor: 'lightblue',
  },
  tagText: {
    marginRight: 5
  },
  tooltipContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999, // Ensure the tooltip is above other elements
  },
  tooltipContent: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tooltipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
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
  socialLink: {
    alignSelf: 'start'
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
    paddingTop: 8,
    marginBottom: 8,
    backgroundColor: 'lightblue'
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
});