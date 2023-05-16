import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useIsFocused } from '@react-navigation/core'
import { Platform } from 'react-native'

interface PropsStyles {
  backgroundColor: string;
}

const FocusedStatusBar = (props: PropsStyles) => {
  const isFocused = useIsFocused()

  if (Platform.OS === 'ios') {
    return isFocused ? <StatusBar style='auto' animated={true} {...props}  /> : null
  } else {
    return isFocused ? <StatusBar style='light' animated={true} {...props} /> : null
  }
}

export default FocusedStatusBar