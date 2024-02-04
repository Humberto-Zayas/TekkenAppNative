import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  messageText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 'auto', // This will move the icons to the right side
  },
  icon: {
    marginHorizontal: 5,
  },
});