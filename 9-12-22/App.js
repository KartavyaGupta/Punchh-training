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

import DisplayAnImage from "./displayanimage.js";
import Customalert from "./mycustomalert";
import Firstalert from "./firstalert.js";
import Custombutton from "./custombutton.js";
import Exampleeffect from "./exampleeffect.js";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View>
        <Firstalert />
        <DisplayAnImage />
        <Customalert />
        <Custombutton />
        <Exampleeffect />
      </View>
    </TouchableWithoutFeedback>
  );
}