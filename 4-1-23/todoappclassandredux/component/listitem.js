import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native";
import { FlatList } from "react-native";
import { useState } from "react";
import { add_task_action } from "../redux/actions";
import { complete_task_action } from "../redux/actions";
import { delete_task_action } from "../redux/actions";
import { delete_all_task_action } from "../redux/actions";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import store1 from "../redux/store";
import React, { Component } from "react";

const COLORS = { primary: "#14145c", white: "#fff" };

export default class Listitem extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
        // <View><Text>1</Text></View>
      <View style={styles.listitem}>
        <View style={{ flex: 1, borderColor: COLORS.white, borderWidth: 2 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: COLORS.primary,
              textDecorationLine: this.props.todo?.completed ? "line-through" : "none",
            }}
          >
            {this.props.todo?.task}
          </Text>
        </View>
        {!this.props.todo.completed && (
          <TouchableOpacity
            style={[styles.actionicon]}
            onPress={() => {
              this.props.markToDoComplete(this.props.todo.id);
            }}
          >
            <Icon name="done" size={20} color={COLORS.white} />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.actionicon, { backgroundColor: "red" }]}
          onPress={() => {
            this.props.deleteToDo(this.props.todo.id);
          }}
        >
          <Icon name="delete" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
     );
  }
}


const styles = StyleSheet.create({
    actionicon: {
      height: 25,
      width: 25,
      backgroundColor: "green",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 5,
      borderRadius: 3,
    },
    listitem: {
      padding: 20,
      backgroundColor: COLORS.white,
      flexDirection: "row",
      borderRadius: 7,
      marginVertical: 10,
      borderColor: "black",
      borderWidth: 2,
    },
    header: {
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 10,
    },
    footer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      alignItems: "center",
      paddingHorizontal: 20,
      backgroundColor: COLORS.white,
      flexDirection: "row",
    },
    inputcontainer: {
      backgroundColor: COLORS.white,
      flex: 1,
      height: 50,
      marginVertical: 20,
      borderRadius: 30,
      paddingHorizontal: 30,
      marginRight: 20,
      alignItems: "center",
      flexDirection: "row",
      borderColor: COLORS.primary,
      borderWidth: 2,
    },
    iconcontainer: {
      height: 50,
      width: 50,
      backgroundColor: COLORS.primary,
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
    },
  });