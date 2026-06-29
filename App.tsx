import FlashMessage from 'react-native-flash-message'
import SigninScreen from './src/screens/auth/SigninScreen';


export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />

      <SigninScreen />
    </>
  );
}

