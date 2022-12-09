import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useEffect, useState } from "react";
const Exampleeffect = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.warn("dom is updated");
  });
  return (
    <View>
      <Text> {num} </Text>
      <Button title="increment num"
        onPress={() => {
          setNum(num + 1);
        }}
      />
    </View>
  );
};
export default Exampleeffect;
