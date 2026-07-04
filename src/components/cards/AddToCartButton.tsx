import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { s } from 'react-native-size-matters';
import { AppColors } from '../../styles/color';
import { Ionicons } from '@expo/vector-icons';

interface AddToCartButtonProps {
    onPress: () => void;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Ionicons name="cart" size={s(15)} color={AppColors.white} />
        </TouchableOpacity>
    )
}

export default AddToCartButton

const styles = StyleSheet.create({
    button: {
        height: s(28),
        width: s(28),
        borderRadius: s(14),
        position: 'absolute',
        left: 5,
        top: 5,
        zIndex: 1,
        backgroundColor: AppColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
})