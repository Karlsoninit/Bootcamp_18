import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { auth, firestore } from "../../firebase/config";

export const MainScreen = () => {
  const dispatch = useDispatch();

  const { userId, userPosts } = useSelector((state) => state.user);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    currentUser();
  }, []);

  useEffect(() => {
    getCollection();
  }, []);

  const currentUser = async () => {
    const currentUser = await auth.currentUser;
    // const querySnapshot = await firestore
    //   .collection("posts")
    //   .where("userId", "==", userId)
    //   .get();

    // const posts = querySnapshot.docs.map((doc) => doc.data());
    // console.log("posts", posts);
    dispatch({
      type: "CURRENT_USER",
      payload: {
        userName: currentUser.displayName,
        userId: currentUser.uid,
      },
    });
  };

  const signOut = async () => {
    await auth.signOut();
    dispatch({ type: "USER_SIGNOUT" });
  };

  const getCollection = async () => {
    await firestore
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) => setAllPosts(data.docs.map((doc) => doc.data())));
    // console.log("data", data);
    // const posts = querySnapshot.docs.map((doc) => doc.data());
    // console.log("posts", posts);
  };

  console.log("allPosts", allPosts);

  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <Button title="logOut" onPress={signOut} />
      <FlatList
        data={allPosts}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => {
          console.log("post", item);
          return (
            <Image
              style={{
                width: 350,
                height: 200,
                marginBottom: 10,
                borderRadius: 10,
              }}
              source={{ uri: item.image }}
            />
          );
        }}
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
