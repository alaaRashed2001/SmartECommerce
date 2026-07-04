import { StyleSheet, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import AppText from '../../components/text/AppText';
import { Fonts } from '../../styles/font';
import { AppColors } from '../../styles/color';
import AppButton from '../../components/buttons/AppButton';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EmptyCart = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="shopping-outline" size={s(100)} color={AppColors.primary} style={styles.icon} />
            <AppText style={styles.title}>Your Cart is Empty</AppText>
            <AppText style={styles.subtitle}>Browse our products to add items to your cart</AppText>
            <AppButton title="Start Shopping" onPress={() => navigation.navigate('Home')} buttonStyle={styles.startShoppingButton} />
        </View>
    )
}

export default EmptyCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: s(20),

    },
    icon: {
        marginBottom: vs(20),
        opacity: 0.9,
    },
    title: {
        fontSize: s(20),
        fontFamily: Fonts.NunitoBold,
        color: AppColors.primary,
        marginBottom: s(10),
    },
    subtitle: {
        marginTop: s(16),
        fontFamily: Fonts.NunitoMedium,
        color: AppColors.medGrey,
        textAlign: 'center',
        marginBottom: s(20),
    },
    startShoppingButton: {
        width: '80%',
    },
})