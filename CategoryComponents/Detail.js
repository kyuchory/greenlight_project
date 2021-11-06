import React from "react";
import { Text, View, StyleSheet, Image,Dimensions } from "react-native";


let ScreenHeight = Dimensions.get("window").height;//subMenu 내용물의 높이를 100%로 맞춰줌
let ScreenWidth = Dimensions.get("window").width;

export default function Detail(){
    return(
        <View style={styles.container}>
            <Image source={require("../icon+image/outer_brownjacketpage.jpg")}
            style={{ width:"100%", height: "100%",}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });