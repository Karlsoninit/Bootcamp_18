import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { firestore } from "../../firebase/config";
export const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  console.log("item", route.params.item);

  // create new collections comments and add new comment

  const handlePostComment = async () => {
    await firestore
      .collection("posts")
      .doc(route.params.item.id)
      .collection("comments")
      .add({
        comment,
      });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <TextInput placeholder="commments" onChangeText={setComment} />
          <Button title="send" onPress={handlePostComment} />
          <Text>COMMENTS</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
