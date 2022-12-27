import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

const Flexwraprow = () => {
  return <View style={styles.container}>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
    <View style={styles.view}></View>
  </View>


}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'tan',
        flexWrap:'wrap',
        flexDirection:'row',
        alignContent:'space-around'
    },
    view:{
        height:'10%',
        width:'10%',
        backgroundColor:'yellow',
        margin:'10%',
    }
})
export default Flexwraprow