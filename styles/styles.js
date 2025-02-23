// styles.js
import { StyleSheet, Platform } from 'react-native';

const commonStyles = {
  container: {
    padding: 24,
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
};

const themeStyles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    width: '100%',
    alignSelf: 'center',
    ...(Platform.OS === 'web' && {
      maxWidth: 767,
      margin: '0 auto',
    }),
  },
  text: {
    ...commonStyles.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  screen: {
    flex: 1, // Ensures the root view occupies full screen
    backgroundColor: '#fff',
  },
  userStatus: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center', // Align text to the center horizontally
    paddingBottom: 16,
    color: '#222'
  },
  gridContainer: {
    marginTop: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 40,
    alignSelf: 'center',
    overflow: 'scroll'
  },
  boxContent: {
    alignItems: 'center', // Ensures vertical alignment of content
  },
  box: {
    alignItems: 'center',
    margin: 8,
  },
});

export { themeStyles };
