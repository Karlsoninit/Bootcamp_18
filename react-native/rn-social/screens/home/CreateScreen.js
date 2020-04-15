import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { firestore } from "../../firebase/config";
import { useSelector } from "react-redux";

export const CreateScreen = () => {
  const { userId, userName } = useSelector((state) => state.user);

  const addPosts = async () => {
    await firestore.collection("posts").add({
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fwilderness-travel%2Fimage%2Fupload%2Fc_scale%2Cdpr_auto%2Cw_auto%2Ff_auto%2Cq_auto%2Fv1%2Ftrips%2Feurope%2Fitaly%2Famalfi-and-capri%2F1-slide-italy-capri-amalfi-coast-hill-side-pano&f=1&nofb=1",

      like: "90",
      userId: userId,
      userName: userName,
      status: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text>CreateScreen</Text>
      <Button title="Add post" onPress={addPosts} />
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

// {
//   image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkapets.net%2Fwp-content%2Fuploads%2F2019%2F04%2Ftravel-editor-favorite-products.jpg&f=1&nofb=1";

//   like: "78";
//   userId: "TGpEe1Dg8EPnvAcRSVr33gd7FJW2";
//   userName: "Bob";
// }
