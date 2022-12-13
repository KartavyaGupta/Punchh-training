import React from 'react'
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
const Textprops = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world </Text>
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
    text:{
        color:'blue',
        // fontFamily:'Arial',
        fontStyle:'italic',
        fontWeight:'bold',
        letterSpacing:10,
        textAlign:'justify',
        textDecorationLine:'line-through underline',
        textDecorationColor:'yellow',
        textTransform:'Uppercase',
        fontSize:'30'
    }
  });
  

export default Textprops;