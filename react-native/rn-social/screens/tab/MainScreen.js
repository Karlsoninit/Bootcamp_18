import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { db } from "../../firebase/config";

export const MainScreen = () => {
  const [name, setname] = useState("");
  useEffect(() => {
    currentUser();
  }, []);

  const currentUser = async () => {
    const currentUser = await db.auth().currentUser;
    console.log("currentUser inner nain screen", currentUser);
    setname(currentUser.displayName);
  };

  const signOut = async () => {
    await db.auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text>hello {name}</Text>
      <Button title="logOut" onPress={signOut} />
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
