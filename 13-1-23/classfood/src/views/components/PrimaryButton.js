import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import COLORS from "../../consts/colors";

// const PrimaryButton = ({title, onPress = () => {}}) => {
//   return (
//     <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
//       <View style={style.btnContainer}>
//         <Text style={style.title}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

export default class PrimaryButton extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress}>
        <View style={style.btnContainer}>
          <Text style={style.title}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  title: { color: COLORS.white, fontWeight: "bold", fontSize: 18 },
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
