import {
  BottomTabBarHeightContext,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import * as React from "react";
import { StyleSheet, Image } from "react-native";

import Anything from "../BottomMenu/Anything";
import Category from "../BottomMenu/Category";
import Home from "../BottomMenu/Home";
import MyPage from "../BottomMenu/MyPage";
import Pick from "../BottomMenu/Pick";
import LogoTitle from "../Header/LogoTitle";

const BottomTabNavigator = createBottomTabNavigator();

//아이콘들 이건 최대한 빨리 파일 하나 만들어서 정리할예정..
const TabIcon1 = () => {
  return (
    <Image source={require("../icon+image/home.png")} style={styles.icon} />
  );
};

const TabIcon2 = () => {
  return (
    <Image source={require("../icon+image/category.png")} style={styles.icon} />
  );
};

const TabIcon3 = () => {
  return (
    <Image
      source={require("../icon+image/solidarity.png")}
      style={styles.middleIcon}
    />
  );
};

const TabIcon4 = () => {
  return (
    <Image source={require("../icon+image/heart.png")} style={styles.icon} />
  );
};

const TabIcon5 = () => {
  return (
    <Image source={require("../icon+image/user.png")} style={styles.icon} />
  );
};

export default function BottomTab({point}) {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: (props) => TabIcon1({ ...props, name: "home" }),
        }}
      />
      <BottomTabNavigator.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: (props) => TabIcon2({ ...props, name: "home" }),
        }}
      />
      <BottomTabNavigator.Screen
        name="Anything"
        component={Anything}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: (props) => TabIcon3({ ...props, name: "home" }),
        }}
      />
      <BottomTabNavigator.Screen
        name="Pick"
        component={Pick}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: (props) => TabIcon4({ ...props, name: "home" }),
        }}
      />
      <BottomTabNavigator.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: (props) => TabIcon5({ ...props, name: "home" }),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 25,
    height: 25,
  },
  middleIcon: {
    width: 40,
    height: 40,
  }
});
