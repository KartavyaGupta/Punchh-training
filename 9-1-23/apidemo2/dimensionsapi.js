import React from "react";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
const DimensionsApi = () => {
  const windowdata = Dimensions.get("window");
  const screendata= Dimensions.get("screen");
  console.log(windowdata);
  return (
    <View>
      <Text>hello wolrd</Text>
      <Text>{JSON.stringify(windowdata)}</Text>
      <Text>{JSON.stringify(screendata)}</Text>
    </View>
  );
};

export default DimensionsApi;
