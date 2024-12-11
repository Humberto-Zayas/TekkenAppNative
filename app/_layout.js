import { AuthProvider } from '../utils/AuthContext';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';

export default function HomeLayout() {
  return (
    <>
      <AuthProvider >
        <Slot />
      </AuthProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Ensure relative positioning for modal and overlays
  },
});
