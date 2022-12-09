import { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  Image,
  Keyboard,
  TouchableOpacity,
} from "react-native";

const Firstalert = () => {
  const [age, setAge] = useState(0);
  const handler = () => {
    if (age > 21) {
      Alert.alert("yes");
    } else {
      Alert.alert("no");
    }
  };
  return (
    <View style={styles1.input}>
      <TextInput
        onChangeText={(text) => {
          setAge(text);
        }}
      />
      <Button title="click me" onPress={handler} />
    </View>
  );
};
const styles1=StyleSheet.create({
    input:{
        marginTop:30,   
        backgroundColor:'yellow',
    }
});

export default Firstalert;
