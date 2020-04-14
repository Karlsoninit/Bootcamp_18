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
  Image,
  ImageBackground,
} from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/images/triangles.png")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.Os == "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View>
            <TextInput placeholder="email" />
            <TextInput secureTextEntry={true} placeholder="password" />
            <Button
              title="go to Register"
              onPress={() => {
                Keyboard.dismiss();
                navigation.navigate("Register");
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
  },
});
