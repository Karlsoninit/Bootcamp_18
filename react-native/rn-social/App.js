import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { LoginScreen } from "./screens/auth/LoginScreen";
import { RegisterScreen } from "./screens/auth/RegisterScreen";
import { MainScreen } from "./screens/home/MainScreen";
import { ProfileScreen } from "./screens/home/ProfileScreen";
import { CreateScreen } from "./screens/home/CreateScreen";
import { store } from "./redux/store";
import { auth } from "./firebase/config";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    AuthStateChanged();
  }, [isAuth]);

  const AuthStateChanged = async () => {
    await auth.onAuthStateChanged((user) => {
      // console.log(" --- user onAuthStateChanged ---", isAuth);
      setIsAuth(user);
    });
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        {isAuth ? (
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
            }}
          >
            <Tab.Screen
              options={{
                tabBarIcon: ({ focused, size, color }) => (
                  <Ionicons
                    name="ios-beer"
                    size={focused ? 35 : size}
                    color={color}
                  />
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
              name="Profile"
              component={ProfileScreen}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={RegisterScreen}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
}
