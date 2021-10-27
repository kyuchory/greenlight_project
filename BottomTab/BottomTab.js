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

const Icon1B = () => {
  return (
    <Image source={require("../icon+image/homeBlack.png")} style={styles.icon} />
  );
};

const Icon2 = () => {
  return (
    <Image source={require("../icon+image/category.png")} style={styles.icon} />
  );
};

const Icon2B = () => {
  return (
    <Image source={require("../icon+image/categoryBlack.png")} style={styles.icon} />
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

const Icon3C = () => {
  return (
    <Image
      source={require("../icon+image/solidarityColor.png")}
      style={styles.middleIcon}
    />
  );
};

const Icon4 = () => {
  return (
    <Image source={require("../icon+image/heart.png")} style={styles.icon} />
  );
};

const Icon4B = () => {
  return (
    <Image source={require("../icon+image/heartBlack.png")} style={styles.icon} />
  );
};

const Icon5 = () => {
  return (
    <Image source={require("../icon+image/user.png")} style={styles.icon} />
  );
};

const Icon5B = () => {
  return (
    <Image source={require("../icon+image/userBlack.png")} style={styles.icon} />
  );
};


export default function BottomTab({ point, handlePoint }) {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="홈"
        component={Home}
        options={{
          headerTitle: (props) => <LogoTitle {...props} title={"LifeUP"} />,
          tabBarIcon: ({focused})=>(
            focused ? (<Icon1B/>):(<Icon1/>)
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="카테고리"
        component={Category}
        options={{
          headerTitle: (props) => <LogoTitle2 {...props} title={"카테고리"} />,
          tabBarIcon: ({focused})=>(
            focused ? (<Icon2B/>):(<Icon2/>)
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name=" "
        component={Anything}
        point={point}
        options={{
          headerTitle: (props) => <LogoTitle {...props} title={"후원하기"} />,
          tabBarIcon: ({focused})=>(
            focused ? (<Icon3C/>):(<Icon3/>)
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="찜목록"
        component={Pick}
        options={{
          headerTitle: (props) => <LogoTitle2 {...props} title={"좋아요"} />,
          tabBarIcon: ({focused})=>(
            focused ? (<Icon4B/>):(<Icon4/>)
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="마이페이지"
        component={MyPage}
        options={{
          headerTitle: (props) => (
            <LogoTitle2 {...props} title={"마이페이지"} />
          ),
          tabBarIcon: ({focused})=>(
            focused ? (<Icon5B/>):(<Icon5/>)
          ),
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
    marginTop: 10,
    width: 40,
    height: 40,
  },
});
