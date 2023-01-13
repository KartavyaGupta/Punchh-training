import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import COLORS from "../../consts/colors";

// const SecondaryButton = ({ title, onPress = () => {} }) => {
//   return (
//     <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
//       <View style={{ ...style.btnContainer, backgroundColor: COLORS.white }}>
//         <Text style={{ ...style.title, color: COLORS.primary }}>{title}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

export default class SecondaryButton extends Component {
  constructor(props) {
    super(props);
    let { title, onPress = () => {} } = this.props;
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.onPress}>
        <View style={{ ...style.btnContainer, backgroundColor: COLORS.white }}>
          <Text style={{ ...style.title, color: COLORS.primary }}>{this.title}</Text>
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

export { SecondaryButton };
