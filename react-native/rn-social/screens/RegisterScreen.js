import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
