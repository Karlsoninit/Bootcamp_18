import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/config";

export const MainScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    currentUser();
  }, []);

  const currentUser = async () => {
    const currentUser = await db.auth().currentUser;
    console.log("currentUser inner nain screen", currentUser.displayName);
    console.log("currentUser inner nain screen", currentUser.uid);
    dispatch({
      type: "CURRENT_USER",
      payload: { userName: currentUser.displayName, userId: currentUser.uid },
    });
  };

  const signOut = async () => {
    await db.auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text>hello</Text>
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
