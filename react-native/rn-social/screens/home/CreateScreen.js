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

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permission to access location was denied");
  //     }
  //     let location = await Location.getCurrentPositionAsync({});
  //     setlocation(location);
  //   })();
  // });

  const snap = async () => {
    if (takePhoto) {
      let file = await takePhoto.takePictureAsync();

      setphoto(file.uri);
      uploadStorage(file.uri);
    }
  };

  const uploadStorage = async (img) => {
    const response = await fetch(img);
    const file = await response.blob(response);

    const uploadTask = await storage.ref(`image/${"travelOne"}`).put(file);
    uploadTask;

    console.log("storageRef", storageRef);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {},
    //   (error) => {},
    //   () => {
    //     storage
    //       .ref("image")
    //       .child("travelOne")
    //       .getDownloadURL()
    //       .then((url) => console.log(url));
    //   }
    // );
  };

  const createPost = async () => {
    // let { status } = await Location.requestPermissionsAsync();
    // if (status === "granted") {}
    //   let location = await Location.getCurrentPositionAsync({});
    // await firestore.collection("travel").add({
    //   image: photo,
    //   userId,
    //   userName,
    //   test: "test",
    // });
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

// "latitude": 50.38243008321989,
// "longitude": 30.47454375841054,
