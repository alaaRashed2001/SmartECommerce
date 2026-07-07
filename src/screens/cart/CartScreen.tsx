import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import EmptyCart from './EmptyCart';
import CartItem from '../../components/cart/CartItem';
import TotalsView from '../../components/cart/TotalsView';
import { sharedPadHorizontal } from '../../styles/sharedStyles';
import AppButton from '../../components/buttons/AppButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { removeItemFromCart, removeProductFromCart, addItemToCart } from '../../store/reducer/cartSlice';
import { shippingFee, taxesRate } from '../../constants/constants';


const CartScreen = () => {
  const navigation = useNavigation()
  const { items } = useSelector((state: RootState) => state.cartSlice)
  const dispatch = useDispatch()
  const totalProductPriceSum = items.reduce((acc, item) => acc + item.sum, 0)
  const orderTotal = totalProductPriceSum + shippingFee + taxesRate
  return (
    <AppSafeView >
      <HomeHeader />
      {
        items.length > 0 ? <View style={{ paddingHorizontal: sharedPadHorizontal, flex: 1 }}>

          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return <CartItem {...item}
                price={item.sum}
                onDecreasePress={() => dispatch(removeItemFromCart(item))}
                onIncreasePress={() => { dispatch(addItemToCart(item)) }}
                onDeletePress={() => dispatch(removeProductFromCart(item))}
              />;
            }}
            showsVerticalScrollIndicator={false}
          />
          <TotalsView itemsPrice={totalProductPriceSum} orderTotal={orderTotal} />
          <AppButton
            title='Proceed to Checkout'
            onPress={() => navigation.navigate("CheckoutScreen")}
          />

        </View>
          :
          <EmptyCart />
      }

    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})