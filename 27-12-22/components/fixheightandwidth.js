import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
const Fixheightandwidth = () => {
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'flex-end'
  },
  view1: {
    height: 30,
    width: 30,
    backgroundColor: "red",
  },
  view2: {
    height: 60,
    width: 60,
    backgroundColor: "green",
  },
  view3: {
    width: 90,
    height: 90,
    backgroundColor: "blue",
  },
});

export default Fixheightandwidth;
