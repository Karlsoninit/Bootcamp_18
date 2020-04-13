import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const ProfileScreen = ({ navigation, route }) => {
  console.log("navigation ---->", navigation);
  navigation.setOptions({
    title: `hello  ${route.params.nickName}`,
    headerRight: () =>
      route.params.auth && (
        <Ionicons
          style={{
            marginRight: 30,
          }}
          name="ios-nutrition"
          size={32}
          color="red"
          onPress={() => navigation.navigate("Blog")}
        />
      ),
  });
  return (
    <View style={styles.container}>
      <Text>{route.params.nickName}</Text>
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
