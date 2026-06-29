import AppText from './src/components/text/AppText';
import AppSafeView from './src/components/views/AppSafeView';
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { AppColors } from './src/styles/color';
import AppButton from './src/components/buttons/AppButton';

export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />

      <AppSafeView>
        <FlashMessage position={"top"}></FlashMessage>
        <AppText variant="medium">Open up App.tsx to start working on your app!</AppText>
        <AppButton
          title={"Show Message"}
          onPress={() => showMessage({
            message: "Click Me"
          })}
        />
        <AppText
          onPress={
            () => showMessage({
              message: "Hello",
              color: AppColors.black
            })
          }
          variant="bold">Open up App.tsx to start working on your app!</AppText>

      </AppSafeView>
    </>
  );
}

