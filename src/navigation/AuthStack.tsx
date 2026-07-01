import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/auth/SigninScreen';
import SignUpScreen from '../screens/auth/SignupScreen';

const Stack = createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
}

