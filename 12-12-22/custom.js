import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { Alert } from 'react-native'
import { StyleSheet } from 'react-native'
    
const Custom = (props) => {
    if(props.age>18){
        // Alert.alert("notice","you are of legal age");
        console.log("you are of >18 age")
    }
  return (
    <View><Text>hello your name is {props.name} and your age is {props.age}</Text></View>
  )
}

export default Custom