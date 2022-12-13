import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Pressable } from "react-native";
import { useState } from "react";

const Pressable_ex = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>counter {count}</Text>
      <Pressable
        onPress={() => {
          setCount(count + 1);
        }}
        style={({pressed})=>[{backgroundColor: pressed ? "red" : "yellow"}]}
      >
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default Pressable_ex;
