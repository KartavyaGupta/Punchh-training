import React from 'react'
import { Appearance, View } from 'react-native'
import { Text } from 'react-native';
const AppearanceApi = () => {
    colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
        // Use dark color scheme
      }
      else{
        console.log("light theme")
      }
  return (
    <View><Text>{colorScheme}</Text></View>
  )
}

export default AppearanceApi