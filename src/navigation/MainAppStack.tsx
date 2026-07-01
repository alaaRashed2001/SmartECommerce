import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainAppBottomTaps from './MainAppBottomTaps';

const stack = createStackNavigator();

export default function MainAppStack() {
    return (
        <stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }>
            <stack.Screen name="AuthStack" component={AuthStack} />
            <stack.Screen name="MainAppBottomTaps" component={MainAppBottomTaps} />
        </stack.Navigator>
    );
}