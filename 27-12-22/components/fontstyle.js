import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
        <Text>checking style precedence</Text>
        <View><Text style={[styles.red,styles.blue]}>hello world</Text></View>
        <View><Text style={[styles.blue,styles.red]}>hello world</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    red:{
        fontSize:10,
        color:'red',
        textDecorationLine:'underline',
    },
    blue:{
        fontSize:30,
        color:'blue',
    }
});

export default LotsOfStyles;
