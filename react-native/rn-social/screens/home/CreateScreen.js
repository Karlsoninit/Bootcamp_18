import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { firestore, storage } from "../../firebase/config";
import { useSelector } from "react-redux";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { TextInput } from "react-native-gesture-handler";

export const CreateScreen = () => {
  const { userId, userName, avatar } = useSelector((state) => state.user);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [takePhoto, settakePhoto] = useState("");
  const [photo, setphoto] = useState("");
  const [postDescription, setPostDescription] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  });

  const snap = async () => {
    if (takePhoto) {
      let file = await takePhoto.takePictureAsync();
      setphoto(file.uri);
      handleUpload(file.uri);
    }
  };

  const handleUpload = async (img) => {
    const response = await fetch(img);
    const file = await response.blob();

    const uniquePostsId = Date.now().toString();

    await storage.ref(`image/${uniquePostsId}`).put(file);

    const urlPosts = await storage
      .ref("image")
      .child(uniquePostsId)
      .getDownloadURL();

    createPost(urlPosts);
  };

  const uploadPrifileAvatar = async () => {
    const avatarDownload = await fetch(avatar);
    const fileAvatar = await avatarDownload.blob();
    const uniqueAvatarId = Date.now().toString();

    await storage.ref(`image/${uniqueAvatarId}`).put(fileAvatar);

    const urlAvatar = await storage
      .ref("image")
      .child(uniqueAvatarId)
      .getDownloadURL();
  };

  const createPost = async (img) => {
    let location = await Location.getCurrentPositionAsync({});

    await firestore.collection("posts").add({
      image: img,
      userId,
      userName,
      location: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      avatar: "",
      comment: ["cool"],
      description: postDescription,
    });
  };

  const updatePostDescription = (value) => {
    setPostDescription(value);
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={(ref) => settakePhoto(ref)}
        style={{ width: 350, height: 300 }}
        type={type}
      >
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignSelf: "flex-end",
            alignItems: "center",
          }}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
            Flip
          </Text>
        </TouchableOpacity>
      </Camera>

      <Button title="Snap" onPress={snap} />
      <TextInput
        placeholder="commmmmmmmmment"
        onChangeText={updatePostDescription}
      />
      <TouchableOpacity
        onPress={createPost}
        style={{
          padding: 10,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "green",
        }}
      >
        <Text>CREATE POST</Text>
      </TouchableOpacity>
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
