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

import { auth } from "../../firebase/config";

const initialState = {
  email: "",
  password: "",
  displayName: "",
};

export const RegisterScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [message, setmessage] = useState(null);

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

  const addIfo = async () => {
    const updateUser = await auth.currentUser.updateProfile({
      displayName: "Maksim",
      photoURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F145908%2Fpreview2%2F52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg&f=1&nofb=1",
    });
    console.log("updateUser", updateUser);
  };

  const registerUser = async () => {
    const { email, password, displayName } = state;
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      console.log("user", user);
      await user.user.updateProfile({
        displayName: displayName,
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
