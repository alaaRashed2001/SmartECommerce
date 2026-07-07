import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import HomeHeader from '../../components/headers/HomeHeader';
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton';
import { sharedPadHorizontal } from '../../styles/sharedStyles';
import AppText from '../../components/text/AppText';
import { s, vs } from 'react-native-size-matters'
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <AppSafeView>
      <HomeHeader />
      <AppText variant="bold" style={styles.helloLabale}>Hello, Alaa</AppText>

      <View style={{ paddingHorizontal: sharedPadHorizontal }}>
        <ProfileSectionButton title="My Orders" onPress={() => navigation.navigate("MyOrdersScreen")} />
        <ProfileSectionButton title="Language" />
        <ProfileSectionButton title="Logout" />
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