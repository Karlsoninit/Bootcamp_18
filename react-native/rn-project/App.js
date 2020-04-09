import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Alert,
  TextInput,
  Image,
  Keyboard,
} from "react-native";
import axios from "axios";
import Card from "./components/Card";
export default function App() {
  const [value, setValue] = useState("football");
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const choose = () => (value ? value : "cat");

    const data = await axios.get(
      `http://newsapi.org/v2/everything?q=${value}&from=2020-03-09&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f`
    );
    setNews(data.data.articles);
  };

  const alertSearch = () => {
    Keyboard.dismiss();
    Alert.alert(
      "Search",
      value,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => getNews() },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.containerTitle}>work </Text> */}
      <Image
        source={{
          uri:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhoustonchildrenscharity.org%2Fwp-content%2Fuploads%2F2016%2F02%2FBreaking_News.jpg&f=1&nofb=1",
        }}
        style={{ width: "100%", height: 300, position: "absolute", top: 0 }}
      />
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        style={styles.input}
        onChangeText={setValue}
      />
      <TouchableOpacity
        onPress={() => alertSearch()}
        activeOpacity={0.5}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>
          Text to display inside the button
        </Text>
      </TouchableOpacity>
      <Card news={news} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerTitle: {
    color: "red",
    fontSize: 40,
    textAlign: "center",
    marginTop: 70,
    marginBottom: 40,
  },
  button: {
    marginHorizontal: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a52a2a",
  },
  buttonTitle: {
    ...Platform.select({
      ios: {
        color: "#f0f8ff",
        fontSize: 12,
      },
      android: {
        color: "grey",
        fontSize: 20,
      },
      default: {
        // other platforms, web for example
        backgroundColor: "blue",
      },
    }),

    textTransform: "uppercase",
  },
  input: {
    marginTop: 80,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "blue",
    height: 40,
    marginHorizontal: 20,
    color: "red",
  },
});
