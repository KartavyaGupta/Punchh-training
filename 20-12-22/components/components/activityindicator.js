import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default class Activityindicatorinclass extends Component {
  render() {
    return (<>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="red" />
        <ActivityIndicator size="large" color="blue" />
        </>
    )
  }
}
