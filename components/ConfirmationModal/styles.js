import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  confirmationText: {
    fontSize: 18,
    marginBottom: 10,
  },
  confirmationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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

});