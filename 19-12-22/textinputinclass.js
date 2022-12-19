import React, { Component } from "react";
import { View, Button, TextInput,Text } from "react-native";
import { setState } from "react";
export default class Textinputinclass extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.name = "hello";
  }
  render() {
    return (
      <View>
        <TextInput onChangeText={(text) => this.setState({ name: text })} />
        <Text>{this.state.name}</Text>
      </View>
    );
  }
}
