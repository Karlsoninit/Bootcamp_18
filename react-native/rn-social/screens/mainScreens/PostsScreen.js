import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { auth, firestore } from "../../firebase/config";
import { CollectionDrawing } from "../../components/CollectionDrawing";

export const PostsScreen = () => {
  const dispatch = useDispatch();

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    currentUser();
  }, []);

  useEffect(() => {
    getCollection();
  }, []);

  const currentUser = async () => {
    const currentUser = await auth.currentUser;

    dispatch({
      type: "CURRENT_USER",
      payload: {
        userName: currentUser.displayName,
        userId: currentUser.uid,
      },
    });
  };

  const getCollection = async () => {
    await firestore
      .collection("posts")
      .onSnapshot((data) => setAllPosts(data.docs.map((doc) => doc.data())));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <CollectionDrawing data={allPosts} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    alignItems: "center",
    justifyContent: "center",
  },
});
