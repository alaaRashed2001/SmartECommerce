import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { vs, s } from 'react-native-size-matters'
import AppText from '../text/AppText';
import { AppColors } from '../../styles/color';
import { shippingFee, taxesRate } from '../../constants/constants';

interface TotalsViewProps {
  itemsPrice: number;
  orderTotal: number;
}

const TotalsView: FC<TotalsViewProps> = ({ itemsPrice, orderTotal }) => {
  return (
    <View>

      <View style={styles.row}>
        <AppText style={styles.title}>Items Price:</AppText>
        <AppText style={styles.price}>${itemsPrice.toFixed(2)}</AppText>
      </View>

      <View style={styles.row}>
        <AppText style={styles.title}>Taxes:</AppText>
        <AppText style={styles.price}>${taxesRate.toFixed(2)}</AppText>
      </View>

      <View style={styles.row}>
        <AppText style={styles.title}>Shipping Fee:</AppText>
        <AppText style={styles.price}>${shippingFee.toFixed(2)}</AppText>
      </View>

      <View style={styles.separator} />

      <View style={styles.row}>
        <AppText style={styles.title}>Order Total:</AppText>
        <AppText style={styles.price}>${orderTotal.toFixed(2)}</AppText>
      </View>

    </View>
  )
}

export default TotalsView

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vs(10),
  },
  title: {
    fontSize: s(16),
    flex: 1,
  },
  price: {
    fontSize: s(16),
    color: AppColors.primary,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: AppColors.blueGrey,
    marginVertical: vs(5),
  },
})