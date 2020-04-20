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
      <Image
        style={styles.avatar}
        source={{
          uri: avatar
            ? avatar
            : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fe8%2FCandymyloveYasu.png&f=1&nofb=1",
        }}
      />

      <TouchableOpacity style={styles.btn} onPress={signOut}>
        <Text>SignOut</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 400 }}>
        <CollectionDrawing data={currentUserPost} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    width: 350,
    height: 200,
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 10,
  },
  btn: {
    marginTop: 30,
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
