import { View } from "react-native";
import { StyleSheet } from "react-native";
import StatusBarCustom from "./components/StatusBarCustom";
import AccountTab from "./components/AccountTab";
import SectionListCustom from "./components/SectionListCustom";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBarCustom />
      <AccountTab />
      <SectionListCustom />
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(239,239,239,255)',
  }
})
