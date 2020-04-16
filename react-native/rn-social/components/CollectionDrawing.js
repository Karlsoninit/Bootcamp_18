import React from "react";
import { FlatList, View, Image } from "react-native";

export const CollectionDrawing = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={(item, indx) => indx.toString()}
    renderItem={({ item }) => {
      // console.log("post", item);
      return (
        <View
          style={{
            width: 350,
            borderRadius: 10,
            height: 300,
            marginBottom: 10,
            backgroundColor: "#fff",
          }}
        >
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
        </View>
      );
    }}
  />
);
