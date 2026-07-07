import { Pressable, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { AppColors } from '../../styles/color';
import { s, vs } from 'react-native-size-matters'
import AppText from '../text/AppText';
import { FontAwesome } from '@expo/vector-icons';
interface IncreaseDecreaseButtonsProps {
    quantity: number;
    onIncreasePress: () => void;
    onDecreasePress: () => void;
}
const IncreaseDecreaseButtons: FC<IncreaseDecreaseButtonsProps> = ({ quantity,
    onIncreasePress,
    onDecreasePress, }) => {
    return (
        <View style={styles.quantityContainer}>

            <Pressable onPress={onDecreasePress} style={styles.button}><FontAwesome name="minus" size={s(10)} color={AppColors.primary} /></Pressable>

            <AppText style={styles.buttonText}>{quantity}</AppText>

            <Pressable onPress={onIncreasePress} style={styles.button}><FontAwesome name="plus" size={s(10)} color={AppColors.primary} /></Pressable>

        </View>
    )
}

export default IncreaseDecreaseButtons

const styles = StyleSheet.create({
    quantityContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        paddingHorizontal: s(5),
        borderRadius: s(30),
        borderWidth: s(1),
        borderColor: AppColors.border,
        paddingVertical: vs(5),
        width: s(80),
    },
    button: {
        width: s(20),
        height: s(20),
        borderRadius: s(10),
        padding: s(5),
        backgroundColor: AppColors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        color: AppColors.primary,
    }

})