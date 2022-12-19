import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

class Toc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {this.state.count}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Press Here</Text>
        </TouchableOpacity>
        <TouchableHighlight style={styles.button} onPress={this.onPress}>
          <Text>Press Here</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });
  
export default Toc;
