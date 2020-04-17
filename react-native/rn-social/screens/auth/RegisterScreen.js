import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { auth } from "../../firebase/config";

const initialState = {
  email: "",
  password: "",
  displayName: "",
};

export const RegisterScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [message, setmessage] = useState(null);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log("result", result);
    setAvatar(result.uri);
  };

  const currentState = () => {
    // console.log("state", state);
    Alert.alert(JSON.stringify(state));
    setState(initialState);
  };

  useEffect(() => {
    currentUser();
  }, []);

  const currentUser = async () => {
    const currentUser = await auth.currentUser;
    console.log("currentUser", currentUser);
  };

  const registerUser = async () => {
    const { email, password, displayName } = state;
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      console.log("user", user);
      await user.user.updateProfile({
        displayName: displayName,
        photoURL: avatar,
      });
    } catch (error) {
      console.log(error);
      setmessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Image
          source={require("../../assets/images/triangles.png")}
          style={{ flex: 1, width: null, height: null }}
        />
      </View>
      <View style={styles.form}>
        <TouchableOpacity onPress={takePhoto}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginBottom: 30,
            }}
            source={{
              uri:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffortnitenews.com%2Fcontent%2Fimages%2F2018%2F11%2Fdefault.png&f=1&nofb=1",
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={{ ...styles.input, marginBottom: 20 }}
          placeholder="enter displayName"
          value={state.displayName}
          onChangeText={(value) => setState({ ...state, displayName: value })}
        />
        <TextInput
          style={{ ...styles.input, marginBottom: 20 }}
          placeholder="enter email"
          value={state.email}
          onChangeText={(value) => setState({ ...state, email: value })}
        />
        <TextInput
          style={styles.input}
          placeholder="enter password"
          secureTextEntry={true}
          onChangeText={(value) => setState({ ...state, password: value })}
          value={state.password}
        />
        {message && <Text>{message}</Text>}
        <TouchableOpacity style={styles.btn} onPress={registerUser}>
          <Text style={styles.btnTitle}>Register</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="go to login"
        onPress={() => navigation.navigate("Login")}
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
  form: {
    alignItems: "center",
  },
  input: {
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 60,
    width: 300,
    height: 40,
    paddingLeft: 40,
    backgroundColor: "white",
  },
  btn: {
    height: 40,
    width: 200,
    backgroundColor: "white",
    borderRadius: 60,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "red",
    fontSize: 30,
  },
});
