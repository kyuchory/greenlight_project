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
  Dimensions
} from "react-native";

Font.loadAsync({
  Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
  'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
  Vitro_core: require('../assets/fonts/Vitro_core.ttf'),
  'Vitro_core': require('../assets/fonts/Vitro_core.ttf'),
  BinggraeMelonaBold: require('../assets/fonts/BinggraeMelona-Bold.ttf'),
  'BinggraeMelona-Bold': require('../assets/fonts/BinggraeMelona-Bold.ttf'),
  SpoqaHanSansNeoBold : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
  'SpoqaHanSansNeo-Bold' : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
});

export default function GoDonate() {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [tempPoint, setTempPoint] = useState(0);
  const [point, onChangePoint] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [plusDonateCount, setPlusDonateCount] = useState(0);
  const [name, setName] = useState('');
  const [progress, setProgress] = useState(0);

  const userEmail = useContext(UserContext);
  const email = userEmail.user.email;

  const handleMileage = async () => {
    const document = await firestore.collection("User").doc(email).get();
    const tempName = await document.get("name");
    const tempmileage = await document.get("mileage");

    const prevDonateCount = document.get('donateCount');
    const tempdonateCount = prevDonateCount + 1;

    const documentBrand = await firestore.collection('Brand').doc('LifeUpForest').get();
    const tempProgress = documentBrand.get('progress'); //데이터베이스에서 가져온 진행도

    setName(tempName);
    setMileage(tempmileage);
    setPlusDonateCount(tempdonateCount);
    setProgress(tempProgress+1);

  };

  handleMileage();

  const paymentHandler = () => {
    if (mileage < tempPoint) {
      Alert.alert("보유하신 포인트가 부족합니다.");
    } else {
      const plusMileage = mileage - tempPoint;
      setMileage(mileage - tempPoint);
      navigation.navigate("DonationCompletion");

      firestore.collection("User").doc(email).set({
        "mileage": plusMileage,
        'donateCount':plusDonateCount,
      },{merge:true});

      firestore.collection("Brand").doc("LifeUpForest").set({
        "progress": progress,
      },{merge:true});
    }
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
    <View style={styles.header}>
    <View style={{flex:3, }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../icon+image/back.png")}
          style={styles.backIcon}
        />
      
      </TouchableOpacity>
      </View>
      <View style={{flex:5, }}>
      <Text style={styles.headerText}>기부하기</Text>
      </View>
    </View>

    <View style={styles.line}></View>

      <View style={styles.firstBox}>
        <View>
          <Text style={{ fontFamily: "BinggraeMelona-Bold" }}>후원자 정보</Text>
        </View>
        <View>
          <Text style={{ fontFamily: "Vitro_pride" }}>
            {name} | 010-1234-5678
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
            source={require("../icon+image/dankook_green.png")}
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
          placeholder="전달할 말을 적어주세요."
          style={{
            borderWidth: 1,
            width: "80%",
            height: "70%",
            padding: 5,
            fontFamily: "BinggraeMelona-Bold",
          }}
        />
      </View>
      <View style={styles.line}></View>
      <View style={styles.thirdBox}>
        <View style={styles.thirdBoxLeft}>
          <Text style={{ fontSize: 18, fontFamily: "BinggraeMelona-Bold", marginBottom:5 }}>
            기부대상 정보
          </Text>
          <View style={styles.imageText}>
            <Image source={require("../icon+image/forest1.png")} style={{height:70}} />
            <View
              style={{
                flexDirection: "column", marginLeft:5
              }}
            >
              <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
                LifeUp
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Vitro_pride" }}>
                '라이프업 숲' 조성 캠페인
              </Text>
        
            </View>
          </View>
        </View>
        <View style={styles.thirdBoxRight}>
          <Text style={{ fontFamily: "Vitro_pride" }}>
          {name} | 010-1234-5678
          </Text>
          <Text> </Text>
          <Text> </Text>
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
              onChange={pointHandler}
              onChangeText={point=> onChangePoint(point)}
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
              <TouchableOpacity>
                <Image
                  source={require("../icon+image/inputIcon.png")}
                  style={{ marginTop: "21%" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    <View style={styles.bottomPaymentBar}>
      <TouchableOpacity onPress={() => paymentHandler()}>
        <Text
          style={{
            fontFamily: "BinggraeMelona-Bold",
            color: "white",
          }}
        >
          {tempPoint}원 결제하기
        </Text>
        </TouchableOpacity>
      </View>
        
    </View>

   
  );
}



const styles = StyleSheet.create({
  container: {
    height:Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingTop:"8%",
  },
  header: {
    height: "8%",
    flexDirection: "row",
    alignItems: "center",
    // borderWidth:1,
    // borderColor:"red"
  },

  backIcon: {
    width: 25,
    height: 25,
    marginLeft: "20%",
  },

  headerText: {
    
    fontFamily: "BinggraeMelona-Bold",
    color: "#00FF00",
    fontSize: 25,
    // marginLeft: "4%",
  },
  bottomPaymentBar: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems:"center",
    // flexDirection: "row",
    height: "7%",
    backgroundColor: "#7CB199",
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
    height:"10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textBox: {
    width: "100%",
    height:"8%",
    alignItems: "center",
    marginBottom: "3%",
  },
  secondBox: {
    width: "95%",
    height:"20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  thirdBox: {
    width: "95%",
    height:"20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  thirdBoxLeft: {},
  thirdBoxRight: {
    flexDirection: "column",
    alignItems: "flex-end",

  },
  imageText: {
    flexDirection: "row",
  },

  forthBox: {
    width: "95%",
    height:"25%",
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

    