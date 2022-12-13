import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
// import { Pressable } from "react-native";
import { useState } from "react";
import { RefreshControl } from "react-native";
const Refresh_ex = () => {
  const [refresh, setRefresh] = useState(false);
  const pullme = () => {
    setRefresh(true);
    console.log("set to true");
    setTimeout(() => {
      setRefresh(false);
      console.log("set to false");
    }, 10000);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              pullme();
            }}
            colors={["red"]}
          />
        }
      >
        <Text>pull me to refresh</Text>
      </ScrollView>
    </View>
  );
};
export default Refresh_ex;
//can i give an array in style
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
