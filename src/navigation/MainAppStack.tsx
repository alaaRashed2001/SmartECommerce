import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainAppBottomTaps from './MainAppBottomTaps';
import CheckoutScreen from '../screens/cart/CheckoutScreen'
import MyOrdersScreen from '../screens/profile/MyOrdersScreen';

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
            <stack.Screen name="CheckoutScreen" options={{ headerShown: true }} component={CheckoutScreen} />
            <stack.Screen name="MyOrdersScreen" options={{ headerShown: true, title: "My Orders" }} component={MyOrdersScreen} />

        </stack.Navigator>
    );
}