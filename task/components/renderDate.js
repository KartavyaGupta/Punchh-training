import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
const RenderDate = (f) => {
  // console.log("f is", f);
  let { date_in } = f;
  let [date,month] = date_in.split(" "); 
  return <Text style={styles.text}>{date}{"\n"}{month}</Text>;
};
const styles=StyleSheet.create({
  text:{
    textAlign:'center',
    textAlignVertical:'center',
    color:'white',
  }
})
export default RenderDate;
