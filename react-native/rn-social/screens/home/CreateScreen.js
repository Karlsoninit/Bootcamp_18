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

export const CreateScreen = () => {
  const { userId, userName } = useSelector((state) => state.user);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [takePhoto, settakePhoto] = useState("");
  const [photo, setphoto] = useState("");
  // const [location, setlocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      console.log(status === "granted");
      console.log("status", status);
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

    const uniqueId = Date.now().toString();

    await storage.ref(`image/${uniqueId}`).put(file);

    const url = await storage.ref("image").child(uniqueId).getDownloadURL();
    console.log("url", url);
    createPost(url);
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
    });
  };

  console.log("photo ---->>", photo);
  return (
    <View style={styles.container}>
      <Text>CreateScreen</Text>

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
