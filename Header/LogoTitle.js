import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import * as Font from "expo-font";

//폰트
Font.loadAsync({
  WemakepriceBold: require("../assets/fonts/Wemakeprice-Bold.ttf"),
  "Wemakeprice-Bold": require("../assets/fonts/Wemakeprice-Bold.ttf"),
});

function LogoTitle(props) {
  return (
    <View style={stytles.headerView}>
      <View style={stytles.titleWrapper}>
        <Text style={stytles.title}>{props.title}</Text>
      </View>
      <View style={stytles.inputWrapper}>
        <Image
          source={require("../icon+image/magnifyingGlass.png")}
          style={stytles.inputicon}
        />
        <TextInput style={stytles.input} placeholder="검색어를 입력하세요" />
      </View>
      <View style={stytles.iconWrapper}>
        <Image
          source={require("../icon+image/shoppingbag.png")}
          style={stytles.icon}
        />
      </View>
    </View>
      
    );
  }



const stytles = StyleSheet.create({
  headerView: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "25%",
  },
  title: {
    color: "#00FF00",
    fontSize: 20,
    fontWeight: "900",
    fontFamily: "WemakepriceBold",
  },

  inputWrapper: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderColor: "#F2F2F2",
    borderWidth: 1,
    borderRadius: 12,
  },
  inputicon: {
    width: 20,
    height: 20,
    marginLeft: "6%",
    marginRight: "6%",
  },
  input: {
    width: "70%",
    alignItems: "center",
  },
  iconWrapper: {
    width: "15%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export default LogoTitle;
