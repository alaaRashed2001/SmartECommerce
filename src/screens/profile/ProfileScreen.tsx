import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton';
import { sharedPadHorizontal } from '../../styles/sharedStyles';
import AppText from '../../components/text/AppText';
import { s, vs } from 'react-native-size-matters'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("USER_DATA")
    navigation.navigate("AuthStack")
    await signOut(auth)
  }

  return (
    <AppSafeView>
      <HomeHeader />
      <AppText variant="bold" style={styles.helloLabale}>Hello, Alaa</AppText>

      <View style={{ paddingHorizontal: sharedPadHorizontal }}>
        <ProfileSectionButton title="My Orders" onPress={() => navigation.navigate("MyOrdersScreen")} />
        <ProfileSectionButton title="Language" />
        <ProfileSectionButton title="Logout" onPress={handleLogout} />
      </View>

    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  helloLabale: {
    fontSize: s(18),
    marginTop: vs(12)
  }
})