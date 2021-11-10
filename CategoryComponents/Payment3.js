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
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

Font.loadAsync({
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  Vitro_core: require("../assets/fonts/Vitro_core.ttf"),
  Vitro_core: require("../assets/fonts/Vitro_core.ttf"),
  BinggraeMelonaBold: require("../assets/fonts/BinggraeMelona-Bold.ttf"),
  "BinggraeMelona-Bold": require("../assets/fonts/BinggraeMelona-Bold.ttf"),
  SpoqaHanSansNeoBold: require("../assets/fonts/SpoqaHanSansNeo-Bold.ttf"),
  "SpoqaHanSansNeo-Bold": require("../assets/fonts/SpoqaHanSansNeo-Bold.ttf"),
});

export default function Payment3() {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [tempPoint, setTempPoint] = useState(0);
  const [point, onChangePoint] = useState("0");
  const [mileage, setMileage] = useState(0);
  const [plusDepositCount, setPlusDepositCount] = useState(0);
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0);

  const userEmail = useContext(UserContext);
  const email = userEmail.user.email;

  const handleMileage = async () => {
    const document = await firestore.collection("User").doc(email).get();
    const tempName = await document.get("name");
    const tempmileage = await document.get("mileage");

    const tempdepositCount = document.get("depositCount");


    const documentBrand = await firestore
      .collection("Brand")
      .doc("LifeUpForest")
      .get();
    const tempProgress = documentBrand.get("progress"); //데이터베이스에서 가져온 진행도

    setName(tempName);
    setMileage(tempmileage);
    setPlusDepositCount(tempdepositCount + 1);
    setProgress(tempProgress + 1);
  };

  handleMileage();

  const paymentHandler = () => {
    if (mileage < 55000) {
      Alert.alert("보유하신 포인트가 부족합니다.");
    } else {
      const plusMileage = mileage - 55000;
      setMileage(mileage - 55000);
      navigation.navigate("PaymentCompletion");
      firestore.collection("User").doc(email).set(
        {
          mileage: plusMileage,
          depositCount: plusDepositCount,
        },
        { merge: true }
      );
    }
  };

  const allPointUse = () => {
    const stringPoint = mileage.toString();
    onChangePoint(stringPoint);
  };

  const textHandler = (event) => {
    setText(event.nativeEvent.text);
    // console.log(text);
  };
  const pointHandler = (event) => {
    setTempPoint(event.nativeEvent.text);
    console.log(tempPoint);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ flex: 3 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../icon+image/back.png")}
                style={styles.backIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 5 }}>
            <Text style={styles.headerText}>주문하기</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.firstBox}>
            <View>
              <Text style={{ fontFamily: "BinggraeMelona-Bold" }}>
                주문자 정보
              </Text>
            </View>
            <View>
              <Text style={{ fontFamily: "Vitro_pride" }}>
                {name} | 010-1234-5678
              </Text>
            </View>
          </View>

          <View style={styles.secondBox}>
            <View>
              <Text
                style={{
                  marginBottom: "4%",
                  fontFamily: "BinggraeMelona-Bold",
                }}
              >
                배송지 정보
              </Text>
              <Image
                source={require("../icon+image/dankook.png")}
                style={{ marginBottom: "4%" }}
              />
              <Text style={{ marginBottom: "4%", fontFamily: "Vitro_pride" }}>
                {name} | 010-1234-5678
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
                height: 35,
                padding: 5,
                fontFamily: "BinggraeMelona-Bold",
              }}
            />
          </View>
          <View style={styles.thirdBox}>
            <View style={styles.thirdBoxLeft}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "BinggraeMelona-Bold",
                  marginBottom: 5,
                }}
              >
                주문상품 정보
              </Text>
              <View style={styles.imageText}>
                <Image
                  source={require("../icon+image/orange_jacket.jpg")}
                  style={{ width: 70, height: 70 }}
                />
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 5,
                  }}
                >
                  <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
                    greenLight
                  </Text>
                  <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
                    Orange Jacket
                  </Text>
                  <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
                    Orange/Free/수량 1개
                  </Text>
                  <Image source={require("../icon+image/useCoupon.png")} />
                </View>
              </View>
            </View>
            <View style={styles.thirdBoxRight}>
              <Text style={{ fontFamily: "Vitro_pride" }}>
                {name} | 010-1234-5678
              </Text>
              <Text style={{ fontFamily: "Vitro_pride" }}> -0원</Text>
              <Text style={{ fontFamily: "Vitro_pride" }}> 55,000원</Text>
            </View>
          </View>

          <View style={styles.forthBox}>
            <View style={styles.forthBoxUp}>
              <Text
                style={{
                  fontFamily: "BinggraeMelona-Bold",
                  marginBottom: "2%",
                }}
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
                  keyboardType="number-pad"
                  style={{
                    fontFamily: "Vitro_pride",
                    marginTop: "5%",
                    borderWidth: 1,
                    width: "70%",
                    height: 30,
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
          <View style={styles.paymentBox}>
            <Image
              source={require("../icon+image/payment.png")}
              style={{ width: "100%", height: 250, resizeMode: "stretch" }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomPaymentBar}>
        <TouchableOpacity onPress={() => paymentHandler()}>
          <Text
            style={{
              fontFamily: "BinggraeMelona-Bold",
              color: "white",
            }}
          >
            55,000원 결제하기
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    paddingTop: "8%",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "2%",
    paddingBottom: "2%",
  },

  backIcon: {
    width: 25,
    height: 25,
    marginLeft: "20%",
  },

  headerText: {
    fontFamily: "BinggraeMelona-Bold",
    color: "black",
    fontSize: 25,
  },
  body: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:"13%"
  },

  bottomPaymentBar: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8C8CF5",
    // paddingTop: "5%",
    // paddingBottom: "5%",
    position: "absolute",
    bottom: 0,
    height: 55,
  },
  bottomPaymentBarTouch: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  firstBox: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "5%",
    paddingBottom: "5%",
    borderTopColor: "#E6E6E6",
    borderTopWidth: 4,
  },
  textBox: {
    width: "100%",
    alignItems: "center",
    marginBottom: "5%",
  },
  secondBox: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "6%",
    paddingBottom: "6%",
    borderTopColor: "#E6E6E6",
    borderTopWidth: 4,
  },
  thirdBox: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "4%",
    paddingBottom: "4%",
    borderTopColor: "#E6E6E6",
    borderTopWidth: 4,
  },

  thirdBoxRight: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  imageText: {
    flexDirection: "row",
  },

  forthBox: {
    width: "95%",
    flexDirection: "column",
    paddingTop: "4%",
    paddingBottom: "4%",
    borderTopColor: "#E6E6E6",
    borderTopWidth: 4,
  },
  forthBoxUp: {
    // height: "50%",
    justifyContent: "center",
  },
  forthBoxDown: {
    // height: "50%",
  },
  forthBoxDownPoint: {
    // height: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forthBoxDownTextInput: {
    // height: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forthBoxDownPointLeft: {},
  paymentBox: {
    width: "95%",
    paddingTop: "2%",
    borderTopColor: "#E6E6E6",
    borderTopWidth: 4,
  },
});
