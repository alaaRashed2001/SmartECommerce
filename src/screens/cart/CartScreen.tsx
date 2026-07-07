import { StyleSheet, } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import EmptyCart from './EmptyCart';
import CartItem from '../../components/cart/CartItem';
import TotalsView from '../../components/cart/TotalsView';
const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart />  */}
      <CartItem
        title="iPhone 16 Pro Max"
        price={1199}
        imageURL="https://2b.com.eg/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/a/ma658.jpg"
        quantity={1}
        onIncreasePress={() => { }}
        onDecreasePress={() => { }}
        onDeletePress={() => { }}
      />

      <TotalsView itemsPrice={1199} orderTotal={1378.85} />
    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})