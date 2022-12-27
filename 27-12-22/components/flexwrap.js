import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'

const Flexwrapmine = () => {
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
        flexDirection:'column',
    },
    view:{
        height:100,
        width:100,
        backgroundColor:'yellow',
        margin:10,
    }
})
export default Flexwrapmine