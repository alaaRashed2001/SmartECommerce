import { Image, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/color';
import AppText from '../text/AppText';
import { Fonts } from '../../styles/font';
import AddToCartButton from './AddToCartButton';
import { commonStyles } from '../../styles/sharedStyles';

interface ProductCardProps {
    onAddToCartPress: () => void;
    imageSource: string;
    productName: string;
    productPrice: string;
}

const ProductCard: FC<ProductCardProps> = ({ onAddToCartPress, imageSource, productName, productPrice }) => {
    return (
        <View style={styles.productCard}>

            {/* AddToCartButton component is rendered here */}
            <AddToCartButton onPress={onAddToCartPress} />

            {/* Product image */}
            <View style={styles.productImage} >
                <Image style={styles.image} source={{ uri: imageSource }} />
            </View>

            {/* Product details */}
            <View style={styles.details}>
                <AppText style={styles.productName}>{productName}</AppText>
                <AppText style={styles.productPrice}>{productPrice}</AppText>
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
        ...commonStyles.shadow,
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
        resizeMode: 'contain',
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