import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Image
          source={require("../assets/images/triangles.png")}
          style={{ flex: 1, width: null, height: null }}
        />
      </View>
      <Text>RegisterScreen</Text>
      <Button
        title="go to login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
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
