import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <View>
        <Text>ProfileScreen</Text>
      </View>
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})