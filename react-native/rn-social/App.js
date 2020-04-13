import React, { useState } from "react";
import { StyleSheet, Platform, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "./screens/HomeScreen";
import { BlogScreen } from "./screens/BlogScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { MainScreen } from "./screens/tab/MainScreen";
import { MapScreen } from "./screens/tab/MapScreen";
import { CreateScreen } from "./screens/tab/CreateScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const content = (
//   <Stack.Navigator>
//     <Stack.Screen
//       options={{
//         headerTitleAlign: "center",
//         headerTitle: "My screen",
//         headerStyle: {
//           backgroundColor: Platform.OS === "ios" ? "white" : "blue",
//         },
//         headerTintColor: Platform.OS === "ios" ? "blue" : "white",
//       }}
//       name="Home"
//       component={HomeScreen}
//     />
//     <Stack.Screen name="Profile" component={ProfileScreen} />
//     <Stack.Screen name="Blog" component={BlogScreen} />
//   </Stack.Navigator>
// );

let content = (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused, size, color }) => (
          <Ionicons name="ios-beer" size={focused ? 35 : size} color={color} />
        ),
      }}
      name="Main"
      component={MainScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused, size, color }) => (
          <Ionicons
            name="ios-add-circle-outline"
            size={focused ? 42 : 40}
            color={"red"}
          />
        ),
      }}
      name="Create"
      component={CreateScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused, size, color }) => (
          <Ionicons
            name="ios-planet"
            size={focused ? 35 : size}
            color={color}
          />
        ),
      }}
      name="Map"
      component={MapScreen}
    />
  </Tab.Navigator>
);

const useRoute = (isAuth) => {
  if (isAuth) {
    return content;
  }
  return (content = (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  ));
};

export default function App() {
  const [isAuth, setIsAuth] = useState(true);

  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
