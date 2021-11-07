import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

Font.loadAsync({
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  WemakepriceBold: require("../assets/fonts/Wemakeprice-Bold.ttf"),
  "Wemakeprice-Bold": require("../assets/fonts/Wemakeprice-Bold.ttf"),
  HSBombaram3_Regular: require("../assets/fonts/HSBombaram3_Regular.ttf"),
  HSBombaram3_Regular: require("../assets/fonts/HSBombaram3_Regular.ttf"),
  BinggraeMelonaBold: require("../assets/fonts/BinggraeMelona-Bold.ttf"),
  "BinggraeMelona-Bold": require("../assets/fonts/BinggraeMelona-Bold.ttf"),
});

export default function DonationCompletion() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
  
          <Text
            style={{
              fontSize: 20,
              marginBottom: "2%",
              fontFamily: "BinggraeMelona-Bold",
              marginBottom: "2%",
            }}
          >
            기부가 정상적으로 완료 되었습니다.
          </Text>
          <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
           
            후원해 주셔서 정말 감사합니다.
          </Text>

      </View>
      <View style={styles.buttonBox}>
        <Image
          source={require("../icon+image/donateCheck.png")}
          style={{ width: 164 }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("BottomTab")}>
          <Image
            source={require("../icon+image/goHome_green.png")}
            style={{ width: 164 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "white",
  },
  textBox: {
    width: "95%",
    height: "15%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonBox: {
    width: "95%",
    height: "8%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
