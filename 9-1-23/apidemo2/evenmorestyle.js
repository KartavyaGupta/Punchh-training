import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function EvenMoreStyle() {
    // console.log(JSON.stringify(styles));
  return (
    <View style={{flex:1}}>
      <View style={styles.container1}><Text>text2</Text></View>
      <View style={styles.container2}><Text>text3</Text></View>
    </View>
  );
}
const styles = StyleSheet.create({
    container1:{
        height:300,
        width:300,
        borderColor:'red',
        borderWidth:StyleSheet.hairlineWidth,
    },
    container2:{
        height:300,
        width:300,
        borderColor:'blue',
        borderWidth:StyleSheet.hairlineWidth,
        borderStyle:'dotted',
    }
});
