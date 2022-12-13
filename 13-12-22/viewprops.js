import React from 'react'
import { View } from 'react-native';
import { Image,StyleSheet } from 'react-native';
import { Text } from 'react-native';
const Viewprops = () => {
  return (
    <View style={styles.container}>
        <Text>hello world</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20,
      margin:20
    },
  });
  

export default Viewprops;