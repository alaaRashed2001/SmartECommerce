import { StyleSheet, SafeAreaView, View, StatusBar, ViewStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { AppColors } from '../../styles/color';
import { Is_Android } from '../../constants/constants';
interface AppSafeViewProps {
    children: ReactNode;
    style?: ViewStyle
}
const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.safeArea} >
            <View style={[styles.container, style]}>{children}</View>
        </SafeAreaView>
    )
}

export default AppSafeView

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: AppColors.background,
        paddingTop: Is_Android ? StatusBar.currentHeight || 0 : 0,
    },
    container: {
        flex: 1,

    }
})