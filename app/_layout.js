import { AuthProvider } from '../utils/AuthContext';
import AppWrapper from '../components/AppWrapper';
import CustomHeader from '../components/CustomHeader';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';

export default function HomeLayout() {
  return (
    <>
      <AuthProvider >
        <AppWrapper>
          <CustomHeader />
          <Slot />
        </AppWrapper>
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
