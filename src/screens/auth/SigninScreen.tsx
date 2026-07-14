import { StyleSheet, Image } from 'react-native'
import AppSafeView from '../../components/views/AppSafeView';
import { sharedPadHorizontal } from '../../styles/sharedStyles';
import { IMAGES } from '../../constants/images-paths';
import { s } from 'react-native-size-matters';
import { vs } from 'react-native-size-matters';
import AppText from '../../components/text/AppText';
import AppButton from '../../components/buttons/AppButton';
import { AppColors } from '../../styles/color';
import { useNavigation } from '@react-navigation/native';

import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { showMessage } from "react-native-flash-message";
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/reducer/userSlice';


const schema = yup
    .object({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
    })
    .required();


type FormData = yup.InferType<typeof schema>;

const SigninScreen = () => {

    const { control, handleSubmit } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const navigation = useNavigation();
    const dispatch = useDispatch()

    const onLoginPress = async (data: FormData) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            )
            navigation.navigate("MainAppBottomTaps")
            console.log(userCredential);
            const userDataObj = {
                uid: userCredential.user.uid
            }
            dispatch(setUserData(userDataObj))
        } catch (error: any) {
            let errorMessage = ""
            console.log(error.code)
            if (error.code === "auth/user-not-found") {
                errorMessage = "User not found"
            } else if (error.code === "auth/invalid-credential") {
                errorMessage = "Wrong email or password"
            } else {
                errorMessage = "An error occurred during sign-in"
            }

            showMessage({
                type: "danger",
                message: errorMessage
            })
        }
    };



    return (
        <AppSafeView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo} />
            {/* replace AppTextInput with  AppTextInputController*/}
            <AppTextInputController<FormData>
                control={control}
                name="email"
                placeholder="Email"
                keyboardType="email-address"
            />
            <AppTextInputController<FormData>
                control={control}
                name="password"
                placeholder="Password"
                secureTextEntry
            />

            <AppText style={styles.appName}>Smart E-Commerce</AppText>

            <AppButton title="Login" onPress={handleSubmit(onLoginPress)} />
            <AppButton
                title="Sign Up"
                buttonStyle={styles.signupButton}
                textColor={AppColors.primary}
                onPress={() => navigation.navigate("SignUp")}
            />
        </AppSafeView>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: sharedPadHorizontal,
    },
    logo: {
        height: s(150),
        width: s(150),
        marginBottom: vs(30),
    },
    appName: {
        fontSize: s(16),
        marginBottom: vs(15)
    },
    signupButton: {
        marginTop: vs(16),
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderColor: AppColors.primary,
    }
})