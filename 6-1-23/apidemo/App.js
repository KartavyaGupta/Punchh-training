import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { Vibrationdemo } from './Vibration'
import TransformsDemo from './transforms'
export default function App() {
  return (
    <View style={styles.container}>
        <Vibrationdemo />
        <TransformsDemo />
        <Text>Hellow</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  