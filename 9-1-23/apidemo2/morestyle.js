import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MoreStyle() {
    console.log(JSON.stringify(styles));
  return (
    <View style={{flex:1}}>
      <View><Text>text1</Text></View>
      <View style={styles.container1}><Text>text2</Text></View>
      <View style={styles.container2}><Text>text3</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({

    container1:{
        ...StyleSheet.absoluteFill,
        height:'40%',
        backgroundColor:'blue',
    },
    container2:{
        ...StyleSheet.absoluteFill,
        height:'30%',
        backgroundColor:'green',

    }
});
