import React from "react";
import {
  FlatList,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

const Card = ({ news }) => (
  <View style={{ height: "80%", paddingTop: 50, paddingBottom: 50 }}>
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item.title}
        data={news}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity
              activeOpacity={0.1}
              // onLongPress={() => Alert.alert(item.url)}
              onLongPress={() => WebBrowser.openBrowserAsync(item.url)}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: "100%", height: 200, marginBottom: 10 }}
              />
              <Text
                style={{
                  marginBottom: 10,
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  </View>
);

export default Card;
