import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import { commonStyles, sharedPadHorizontal } from '../../styles/sharedStyles';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/color';
import AppTextInput from '../../components/inputs/AppTextInput';
import AppButton from '../../components/buttons/AppButton';
import { Is_Android, Is_IOS } from '../../constants/constants';

const CheckoutScreen = () => {
    return (
        <AppSafeView>

            <View style={{ paddingHorizontal: sharedPadHorizontal }}>
                <View style={styles.inputContainer}>

                    <AppTextInput
                        placeholder="Full Name"

                    />

                    <AppTextInput
                        placeholder="Phone Number"

                    />

                    <AppTextInput
                        placeholder="Detailed Address"

                    />

                </ View>
            </View>

            <View style={styles.buttonButtomContainer}>
                <AppButton
                    title="Confirm"
                    onPress={() => { }}
                />
            </View>
        </AppSafeView>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    inputContainer: {
        ...commonStyles.shadow,
        padding: s(8),
        borderRadius: s(8),
        backgroundColor: AppColors.white,
        marginTop: Is_IOS ? vs(15) : undefined,
        paddingTop: vs(15),
    },
    buttonButtomContainer: {
        paddingHorizontal: sharedPadHorizontal,
        position: "absolute",
        width: "100%",
        bottom: Is_Android ? vs(15) : 0,
        borderTopWidth: 1,
        borderColor: AppColors.lightGrey,
        paddingTop: vs(10),
    }
})