import { StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import { Fonts } from '../../styles/font';
import AppText from '../text/AppText';
import { AppColors } from '../../styles/color';
import { AntDesign } from '@expo/vector-icons';
import IncreaseDecreaseButtons from './IncreaseDecreaseButtons';
const tempItem = {
    id: 1,
    price: 1199,
    title: "iPhone 16 Pro Max",
    imageURL:
        "https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg",
}

const CartItem = () => {
    return (
        <View style={styles.container}>


            {/* Image Container */}
            <View style={styles.imageContainer}>

                <Image source={{ uri: tempItem.imageURL }}
                    style={styles.image}
                />

            </View>

            {/* Details Container */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{tempItem.title}</AppText>
                <AppText>${(tempItem.price)}</AppText>

                {/* Increment/Decrement Buttons */}
                <IncreaseDecreaseButtons />

            </View>

            {/* Delete Button Container */}

            <View style={styles.deleteButtonContainer}>

                <Pressable style={styles.deleteButton}>
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