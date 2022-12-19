import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import react, { useState } from "react";
import mystyle from "./mystyle";
import Textinclass from "./components/textinclass";
import ViewInClass from "./components/viewinclass";
import Buttoninclass from "./components/buttoninclass";
import Alertinclass from "./components/alertinclass";
import Textinputinclass from "./textinputinclass";
import FlatListInClass from "./flastlistinclass";
import Toc from "./components/toc";

export default function App() {
  return (
    <View>
      <Textinclass />
      <ViewInClass />
      <Buttoninclass />
      <Alertinclass />
      <Textinputinclass />
      {/* touchable highlight and touchableopacity feedback */}
      <FlatListInClass /> 
      <Toc/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  textContainer: {
    color: "white",
    backgroundColor: "blue",
  },
  input: {
    width: "40%",
    backgroundColor: "yellow",
    border: "1px solid black",
  },
  item: {
    backgroundColor: "yellow",
    padding: "1%",
    margin: "1%",
  },
  list: {
    backgroundColor: "yellow",
    padding: "1%",
    margin: "1%",
  },
});
