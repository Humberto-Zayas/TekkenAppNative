import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    width: '100%', // Full width
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    ...(Platform.OS === 'web' && {
      maxWidth: 767,
      width: '100%',
      alignSelf: 'center',
      marginBottom: -16

    }),
  },
  modalContent: {
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
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
    paddingHorizontal: 8,
    paddingVertical: 48,
    borderRadius: 24,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: -16,
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

});