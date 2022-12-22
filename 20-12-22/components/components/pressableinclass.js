import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Component } from "react";
class Pressableinclass extends Component {
  constructor() {
    super();
    this.state = {
      timesPressed: 0,
      textLog: 0,
    };
  }

  setTimesPressed = (PrevState, PrevProps) => {
    this.setState((PrevState) => {
        console.log(PrevState);
      return { timesPressed: PrevState.timesPressed + 1 };
    });
    if (this.state.timesPressed >= 1) {
        this.setState({textLog : this.state.timesPressed + "x onPress"});
    } else {
        this.setState({textLog : "pressed 0 times"});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Pressable
          onPress={this.setTimesPressed}
          style={(e) => {
            let { pressed } = e;
            console.log(e);
            return [
              {
                backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
              },
              styles.wrapperCustom,
            ];
          }}
        >
          {({ pressed }) => (
            <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
          )}
        </Pressable>
        <View style={styles.logBox}>
          <Text>{this.state.textLog}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f0abf0",
    backgroundColor: "#f9f9f9",
  },
});

export default Pressableinclass;
