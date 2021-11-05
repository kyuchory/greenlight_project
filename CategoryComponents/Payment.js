import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function Payment() {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [point, setPoint] = useState(0);
  const textHandler = (event) => {
    setText(event.target.value);
  };
  const pointHandler = (event) => {
    setPoint(event.target.value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.firstBox}>
        <View>
          <Text>주문자 정보</Text>
        </View>
        <View>
          <Text>김단국 | 010-1234-5678</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.secondBox}>
        <View>
          <Text style={{marginBottom:"4%"}}>배송지 정보</Text>
          <Image source={require("../icon+image/dankook.png")}style={{marginBottom:"4%"}}/>
          <Text style={{marginBottom:"4%"}}>김단국 | 010-1234-5678</Text>
          <Text style={{marginBottom:"4%"}}>경기도 용인시 수지구 죽전로 154 ict관</Text>
        </View>
        <View>
          <Text>변경하기</Text>
        </View>
      </View>
      <View style={styles.textBox}>
        <TextInput
          onChange={textHandler}
          value={text}
          placeholder="택배기사님께 전달할 말을 적어주세요."
          style={{ borderWidth: 1, width: "80%", height: "100%", padding: 5 }}
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.thirdBox}>
        <View style={styles.thirdBoxLeft}>
          <Text style={{ fontSize: 18 }}>주문상품 정보</Text>
          <View style={styles.imageText}>
            <Image source={require("../icon+image/miniJacket.png")} />
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text style={{ fontSize: 12 }}>greenLight</Text>
              <Text style={{ fontSize: 12 }}>Brown Jacket</Text>
              <Text style={{ fontSize: 12 }}>Brown/Free/수량 1개</Text>
              <Image source={require("../icon+image/useCoupon.png")} />
            </View>
          </View>
        </View>
        <View style={styles.thirdBoxRight}>
          <Text>김단국 | 010-1234-5678</Text>
          <Text>                                   -0원</Text>
          <Text>                          45,000원</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.forthBox}>
        <View style={styles.forthBoxUp}>
          <Text>포인트 사용</Text>
          <Text>보유포인트 50,000원 | 잔여포인트 0원</Text>
        </View>
        <View style={styles.forthBoxDown}>
          <View style={styles.forthBoxDownPoint}>
            <View>
              <Text>보유포인트</Text>
            </View>
            <View>
              <Text>50,000원</Text>
            </View>
          </View>
          <View style={styles.forthBoxDownTextInput}>
            <TextInput
              onChange={pointHandler}
              value={point}
              placeholder="0"
              style={{
                marginTop: "5%",
                borderWidth: 1,
                width: "70%",
                height: "50%",
                padding: 5,
              }}
            />
            <View>
              <Image
                source={require("../icon+image/allPoint.png")}
                style={{ marginTop: "21%" }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 0.3, width: "100%" }}></View>
      <View style={styles.bottomPaymentBar}>
        <TouchableOpacity onPress={()=>navigation.navigate("PaymentCompletion")}>
          <Text>45,000원 결제하기</Text>
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
    backgroundColor: "#f8f8ff",
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
    justifyContent: "flex-end"
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
