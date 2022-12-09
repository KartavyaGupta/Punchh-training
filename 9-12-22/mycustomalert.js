import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  Image,
  Keyboard,
} from "react-native";

const Customalert = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handler = () => {
    Alert.alert("details", "are you sure you want to submit?", [
      {
        text: "yes",
        onPress: () => {
          console.log("yes is pressed");
        },
      },
      { text: "no", onPress: () => console.log("no is pressed") },
    ]);
  };
  return (
    <View>
      <TextInput
        style={styles3.input}
        onChangeText={(text) => {
          setAge(text);
        }}
        placeholder="age"
      />

      <TextInput
        style={styles3.input}
        onChangeText={(text) => {
          setName(text);
        }}
        placeholder="name"
      />

      <TextInput
        style={styles3.input}
        onChangeText={(text) => {
          setGender(text);
        }}
        placeholder="gender"
      />

      <Button title="click me for custom dialog box" onPress={handler} />
      <Text>
        {" "}
        name is : {name} age is : {age} gender is :{gender}
      </Text>
    </View>
  );
};

const styles3 = StyleSheet.create({
  input: {
    backgroundColor: "yellow",
  },
});
export default Customalert;
