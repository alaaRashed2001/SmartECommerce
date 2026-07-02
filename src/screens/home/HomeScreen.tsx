import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';

const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text style={styles.screenTitle}>Home Screen</Text>
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