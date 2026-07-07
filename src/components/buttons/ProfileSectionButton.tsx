import { TouchableOpacity, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import AppText from '../text/AppText';
import { AppColors } from '../../styles/color';
import { vs, s } from 'react-native-size-matters'
import { Fonts } from '../../styles/font';
import { MaterialIcons } from '@expo/vector-icons'

interface ProfileSectionButtonProps {
    onPress: () => void;
    title: string;
}

const ProfileSectionButton: FC<ProfileSectionButtonProps> = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>

            <View style={styles.titleDecoration}>
                <AppText style={styles.title}>{title}</AppText>
            </View>

            <View>
                <MaterialIcons name='arrow-forward-ios' size={s(14)} color={AppColors.lightGrey} />
            </View>

        </TouchableOpacity>
    )
}

export default ProfileSectionButton

const styles = StyleSheet.create({
    button: {
        width: "100%",
        borderBottomColor: AppColors.lightGrey,
        paddingBottom: vs(10),
        marginTop: vs(14),
        flexDirection: "row",
        borderBottomWidth: 1,
    },
    title: {
        fontSize: s(16),
        fontFamily: Fonts.NunitoMedium,
        color: AppColors.primary,
    },
    titleDecoration: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginHorizontal: s(8),
    }
})