import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HomeScreen = ({ navigation, route }) => {
  const [textValue, setTextValue] = useState("");

  let content = "not found";

  if (route.params !== undefined) {
    content = route.params.product;
  }

  navigation.setOptions({
    headerLeft: () => (
      <Ionicons
        style={{
          marginLeft: 30,
        }}
        name="ios-basket"
        size={32}
        color="green"
        onPress={() => Alert.alert(content)}
      />
    ),
  });

  return (
    <View style={styles.container}>
      <TextInput placeholder="enterrrrrr ....." onChangeText={setTextValue} />
      <Text>HomeScreen</Text>
      <Button
        title="Go to profile"
        onPress={() =>
          navigation.navigate("Profile", { nickName: textValue, auth: true })
        }
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
