import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default TransformsDemo = () => {
  return (
    <View style={styles.outercontainer}>
      <View style={styles.container}><Text>hello world</Text></View>
      <View style={styles.transformcontainer}><Text>hello world</Text></View>
      <View style={styles.anothertransformcontainer}><Text>hello world</Text></View>
      <View style={styles.newtransformcontainer}>
        <Text>hello world</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  outercontainer: {
    // flexDirection:'column',
  },
  container: {
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
  transformcontainer: {
    height: 100,
    width: 100,
    backgroundColor: "yellow",
    transform: [
      { scaleX: 1.5 },
      { scaleY: 2 },
      { translateX: 20 },
      { translateY: 10 },
    ],
  },
  anothertransformcontainer: {
    height: 100,
    width: 100,
    backgroundColor: "pink",
    transform: [{ rotateX: "0deg" }, { rotateY: "0deg" }],
  },
  newtransformcontainer: {
    height: 100,
    width: 100,
    backgroundColor: "gray",
    transform: [{ skewX: "40deg" }, { skewY: "10deg" }],
  },
});
