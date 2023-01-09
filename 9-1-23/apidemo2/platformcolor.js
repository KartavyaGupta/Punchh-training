import React from "react";
import { Platform, PlatformColor, StyleSheet, Text, View } from "react-native";

const PlatformColor1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>I am a special label color!</Text>
      <Text style={styles.label1}>I am second label</Text>


    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    padding: 16,
    ...Platform.select({
      ios: {
        color: PlatformColor("label"),
        backgroundColor: PlatformColor("systemTealColor"),
      },
      android: {
        color: PlatformColor("?android:attr/textColor"),
        backgroundColor: PlatformColor("@android:color/holo_blue_bright"),
      },
      default: { color: "black" },
    }),
  },
  label1:{
    padding:16,
    ...Platform.select({
        ios:{
            color: PlatformColor("label"),
            backgroundColor: PlatformColor("label"),
        },
        android:{
            color: PlatformColor("@android:color/holo_red_light"),
            backgroundColor: PlatformColor("@android:color/holo_green_light"),
        }
    })
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlatformColor1;
