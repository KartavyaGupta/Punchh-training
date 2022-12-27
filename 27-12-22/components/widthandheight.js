import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
const WidthAndHeightPercent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection:'column',
  },
  view1:{
    height:'50%',
    backgroundColor:'aqua',

  },
  view2:{
    height:'40%',
    backgroundColor:'green',

  },
  view3:{
    height:'30%',
    backgroundColor:'tan',

  },
});

export default WidthAndHeightPercent;
