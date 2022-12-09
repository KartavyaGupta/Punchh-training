import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  Image,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import React from "react";

const Custombutton = () => {
  return (
    <TouchableOpacity >
      <View style={styles4.button}><Text>Custom Button using touchable opacity</Text></View>
    </TouchableOpacity>
  );
};
const styles4=StyleSheet.create({
  button:{
      borderColor:'green',   
      backgroundColor:'yellow',
      borderWidth:2,
      borderRadius:10,

  }
});
export default Custombutton;
