import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import EmptyCart from './EmptyCart';
import CartItem from '../../components/cart/CartItem';
import TotalsView from '../../components/cart/TotalsView';
import { products } from '../../data/products';
import { sharedPadHorizontal } from '../../styles/sharedStyles';
import AppButton from '../../components/buttons/AppButton';
import { useNavigation } from '@react-navigation/native';


const CartScreen = () => {
  const navigation = useNavigation()
  return (
    <AppSafeView >
      <HomeHeader />
      {/* <EmptyCart />  */}

      <View style={{ paddingHorizontal: sharedPadHorizontal, flex: 1 }}>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return <CartItem {...item} />;
          }}
          showsVerticalScrollIndicator={false}
        />

        <TotalsView itemsPrice={1199} orderTotal={1378.85} />

        <AppButton
          title='Proceed to Checkout'
          onPress={() => navigation.navigate("CheckoutScreen")}
        />

      </View>


    </AppSafeView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})