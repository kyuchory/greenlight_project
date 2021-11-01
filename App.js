import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login/Login";
import BottomTab from "./BottomTab/BottomTab";
import ABrand from "./Brands/ABrand";
import Signup from "./Login/Signup";

import ChatBot from "./ChatBot/ChatBot";
import CategoryOuter from "./CategoryComponents/CategoryOuter";

import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

import { PointProvider } from "./context/point";
import { FabricProvider } from "./ChatBot/ChatBot_Context";
import { UserProvider } from "./contexts";

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);


const Stack = createStackNavigator();


export default function App() {
  const [point, setPoint] = useState(1);
  const handlePoint = () => {
    setPoint(point + 5);
  };


  return (
    <UserProvider>
    <FabricProvider>
    <PointProvider>
    <ThemeProvider theme={theme}>
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
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ChatBot" component={ChatBot} />
        <Stack.Screen name="CategoryOuter" component= {CategoryOuter} />

      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
    </PointProvider>
    </FabricProvider>
    </UserProvider>
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

