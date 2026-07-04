import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { s } from 'react-native-size-matters';
import { vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/color';
import { tempImage } from '../../constants/temp';
import AppText from '../text/AppText';
import { Fonts } from '../../styles/font';

const ProductCard = () => {
    return (
        <View style={styles.productCard}>

            <View style={styles.productImage} >
                <Image style={styles.image} source={{ uri: tempImage }} />
            </View>

            <View style={styles.details}>
                <AppText style={styles.productName}>Product Name</AppText>
                <AppText style={styles.productPrice}>2000$</AppText>
            </View>


        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    productCard: {
        width: s(160),
        height: vs(190),
        backgroundColor: AppColors.white,
        borderRadius: s(10),
        borderWidth: 1,
    },
    productImage: {
        overflow: 'hidden',
        borderTopLeftRadius: s(10),
        borderTopRightRadius: s(10),
        width: '100%',
        height: vs(130),
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    details: {
        flex: 1,
        paddingTop: vs(6),
        paddingBottom: vs(15),
        paddingHorizontal: s(10),
    },
    productName: {
        fontSize: s(14),
        fontFamily: Fonts.NunitoMedium,
        color: AppColors.primary,
    },
    productPrice: {
        fontSize: s(14),
        fontFamily: Fonts.NunitoBold,
        color: AppColors.primary,
        marginTop: vs(6),
    },

})