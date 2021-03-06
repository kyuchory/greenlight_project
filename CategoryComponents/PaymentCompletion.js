import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as Font from "expo-font";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

Font.loadAsync({
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  "Vitro_pride": require("../assets/fonts/Vitro_pride.ttf"),
  BinggraeMelonaBold: require("../assets/fonts/BinggraeMelona-Bold.ttf"),
  "BinggraeMelona-Bold": require("../assets/fonts/BinggraeMelona-Bold.ttf"),
});

export default function PaymentCompletion() {
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
            주문이 정상적으로 완료 되었습니다.
          </Text>
          <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
            {/* {" "} */}
            업체(브랜드)의 주문 확인 후 발송됩니다.
          </Text>
       
      </View>
      <View style={styles.buttonBox}>
        <Image
          source={require("../icon+image/priceCheck.png")}
          style={{ width: 164 }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("BottomTab")}>
          <Image
            source={require("../icon+image/goHome.png")}
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
