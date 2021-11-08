import { useNavigation } from "@react-navigation/core";
import * as Font from "expo-font";
import React, { useContext, useState } from "react";
import { firestore } from "../utils/firebase";
import { UserContext } from "../contexts";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { onChange } from "react-native-reanimated";

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

export default function Payment() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  const [point, onChangePoint] = useState(0);
  const [mileage, setMileage] = useState(0);
  const userEmail = useContext(UserContext);
  const email = userEmail.user.email;

  const handleMileage = async () => {
    const document = await firestore.collection("User").doc(email).get();
    const tempmileage = await document.get("mileage");
    setMileage(tempmileage);
  };

  handleMileage();

  const paymentHandler = () => {
    if (mileage < 45000) {
      Alert.alert("보유하신 포인트가 부족합니다.");
    } else {
      const plusMileage = mileage - 45000;
      setMileage(mileage - 45000);
      navigation.navigate("PaymentCompletion");
      firestore.collection("User").doc(email).set({ mileage: plusMileage });
    }
  };

  const allPointUse = () => {
    onChangePoint("45000");
  };

  const textHandler = (event) => {
    setText(event.nativeEvent.text);
    console.log(text);
  };
  const pointHandler = (event) => {
    setPoint(event.nativeEvent.text);
    console.log(point);
  };

  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.firstBox}>
        <View>
          <Text style={{ fontFamily: "BinggraeMelona-Bold" }}>주문자 정보</Text>
        </View>
        <View>
          <Text style={{ fontFamily: "Vitro_pride" }}>
            김단국 | 010-1234-5678
          </Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.secondBox}>
        <View>
          <Text
            style={{ marginBottom: "4%", fontFamily: "BinggraeMelona-Bold" }}
          >
            배송지 정보
          </Text>
          <Image
            source={require("../icon+image/dankook.png")}
            style={{ marginBottom: "4%" }}
          />
          <Text style={{ marginBottom: "4%", fontFamily: "Vitro_pride" }}>
            김단국 | 010-1234-5678
          </Text>
          <Text style={{ marginBottom: "4%", fontFamily: "Vitro_pride" }}>
            경기도 용인시 수지구 죽전로 154 ict관
          </Text>
        </View>
        <View>
          <Text style={{ fontFamily: "Vitro_pride" }}>변경하기</Text>
        </View>
      </View>
      <View style={styles.textBox}>
        <TextInput
          onChange={textHandler}
          value={text}
          placeholder="택배기사님께 전달할 말을 적어주세요."
          style={{
            borderWidth: 1,
            width: "80%",
            height: "100%",
            padding: 5,
            fontFamily: "BinggraeMelona-Bold",
          }}
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.thirdBox}>
        <View style={styles.thirdBoxLeft}>
          <Text style={{ fontSize: 18, fontFamily: "BinggraeMelona-Bold" }}>
            주문상품 정보
          </Text>
          <View style={styles.imageText}>
            <Image source={require("../icon+image/miniJacket.png")} />
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
                greenLight
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
                Brown Jacket
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
                Brown/Free/수량 1개
              </Text>
              <Image source={require("../icon+image/useCoupon.png")} />
            </View>
          </View>
        </View>
        <View style={styles.thirdBoxRight}>
          <Text style={{ fontFamily: "Vitro_pride" }}>
            김단국 | 010-1234-5678
          </Text>
          <Text style={{ fontFamily: "Vitro_pride" }}> -0원</Text>
          <Text style={{ fontFamily: "Vitro_pride" }}> 45,000원</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.forthBox}>
        <View style={styles.forthBoxUp}>
          <Text
            style={{ fontFamily: "BinggraeMelona-Bold", marginBottom: "2%" }}
          >
            포인트 사용
          </Text>
          <Text style={{ fontFamily: "Vitro_pride" }}>
            보유포인트 {mileage}원
          </Text>
        </View>
        <View style={styles.forthBoxDown}>
          <View style={styles.forthBoxDownPoint}>
            <View>
              <Text style={{ fontFamily: "Vitro_pride" }}>보유포인트</Text>
            </View>
            <View>
              <Text style={{ fontFamily: "Vitro_pride" }}>{mileage}원</Text>
            </View>
          </View>
          <View style={styles.forthBoxDownTextInput}>
            <TextInput
              onChangeText={(point) => onChangePoint(point)}
              value={point}
              placeholder="0"
              style={{
                fontFamily: "Vitro_pride",
                marginTop: "5%",
                borderWidth: 1,
                width: "70%",
                height: "50%",
                padding: 5,
              }}
            />
            <View>
              <TouchableOpacity onPress={() => allPointUse()}>
                <Image
                  source={require("../icon+image/allPoint.png")}
                  style={{ marginTop: "21%" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.3, width: "100%" }}></View>
      <View style={styles.bottomPaymentBar}>
        <TouchableOpacity onPress={() => paymentHandler()}>
          <Text
            style={{
              fontFamily: "BinggraeMelona-Bold",
              marginTop: "8%",
              color: "white",
            }}
          >
            45,000원 결제하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

{
  /* <TextInput
            onChange={textHandler}
            value={text}
            placeholder="택배기사님께 전달할 말을 적어주세요."
            style={{ borderWidth: 1, width: "90%" ,
            height:35, padding:5,
        }}
          /> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
  },
  bottomPaymentBar: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    //alignSelf: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    height: "6%",
    backgroundColor: "#8C8CF5",
  },
  bottomPaymentBarTouch: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: "100%",
    height: 7,
    backgroundColor: "#E6E6E6",
    justifyContent: "center",
  },
  firstBox: {
    width: "95%",
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textBox: {
    width: "100%",
    flex: 0.2,
    alignItems: "center",
    marginBottom: "5%",
  },
  secondBox: {
    width: "95%",
    flex: 1.0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  thirdBox: {
    width: "95%",
    flex: 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  thirdBoxLeft: {},
  thirdBoxRight: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  imageText: {
    flexDirection: "row",
  },

  forthBox: {
    width: "95%",
    flex: 1,
    flexDirection: "column",
  },
  forthBoxUp: {
    height: "50%",
    justifyContent: "center",
  },
  forthBoxDown: {
    height: "50%",
  },
  forthBoxDownPoint: {
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forthBoxDownTextInput: {
    height: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forthBoxDownPointLeft: {},
});
