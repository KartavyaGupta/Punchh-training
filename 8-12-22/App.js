import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import react, { useState } from "react";
import mystyle from "./mystyle";


export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [superManName, setSuperManName] = useState("clark kent");
  const [fruit, setFruit] = useState([
    { name: "1", key: 1 },
    { name: "2", key: 2 },
    { name: "3", key: 3 },
    { name: "4", key: 4 },
    { name: "5", key: 5 },
    { name: "6", key: 6 },
    { name: "7", key: 7 },
    { name: "8", key: 8 },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>hello world</Text>
      <Text style={styles.textContainer}>hello world</Text>
      <Text style={styles.textContainer}>hello world</Text>
      <Button
        onPress={() => {
          Alert.alert("button clicked");
        }}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          setAge(26);
          setName("kartavya");
          Alert.alert("age and name set");
        }}
        title="set name to kartavya and  to 26"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>
        
        my name is {name} and age is {age}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setSuperManName(text);
        }}
        placeholder="use this box to set real name of super man"
      />
      <Text>real name of super man is {superManName}</Text>
      <Text>Using ScrollView</Text>
      <ScrollView>
        {fruit.map((item) => {
          return (
            <View
              key={(item) => {
                return item.key;
              }}
              style={styles.item}
            >
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
      <FlatList
        data={fruit}
        keyExtractor={(item) => {
          return item.key;
        }}
        style={styles.list}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />

      <FlatList
        data={fruit}
        keyExtractor={(item) => {
          return item.key;
        }}
        style={styles.list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View>
                <Text>{item.name}</Text>
              </View>
           </TouchableOpacity>
          );
        }}
      />
  <Text style={mystyle.text}>hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  textContainer: {
    color: "white",
    backgroundColor: "blue",
  },
  input: {
    width: "40%",
    backgroundColor: "yellow",
    border: "1px solid black",
  },
  item: {
    backgroundColor: "yellow",
    padding: "1%",
    margin: "1%",
  },
  list: {
    backgroundColor: "yellow",
    padding: "1%",
    margin: "1%",
  },

});

