import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AppColors } from '../../styles/color';
import { vs, s } from 'react-native-size-matters';
import { IMAGES } from '../../constants/images-paths';

const HomeHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Image source={IMAGES.appLogo} style={styles.logo} />
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: AppColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: vs(10),
    },
    logo: {
        width: s(40),
        height: vs(40),
        tintColor: AppColors.white,
    },
})