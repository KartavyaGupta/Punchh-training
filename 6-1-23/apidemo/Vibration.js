import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Vibration } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';
export const Vibrationdemo = () =>{
  const [pattern1,setPattern1]=useState([1000,2000]);
  vibratefor2sec=()=>{
    Vibration.vibrate(2000);
  }
  vibratepattern = () =>{
    Vibration.vibrate(pattern1,true);
  }
  vibratepatternnorepeat = () =>{
    Vibration.vibrate(pattern1,false);
  }
  vibratecancel = () =>{
    Vibration.cancel();
  }
    
  return (
    <View style={styles.container}>
        <Button onPress={vibratefor2sec} title="press for 2 sec vibrate"/>
        <Button onPress={vibratepattern} title="press for pattern vibrate repeat"/>
        <Button onPress={vibratepatternnorepeat} title="press for pattern vibrate norepeat  "/>
        <Button onPress={vibratecancel} title="press for vibration cancel"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
