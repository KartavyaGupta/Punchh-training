import React from "react";
import { View } from "react-native";
import { Button } from "react-native";
import { ToastAndroid } from "react-native";
import { StyleSheet } from "react-native";

const Androidtoast = () => {


    const showAndroidToast=()=>{
        ToastAndroid.show("welcome to show android toast",ToastAndroid.SHORT);
        console.log("andoid toast");
    }
    const showAndroidToastWithGravity=()=>{
        ToastAndroid.showWithGravity("welcome to show android toast",ToastAndroid.SHORT,ToastAndroid.CENTER)
    }
    const showAndroidToastWithGravityAndOffset=()=>{
        ToastAndroid.showWithGravityAndOffset("welcome to show android toast",ToastAndroid.SHORT,ToastAndroid.CENTER,60,60)
    }
  return (
    <View style={styles.container}>
      <Button title="show toast" onPress={()=>{showAndroidToast()}}></Button>
      <Button title="show toast with gravity" onPress={()=>{showAndroidToastWithGravity()}}></Button>
      <Button title="show toast with gravity and offset" onPress={()=>{showAndroidToastWithGravityAndOffset()}}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Androidtoast;
