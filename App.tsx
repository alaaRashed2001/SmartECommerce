import FlashMessage from 'react-native-flash-message'
import SigninScreen from './src/screens/auth/SigninScreen';
import SignupScreen from './src/screens/auth/SignupScreen';


export default function App() {
  return (
    <>
      <FlashMessage position={"top"} />

      <SignupScreen />
    </>
  );
}

