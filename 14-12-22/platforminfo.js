import React from "react";
import { View, Platform } from "react-native";
import { Text } from "react-native";

const Platforminfo = () => {
  return (
    <View>
      <Text> os: {Platform.OS} </Text>
      <Text> version {Platform.Version}</Text>
      <Text>is tv {Platform.isTV + ' '}</Text>
      <Text>is ipad {Platform.isPad + ''}</Text>
      <Text>
        platform constants {JSON.stringify(Platform.constants, null, 2) + " "}
      </Text>
    </View>
  );
};

export default Platforminfo;
