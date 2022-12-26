import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

const RenderRest = (f) => {
  let { title_in, subtitle_in, description_in, points_in, items_in } = f;

  // console.log(title_in, subtitle_in, description_in, points_in, items_in);
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>{title_in}</Text>
      <Text style={styles.subtitle}>{subtitle_in}</Text>
      <Text style={styles.description}>You were gifted {description_in}</Text>
      <View style={styles.picontainer}>
        <View style={styles.pointcontainer}>
          <Text style={styles.pointstyle}>Points: {points_in}</Text>
        </View>
        <View style={styles.itemcontainer}>
          <Text style={styles.pointstyle}>Items: {items_in}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  picontainer:{
    flexDirection:"row",
  },
  pointcontainer: {
    backgroundColor: "rgba(224,230,238,255)",
    padding:5,
    borderRadius:10,
    marginTop:5,
  },
  itemcontainer: {
    marginLeft:10,
    backgroundColor: "rgba(224,230,238,255)",
    padding:4,
    borderRadius:10,
    marginTop:5,



  },
  title: {
    color: "rgba(46,42,43,255)",
    fontWeight: "bold",
  },
  subtitle: {
    fontStyle: "italic",
    color: "rgba(11,108,176,255)",
  },
  description: {
    color: "rgba(71,78,85,255)",
    fontSize:13,
  },
  pointstyle:{
    color:"rgba(0,95,169,255)",
    fontSize:12,
  }
});

export default RenderRest;
