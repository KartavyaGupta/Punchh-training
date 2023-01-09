import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Styles1() {
  console.log(newstyle);
  console.log(newstyle1);
  return (
    <ScrollView style={styles.outercontainer}>
      <View style={styles.outercontainer}>
        <View style={styles.container}>
          <Text>hello world</Text>
        </View>
        <View style={styles.container1}>
          <Text style={newstyle}>hello world1</Text>
        </View>
        <View style={styles.container2}>
          <Text>hello world2</Text>
        </View>
        <View style={styles.container2}>
          <Text style={newstyle1}>hello world3</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outercontainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 30,
  },
  text2: {
    color: "white",
  },
  container2: {
    flex: 1,
    backgroundColor: "gold",
    alignItems: "center",
    justifyContent: "center",
  },
});

const abcstyle = StyleSheet.create({
  text3: {
    textDecorationColor: "red",
    textDecorationLine: "underline",
  },
});
const newstyle = StyleSheet.compose(styles.text1, styles.text2);
const newstyle1 = StyleSheet.flatten([
  styles.text1,
  abcstyle.text3,
  styles.text2,
]);
