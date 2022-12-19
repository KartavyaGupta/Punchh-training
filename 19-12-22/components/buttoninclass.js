import React, { Component } from "react";
import { Button, View } from "react-native";
import ViewInClass from "./viewinclass";

export default class Buttoninclass extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={()=>{console.log("hello world")}}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
