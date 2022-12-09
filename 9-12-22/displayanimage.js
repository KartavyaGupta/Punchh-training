import React from "react";
import { useState } from "react";
import { View, Image, StyleSheet ,Button} from "react-native";

const DisplayAnImage = () => {
  const [src, setSrc] = useState(require("./assets/head.jpg"));
  const cointosshandler = () => {
    if (src == require("./assets/head.jpg")) {
      setSrc(require("./assets/tail.jpg"));
    } else {
      setSrc(require("./assets/head.jpg"));
    }
  };
  return (
    <View>
      <Image style={styles2.tinyLogo} source={src} />
      <Button title="coin toss" onPress={cointosshandler} />
    </View>
  );
};
const styles2 = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
export default DisplayAnImage;
