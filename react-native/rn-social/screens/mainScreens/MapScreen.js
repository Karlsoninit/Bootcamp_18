import React from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ route }) => (
  <View>
    <MapView
      //   showsUserLocation={true}

      showsCompass={true}
      style={{ width: "100%", height: 300 }}
      minZoomLevel={5}
    >
      <Marker
        title="like photo"
        coordinate={{
          latitude: route.params.info.location.latitude,
          longitude: route.params.info.location.longitude,
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            marginBottom: 10,
            borderRadius: 10,
          }}
          source={{ uri: route.params.info.image }}
        />
      </Marker>
    </MapView>
  </View>
);
