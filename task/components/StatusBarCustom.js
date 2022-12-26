import React, { Component } from "react";
import { StatusBar } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
export default class StatusBarCustom extends Component {
  render() {
    return (
        <StatusBar barStyle={styles.content} backgroundColor={styles.bgcolor} />
    );
  }
}
const styles = StyleSheet.create({
  content: "dark-content",
  bgcolor: "rgba(240,241,240,255)",
  // bgcolor:'red',

});
