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
import Listitem from "./listitem";
import React, { Component } from "react";

const COLORS = { primary: "#14145c", white: "#fff" };

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textinput:""
    };
  }
  addTodo = () => {
    //newly constructed object will be sent as payload
    if (this.state.textinput == "") {
      Alert.alert("Error", "Please input to do");
      return null;
    }
    const newToDo = {
      id: Math.random(),
      task: this.state.textinput,
      completed: false,
    };
    this.props.fromprops_addtodo(newToDo);
    // setTextInput("");
    this.setState({textinput:""})
  };
  markToDoComplete = (todoid) => {
    //id of the object to be marked complete will be sent as payload
    console.log(todoid);
    this.props.fromprops_completetodo(todoid);
  };

  deleteToDo = (todoid) => {
    this.props.fromprops_deletetodo(todoid);
  };

  deleteAllToDo = () => {
    this.props.fromprops_deletealltodo();
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={styles.header}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, color: COLORS.primary }}
          >
            TODO APP
          </Text>
          <TouchableOpacity onPress={this.deleteAllToDo}>
            <Icon name="delete" size={25} color={"red"} />
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.todos}
          renderItem={({ item }) => <Listitem todo={item} {...this.props} markToDoComplete={this.markToDoComplete} deleteToDo={this.deleteToDo}/>}
          contentContainerStyle={{
            padding: 20,
            paddingBottom: 20,
            // backgroundColor: "pink",
          }}
        />

        <View style={styles.footer}>
          <View style={styles.inputcontainer}>
            <TextInput
              placeholder="add todo"
              value={this.state.textinput}
              style={{ flex: 1 }}
              onChangeText={(text) => {
                this.setState({textinput:text})
              }}
            />
          </View>
          <TouchableOpacity onPress={this.addTodo}>
            <View style={styles.iconcontainer}>
              <Icon name="add" color={COLORS.white} size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todolist.todos,

  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    fromprops_addtodo: (data) => dispatch(add_task_action(data)),
    fromprops_completetodo: (data) => dispatch(complete_task_action(data)),
    fromprops_deletetodo: (data) => dispatch(delete_task_action(data)),
    fromprops_deletealltodo: () => dispatch(delete_all_task_action()),
  };
};
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

export default connect(mapStateToProps, mapStateToDispatch)(List);
