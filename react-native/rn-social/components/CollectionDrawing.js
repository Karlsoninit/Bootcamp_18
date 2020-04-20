import React, { useState, useEffect } from "react";
import {
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { useWindowDimensions } from "react-native";
import { firestore } from "../firebase/config";

export const CollectionDrawing = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const getCurrentUserPost = async (id) => {
    const data = await firestore.collection("posts").doc(id).get();

    await firestore
      .collection("posts")
      .doc(id)
      .update({
        likes: Number(data.data().likes) + 1,
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onLongPress={() => navigation.navigate("Map", { info: item })}
              style={styles.postContainer}
            >
              <TouchableOpacity
                style={styles.like}
                onPress={() => getCurrentUserPost(item.id)}
              >
                <Text>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                // style={styles.like}
                onPress={() => navigation.navigate("Comments", { item })}
              >
                <Text>COMMENTS</Text>
              </TouchableOpacity>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Modal
                style={styles.centeredView}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}
              >
                <View>
                  <View
                    style={{
                      backgroundColor: "#2196F3",
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableHighlight
                      style={{ marginTop: 50 }}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <View>
                        <Text>Hide Modal</Text>
                        <Image
                          style={styles.image}
                          source={{ uri: item.image }}
                        />
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: 350,
    borderRadius: 10,
    height: 300,
    marginBottom: 10,
    backgroundColor: "#fff",
    flex: 1,
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
    right: 10,
    bottom: 10,
    position: "absolute",
  },
  like: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 15,
    left: 15,
  },
  centeredView: {
    backgroundColor: "red",
    width: 350,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

//----------
