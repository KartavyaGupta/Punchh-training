import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";

export default class Imageinclass extends Component {
  render() {
    return (
      <View>
        <Image source={require("../image.jpg")} />
      </View>
    );
  }
}
