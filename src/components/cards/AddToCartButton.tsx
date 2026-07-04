import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';
import { AppColors } from '../../styles/color';
import { Ionicons } from '@expo/vector-icons';

const AddToCartButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
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