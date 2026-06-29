import { StyleSheet, View } from 'react-native';
import AppText from './src/components/text/AppText';

export default function App() {
  return (
    <View style={styles.container}>
      <AppText variant="medium">Open up App.tsx to start working on your app!</AppText>
      <AppText variant="bold">Open up App.tsx to start working on your app!</AppText>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
