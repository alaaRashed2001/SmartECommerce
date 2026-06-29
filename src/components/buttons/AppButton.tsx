import { StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import React, { FC } from 'react'
import { vs } from 'react-native-size-matters';
import { s } from 'react-native-size-matters';
import AppText from '../text/AppText';
import { AppColors } from '../../styles/color';


interface AppButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  buttonStyle?: ViewStyle | ViewStyle[];
  titleStyle?: TextStyle | TextStyle[];
  disabled?: boolean;
}


const AppButton: FC<AppButtonProps> = ({ onPress, title, backgroundColor = AppColors.primary, textColor = AppColors.white, buttonStyle, titleStyle, disabled = false, }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.decoration, { backgroundColor: disabled ? AppColors.disabledGrey : backgroundColor }, buttonStyle]}
      disabled={disabled}
    >
      <AppText style={[
        styles.titleButton,
        { color: textColor },
        titleStyle
      ]} variant="bold">{title}</AppText>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  decoration: {
    width: "100%",
    height: vs(40),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(25),
    alignSelf: "center",
  },
  titleButton: {
    fontSize: s(16),

  },
})