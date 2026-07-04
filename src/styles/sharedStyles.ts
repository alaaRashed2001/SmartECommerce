import { s } from "react-native-size-matters";
import { StyleSheet } from "react-native";
import { AppColors } from "./color";

export const sharedPadHorizontal = s(12)

export const commonStyles = StyleSheet.create({
    shadow: {
        // Shadow for iOS
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Shadow for Android
        elevation: 4,
    },
})