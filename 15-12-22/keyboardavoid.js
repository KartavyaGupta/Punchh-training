import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { Button } from "react-native";
import { StyleSheet } from "react-native";

const KeyboardAvoid = () => {
  return (
    <KeyboardAvoidingView
      style={Styles.kav}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log("dismiss keyboard");
        }}
      >
        <View style={Styles.tav}>
          <Text>{Platform.OS}</Text>
          <TextInput placeholder="username" />
          <View>
            <Button
              title="submit"
              onPress={() => {
                console.log("hello world");
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const Styles = StyleSheet.create({
  tav: {
    backgroundColor: "red",
    padding: 50,
  },
});

export default KeyboardAvoid;
