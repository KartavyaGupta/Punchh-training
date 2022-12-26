import { Component } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
export default class AccountTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ACCOUNT HISTORY</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    height:60,
    backgroundColor:'rgba(245,245,245,255)',
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'rgba(47,154,239,255)',
    borderBottomWidth:1,
  
  },
  text: {
    color:'rgba(0,92,168,255)',
    fontWeight:'bold',
    fontSize:17,
  },
});
