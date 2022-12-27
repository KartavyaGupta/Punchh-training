import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
const Scrollable = () => {
  return (
    <View style={styles.outercontainer}>
      <Text>hello world</Text>
      <ScrollView style={styles.container}>
        <View style={styles.view}></View>
        <View style={styles.view}></View>
        <View style={styles.view}></View>
        <View style={styles.view}></View>
        <View style={styles.view}></View>
        <View style={styles.view}></View>
      </ScrollView>
      <ScrollView style={styles.container}>
        <View style={styles.view1}></View>
        <View style={styles.view1}></View>
        <View style={styles.view1}></View>
        <View style={styles.view1}></View>
        <View style={styles.view1}></View>
        <View style={styles.view1}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    outercontainer:{
        flex:1,
    },
  container: {
    flex: 0.5,
    flexDirection: "column",
    backgroundColor: "red",
  },
  view: {
    height: 200,
    backgroundColor: "yellow",
    margin: 10,
  },
  view1: {
    height: 200,
    backgroundColor: "green",
    margin: 10,
  },
});

export default Scrollable;
