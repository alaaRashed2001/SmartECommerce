import { Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AppColors } from '../../styles/color';
import { vs } from 'react-native-size-matters';
import { s } from 'react-native-size-matters';
import { sharedPadHorizontal } from '../../styles/sharedStyles';
import AppSafeView from '../../components/views/AppSafeView';
import AppButton from '../../components/buttons/AppButton';
import { IMAGES } from '../../constants/images-paths';
import AppTextInput from '../../components/inputs/AppTextInput';
import AppText from '../../components/text/AppText';
const SignupScreen = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <AppSafeView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo} />
            <AppTextInput
                placeholder="Username"
                onChangeText={setUsername}
            />
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
            <AppButton title="CREATE ACCOUNT" />

            <AppButton title="Go to Login" buttonStyle={styles.signinButton} textColor={AppColors.primary} />
        </AppSafeView>
    )
}

export default SignupScreen

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
    signinButton: {
        marginTop: vs(16),
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderColor: AppColors.primary,
    }
})