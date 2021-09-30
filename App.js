import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login/Login";
import BottomTab from "./BottomTab/BottomTab";
import ABrand from "./Brands/ABrand";

const Stack = createStackNavigator();

export default function App() {
  const [point, setPoint] = useState(1);

  const handlePoint = () => {
    setPoint(point + 5);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTab" component={BottomTab} point={point}/>
        <Stack.Screen name="ABrand" component={ABrand} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
