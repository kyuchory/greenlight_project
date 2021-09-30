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
import LogoTitle2 from "../Header/LogoTitle2";

const BottomTabNavigator = createBottomTabNavigator();

const Icon1 = () => {
  return (
    <Image source={require("../icon+image/home.png")} style={styles.icon} />
  );
};

const Icon2 = () => {
  return (
    <Image source={require("../icon+image/category.png")} style={styles.icon} />
  );
};

const Icon3 = () => {
  return (
    <Image
      source={require("../icon+image/solidarity.png")}
      style={styles.middleIcon}
    />
  );
};

const Icon4 = () => {
  return (
    <Image source={require("../icon+image/heart.png")} style={styles.icon} />
  );
};

const Icon5 = () => {
  return (
    <Image source={require("../icon+image/user.png")} style={styles.icon} />
  );
};

export default function BottomTab() {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} title={"LifeUP"}/>,
          tabBarIcon: (props) => <Icon1 {...props} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="Category"
        component={Category}
        options={{
          headerTitle: (props) => <LogoTitle2 {...props} title={"카테고리"}/>,
          tabBarIcon: (props) => <Icon2 {...props} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="Anything"
        component={Anything}
        options={{
          headerTitle: (props) => <LogoTitle {...props} title={"후원하기"}/>,

          tabBarIcon: (props) => <Icon3 {...props} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="Pick"
        component={Pick}
        options={{
          headerTitle: (props) => <LogoTitle2 {...props} title={"좋아요"}/>,
          tabBarIcon: (props) => <Icon4 {...props} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerTitle: (props) => <LogoTitle2 {...props} title={"마이페이지"}/>,
          tabBarIcon: (props) => <Icon5 {...props} />,
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
  },
});
