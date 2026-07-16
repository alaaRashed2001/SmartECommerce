import { ActivityIndicator, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainAppBottomTaps from './MainAppBottomTaps';
import CheckoutScreen from '../screens/cart/CheckoutScreen'
import MyOrdersScreen from '../screens/profile/MyOrdersScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUserData } from '../store/reducer/userSlice';
import { useEffect } from 'react';
import { RootState } from '../store/store';
import { AppColors } from '../styles/color';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
const stack = createStackNavigator();

export default function MainAppStack() {
    const dispatch = useDispatch()
    const { userData, isLoading } = useSelector((state: RootState) => state.userSlice)

    const isLogedIn = async () => {
        try {
            const storeUserData = await AsyncStorage.getItem("USER_DATA")
            console.log(storeUserData);
            if (storeUserData) {
                dispatch(setUserData(JSON.parse(storeUserData)))
            } else {
                dispatch(setLoading(false))
            }
        } catch (e) {
            console.error("ERROR READING STORED USER", e);
            dispatch(setLoading(false))
        }
    }
    useEffect(() => { isLogedIn() }, []);

    useEffect(() => {
        onAuthStateChanged(auth, (userData) => {
            if (userData) {
                console.log("Signed In")
            } else {
                console.log("Signed Out")
            }
        })
    }, []);

    if (isLoading) {
        return <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <ActivityIndicator size={"large"} color={AppColors.primary} />
        </View>
    }
    return (

        <stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }
            }
            initialRouteName={
                userData ? "MainAppBottomTaps" : "AuthStack"
            }
        >
            <stack.Screen name="AuthStack" component={AuthStack} />
            <stack.Screen name="MainAppBottomTaps" component={MainAppBottomTaps} />
            <stack.Screen name="CheckoutScreen" options={{ headerShown: true }} component={CheckoutScreen} />
            <stack.Screen name="MyOrdersScreen" options={{ headerShown: true, title: "My Orders" }} component={MyOrdersScreen} />

        </stack.Navigator>
    );
}