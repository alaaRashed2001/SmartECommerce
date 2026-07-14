import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import OrderItem from "../../components/cart/OrderItem";
import { sharedPadHorizontal } from "../../styles/sharedStyles";
import AppSafeView from "../../components/views/AppSafeView";
import { fetchUserOrders } from "../../config/dataServices";
import { getDateFromFireStoreTimeStampObject } from "../../helpers/dateTimeHelper";

const MyOrdersScreen = () => {

  const [orderList, setOrderList] = useState([])

  const getOrders = async () => {
    const response = await fetchUserOrders()
    setOrderList(response)
  }

  useEffect(() => { getOrders() }, [])

  return (
    <AppSafeView>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: sharedPadHorizontal }}
        data={orderList}
        keyExtractor={(item, index) =>
          item?.id.toString()}
        renderItem={({ item }) => {
          console.log("************************************");
          console.log(JSON.stringify(item, null, 3));
          console.log("************************************");
          return (
            <OrderItem
              date={getDateFromFireStoreTimeStampObject(item.createdAt)}
              totalAmount={item.totalProductPriceSum}
              totalPrice={item.totalPrice}
              style={{ marginBottom: 10 }}
            />
          )
        }
        }
      />
    </AppSafeView>

  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({});
