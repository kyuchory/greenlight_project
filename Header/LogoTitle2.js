import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import * as Font from "expo-font";

//폰트
Font.loadAsync({
  WemakepriceBold: require("../assets/fonts/Wemakeprice-Bold.ttf"),
  "Wemakeprice-Bold": require("../assets/fonts/Wemakeprice-Bold.ttf"),
});

function LogoTitle2(props) {
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
    width:"100%",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },

  titleWrapper: {
    
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    width:"80%",
    paddingLeft:"20%",
    // borderColor:"red",
    // borderWidth:1,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "900",
    fontFamily: "WemakepriceBold",
  },

  inputWrapper: {
    width:"10%",
    flexDirection: "row",
    // justifyContent:"center"
  },
  inputicon: {
    width: 25,
    height: 25,
  },

  iconWrapper: {
    width:"10%",
    alignItems: "center",
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export default LogoTitle2;
