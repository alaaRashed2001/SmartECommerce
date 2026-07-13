import { StyleSheet, View, Alert } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/views/AppSafeView';
import { commonStyles, sharedPadHorizontal } from '../../styles/sharedStyles';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/color';
import AppButton from '../../components/buttons/AppButton';
import { Is_Android, Is_IOS } from '../../constants/constants';
import { useForm } from 'react-hook-form'
import AppTextInputController from '../../components/inputs/AppTextInputController';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const schema = yup.object({
    fullName: yup
        .string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

    phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Phone number must be at least 10 digits'),

    detailedAddress: yup
        .string()
        .required('Address is required')
        .min(15, 'Please provide a detailed address with at least 15 characters')
}).required()

type FormData = yup.InferType<typeof schema>

const CheckoutScreen = () => {

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const { userData } = useSelector((state: RootState) => state.userSlice)
    console.log("**********************************");
    console.log(JSON.stringify(userData, null, 3));
    console.log("**********************************");
    const saveOrder = (formData: FormData) => {
        Alert.alert(JSON.stringify(formData))
        console.log(formData);
    };

    return (
        <AppSafeView>

            <View style={{ paddingHorizontal: sharedPadHorizontal }}>
                <View style={styles.inputContainer}>
                    <AppTextInputController control={control} name={"fullName"} placeholder='Full Name' />
                    <AppTextInputController control={control} name={"phoneNumber"} placeholder='Phone Number' />
                    <AppTextInputController control={control} name={"detailedAddress"} placeholder='Detailed Address' />
                </View>
            </View>

            <View style={styles.buttonButtomContainer}>
                <AppButton
                    title="Confirm"
                    onPress={handleSubmit(saveOrder)}
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