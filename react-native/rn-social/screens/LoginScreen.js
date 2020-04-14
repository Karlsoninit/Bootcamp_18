import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.Os == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View>
          <TextInput placeholder="email" />
          <TextInput secureTextEntry={true} placeholder="password" />
          <Button title="go to Register" onPress={() => Keyboard.dismiss()} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
