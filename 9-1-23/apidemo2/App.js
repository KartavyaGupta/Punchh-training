import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Styles1 from "./styles1";
import MoreStyle from "./morestyle";
import EvenMoreStyle from "./evenmorestyle";
import ShareExample from "./shareapi";
import PlatformColor1 from "./platformcolor";
import Plat from "./platformapi";
import AppearanceApi from "./appearanceapi";
import DimensionsApi from "./dimensionsapi";
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Styles1 /> */}
      {/* <MoreStyle /> */}
      {/* <EvenMoreStyle /> */}
      {/* <ShareExample /> */}
      {/* <PlatformColor1 /> */}
      {/* <Plat /> */}
      {/* <AppearanceApi /> */}
      <DimensionsApi />
    </View>
  );
}
