import React from "react";
import { FlatList, TouchableOpacity, Image, Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const CollectionDrawing = ({ data }) => {
  const navigation = useNavigation();
  console.log("navigation", navigation);
  return (
    <FlatList
      data={data}
      keyExtractor={(item, indx) => indx.toString()}
      renderItem={({ item }) => {
        // console.log("post", item);
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onLongPress={() => navigation.navigate("Map", { info: item })}
            style={{
              width: 350,
              borderRadius: 10,
              height: 300,
              marginBottom: 10,
              backgroundColor: "#fff",
            }}
          >
            <Text>{item.likes}</Text>
            <Image
              style={{
                width: 250,
                height: 200,
                marginBottom: 10,
                borderRadius: 10,
                right: 10,
                bottom: 10,
                position: "absolute",
              }}
              source={{ uri: item.image }}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};
