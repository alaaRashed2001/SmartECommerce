import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import ProductCard from '../../components/cards/ProductCard';
import { sharedPadHorizontal } from '../../styles/sharedStyles';
import { vs } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/reducer/cartSlice';
import { getProductsData } from '../../config/dataServices';

const HomeScreen = () => {
  const dispatch = useDispatch()
  // 3
  const [products, setProducts] = useState([])
  // 1
  const fetchData = async () => {
    const data = await getProductsData()
    // 4
    setProducts(data)
  }
  // 2
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        numColumns={2}
        columnWrapperStyle={
          {
            justifyContent: 'space-between',
            marginBottom: vs(10),
          }
        }
        contentContainerStyle={{ paddingHorizontal: sharedPadHorizontal }}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageSource={item.imageURL}
            productName={item.title}
            productPrice={`$${item.price}`}
            onAddToCartPress={() => { dispatch(addItemToCart(item)) }}
          />
        )}

      />
    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screenTitle: {

    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  }
})