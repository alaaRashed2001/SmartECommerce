import { StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import { sharedPadHorizontal } from '../../styles/sharedStyles';
import { IMAGES } from '../../constants/images-paths';
import { s } from 'react-native-size-matters';
import { vs } from 'react-native-size-matters';
import AppTextInput from '../../components/inputs/AppTextInput';
import AppText from '../../components/text/AppText';
import AppButton from '../../components/buttons/AppButton';
import { AppColors } from '../../styles/color';
import { useNavigation } from '@react-navigation/native';

const SigninScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    return (
        <AppSafeView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo} />
            <AppTextInput
                placeholder="Email"
                onChangeText={setEmail}
            />
            <AppTextInput
                placeholder="Password"
                onChangeText={setPassword}
                secureTextEntry
            />

            <AppText style={styles.appName}>Smart E-Commerce</AppText>

            <AppButton title="LOGIN" onPress={() => { navigation.navigate("MainAppBottomTaps" as never) }} />
            <AppButton title="SIGNUP"
                onPress={() => navigation.navigate("SignUp" as never)}
                buttonStyle={styles.signupButton} textColor={AppColors.primary} />
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