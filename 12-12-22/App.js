import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import { Switch } from "react-native";
import { ActivityIndicator } from "react-native";

import Custom from "./custom";
export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [location, setLocation] = useState(false);
  const [storage, setStorage] = useState(false);
  const [mic, setMic] = useState(false);

  const toggleLocation = () => {
    setLocation((location) => !location);
  };

  const toggleStorage = () => {
    setStorage((storage) => !storage);
  };

  const toggleMic = () => {
    setMic((mic) => !mic);
  };

  const [myName, setMyName] = useState("");
  const [show, setShow] = useState(false);
  const showname = () => {
    setShow(true);
    setTimeout(()=>{console.log(myName); setShow(false);},3000)
   
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setAge(text);
          }}
        />
        <Custom name={name} age={age} />
      </View>
      <View>
        <Text>location is switched {location ? "on" : "off"}</Text>
        <Switch
          trackColor={{ false: "gray", true: "gray" }}
          onValueChange={toggleLocation}
          value={location}
          thumbColor={"blue"}
        />
        <Text>storage is switched {storage ? "on" : "off"}</Text>
        <Switch
          trackColor={{ false: "red", true: "green" }}
          onValueChange={toggleStorage}
          value={storage}
          thumbColor={"blue"}
        />
        <Text>mic is switched {mic ? "on" : "off"}</Text>
        <Switch
          trackColor={{ false: "red", true: "green" }}
          onValueChange={toggleMic}
          value={mic}
          thumbColor={"blue"}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setMyName(text);
          }}
        />
        <ActivityIndicator animating={show} color={"red"} size="large" />
        <Button
          onPress={showname}
          title="show name on console"
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "yellow",
    padding: 10,
    marginBottom: 2,
  },
});
