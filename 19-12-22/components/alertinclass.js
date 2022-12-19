import React, { Component } from "react";
import { Alert, Text, View,Button } from "react-native";
export default class Alertinclass extends Component {
  render() {
    const myfunc = () => {
      Alert.alert("Alert Title", "My Alert Msg", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      console.log("hello world");
    };
    return (
      <View>
        <Button
          onPress={myfunc}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
