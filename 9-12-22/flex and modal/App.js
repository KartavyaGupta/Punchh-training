import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Modal } from "react-native";
import { Button } from "react-native";
export default function App() {
  const [age, setAge] = useState(21);
  const [name, setName] = useState("rahul");
  const [gender, setGender] = useState("male");
  const [v, setV] = useState(false);
  return (
    <View style={styles.container}>
      {/* <View style={styles.container1}></View>
      <View style={styles.container2}></View>
      <View style={styles.container3}></View> */}
      <Text>hello world</Text>
      <Modal visible={v}>
        <Text>
          {" "}
          name is {name} age is {age} gender is {gender}{" "}
        </Text>
      </Modal>
      <Button
        title="click me to show modal"
        onPress={() => {
          setV(true);
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whiete",
  },
  container1: {
    flex: 30,
    backgroundColor: "red",
  },
  container2: {
    flex: 30,
    backgroundColor: "yellow",
  },
  container3: {
    flex: 30,
    backgroundColor: "green",
  },
});
