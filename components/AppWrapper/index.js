import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from '../../utils/AuthContext';
import { StyleSheet } from 'react-native';

const AppWrapper = ({ children }) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppWrapper;
