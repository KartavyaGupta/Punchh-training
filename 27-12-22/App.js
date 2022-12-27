import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LotsOfStyles from "./components/fontstyle";
import Fixheightandwidth from "./components/fixheightandwidth";
import WidthAndHeightPercent from "./components/widthandheight";
import Scrollable from "./components/scrollable";
import Flexwrap from "./components/flexwrap";
import Flexwraprow from "./components/flexwraprow";
export default function App() {
  return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
        {/* <LotsOfStyles /> */}
        {/* <Fixheightandwidth /> */}
        {/* <WidthAndHeightPercent /> */}
        {/* <Flexwrap /> */}
        {/* <Flexwrap /> */}
        <Flexwraprow />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
