import React, { useState } from "react";
import { View, Switch, StyleSheet, Button, Text } from "react-native";
import { Component } from "react";
class Switchinclass extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }
  toggleSwitch=(prevState,prevProps)=>{
    console.log("in toggle switch")
    this.setState((prevState)=>{
        return {toggle:!prevState.toggle}
    })
  }
  render() {
    return (
      <View>
        <Button
          onPress={this.toggleSwitch}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{this.state.toggle + ""}</Text>
      </View>
    );
  }
}
export default Switchinclass;