import { StyleSheet, Image, View, Pressable } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import { Fonts } from '../../styles/font';
import AppText from '../text/AppText';
import { AppColors } from '../../styles/color';
import { AntDesign } from '@expo/vector-icons';
import IncreaseDecreaseButtons from './IncreaseDecreaseButtons';

interface CartItemProps {
    title: string;
    price: number;
    imageURL: string;
    quantity: number;
    onIncreasePress: () => void;
    onDecreasePress: () => void;
    onDeletePress: () => void;
}

const CartItem: FC<CartItemProps> = (
    {
        title,
        price,
        imageURL,
        quantity,
        onIncreasePress,
        onDecreasePress,
        onDeletePress,
    }
) => {
    return (
        <View style={styles.container}>


            {/* Image Container */}
            <View style={styles.imageContainer}>

                <Image source={{ uri: imageURL }}
                    style={styles.image}
                />

            </View>

            {/* Details Container */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText>${price}</AppText>

                {/* Increment/Decrement Buttons */}
                <IncreaseDecreaseButtons
                    quantity={quantity}
                    onIncreasePress={onIncreasePress}
                    onDecreasePress={onDecreasePress}
                />

            </View>

            {/* Delete Button Container */}

            <View style={styles.deleteButtonContainer}>

                <Pressable onPress={onDeletePress} style={styles.deleteButton}>
                    <AntDesign name="delete" size={s(14)} color={AppColors.red} />
                    <AppText style={styles.deleteText}>Delete</AppText>
                </Pressable>

            </View>


        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: s(1),
        borderBottomColor: AppColors.border,
        paddingBottom: vs(4),
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: s(80),
        height: s(80),
        borderRadius: s(5),
    },
    detailsContainer: {
        flex: 3,
    },
    title: {
        fontSize: s(14),
        color: AppColors.primary,
        fontFamily: Fonts.NunitoMedium,
        marginTop: s(5),
    },
    price: {
        fontSize: s(14),
        color: AppColors.primary,
        fontFamily: Fonts.NunitoBold,
        marginVertical: s(5),
    },
    deleteButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingEnd: s(10),

    },

    deleteText: {
        marginLeft: s(7),
        marginTop: s(3),
        fontFamily: Fonts.NunitoMedium,
        color: AppColors.medGrey,
        fontSize: s(12),
    },
    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})