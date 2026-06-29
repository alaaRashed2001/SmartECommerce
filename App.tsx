import { StyleSheet } from 'react-native';
import AppText from './src/components/text/AppText';
import AppSafeView from './src/components/views/AppSafeView';

export default function App() {
  return (
    <AppSafeView>
      <AppText variant="medium">Open up App.tsx to start working on your app!</AppText>
      <AppText variant="bold">Open up App.tsx to start working on your app!</AppText>

    </AppSafeView>
  );
}

