import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { Component } from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "b7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3c68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "5694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default class FlatListInClass extends Component  {
  render(){
    return (
    <FlatList
      data={DATA}
      renderItem={(element)=>{return <Text style={styles.text}>{element.item.title}</Text>;}}
      keyExtractor={(element) => { return element.id} } horizontal showsHorizontalScrollIndicator={true}
    />
  )};
};  


const styles = StyleSheet.create({
    text: {
      fontSize: 82,
    },
  });

