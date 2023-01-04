import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store1 from "./redux/store";
import List from "./component/list";

export default function App() {
  return (
    <Provider store={store1}>
      <View style={styles.container}>
        <List />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent:'space-between',
    

  },
});
