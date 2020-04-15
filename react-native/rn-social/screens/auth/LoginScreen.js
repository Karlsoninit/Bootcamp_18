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
};

export const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);

  const loginUser = async () => {
    const { email, password } = state;
    console.log("email", email);
    console.log("password", password);
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
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
        <TouchableOpacity style={styles.btn} onPress={loginUser}>
          <Text style={styles.btnTitle}>Login</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="go to register"
        onPress={() => navigation.navigate("Register")}
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
