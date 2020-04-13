import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const BlogScreen = ({ navigation }) => {
  navigation.setOptions({
    headerLeft: () => (
      <Button
        title="go to Home"
        onPress={() => navigation.navigate("Home", { product: "apple" })}
      />
    ),
  });
  return (
    <View style={styles.container}>
      <Text>BlogScreen</Text>
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
