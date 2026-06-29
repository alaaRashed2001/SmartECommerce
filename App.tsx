import AppText from './src/components/text/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { AppColors } from './src/styles/color';

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />

      <AppSafeView>
        <FlashMessage position={"top"}></FlashMessage>
        <AppText variant="medium">Open up App.tsx to start working on your app!</AppText>
        <AppText
          onPress={
            () => showMessage({
              message: "",
              color: AppColors.blueGrey
            })
          }
          variant="bold">Open up App.tsx to start working on your app!</AppText>

      </AppSafeView>
    </>
  );
}

