import { Platform } from 'react-native'

export const Is_Android = Platform.OS === "android"

export const Is_IOS = Platform.OS === "ios"

export const taxesRate = 0.15 // 15% tax rate
export const shippingFee = 10.00 // Flat shipping fee