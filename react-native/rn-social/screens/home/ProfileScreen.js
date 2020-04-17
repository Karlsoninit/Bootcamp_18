import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { CollectionDrawing } from "../../components/CollectionDrawing";
import { useSelector } from "react-redux";
import { auth, firestore } from "../../firebase/config";

export const ProfileScreen = () => {
  const [currentUserPost, setcurrentUserPost] = useState([]);

  const { userId, avatar } = useSelector((state) => state.user);

  useEffect(() => {
    getCurrentUserPosts();
  }, [userId]);

  const getCurrentUserPosts = async () => {
    await firestore
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setcurrentUserPost(data.docs.map((doc) => doc.data()))
      );
  };

  const signOut = async () => {
    await auth.signOut();
    dispatch({ type: "USER_SIGNOUT" });
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      <TouchableOpacity
        style={{
          marginTop: 100,
          borderColor: "green",
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
        }}
        onPress={signOut}
      >
        <Text>SignOut</Text>
      </TouchableOpacity>

      <Image
        style={{
          width: 350,
          height: 200,
          marginTop: 140,
          marginBottom: 10,
          borderRadius: 10,
        }}
        source={{ uri: avatar }}
      />

      <View style={{ marginTop: 400 }}>
        <CollectionDrawing data={currentUserPost} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
