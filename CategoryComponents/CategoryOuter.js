import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { StyleSheet, Text, View, Image, LogBox } from "react-native";
import { useState, useContext, useEffect } from "react";
import { firestore } from "../utils/firebase";
import * as Font from "expo-font";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

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

const databaseURL = "https://green-light-1030-default-rtdb.firebaseio.com";

export default function CategoryOuter() {
  const navigation = useNavigation();

  const [outerName, setOuterName] = useState(0);
  const [outerPrice, setOuterPrice] = useState(0);
  const [outerImg, setOuterImg] = useState(0);
  const [outerStore, setOuterStore] = useState(0);

  const [outerName2, setOuterName2] = useState(0);
  const [outerPrice2, setOuterPrice2] = useState(0);
  const [outerImg2, setOuterImg2] = useState(0);
  const [outerStore2, setOuterStore2] = useState(0);

  const [outerName3, setOuterName3] = useState(0);
  const [outerPrice3, setOuterPrice3] = useState(0);
  const [outerImg3, setOuterImg3] = useState(0);
  const [outerStore3, setOuterStore3] = useState(0);

  const handleFireBase = async () => {
    const document = await firestore.collection("outer").doc("outer1").get();
    const tempName = await document.get("name");
    const tempPrice = await document.get("price");
    const tempImg = await document.get("uri");
    const tempStore = await document.get("store");

    setOuterName(tempName);
    setOuterPrice(tempPrice);
    setOuterImg(tempImg);
    setOuterStore(tempStore);

    const document2 = await firestore.collection("outer").doc("outer2").get();
    const tempName2 = await document2.get("name");
    const tempPrice2 = await document2.get("price");
    const tempImg2 = await document2.get("uri");
    const tempStore2 = await document2.get("store");

    setOuterName2(tempName2);
    setOuterPrice2(tempPrice2);
    setOuterImg2(tempImg2);
    setOuterStore2(tempStore2);

    const document3 = await firestore.collection("outer").doc("outer3").get();
    const tempName3 = await document3.get("name");
    const tempPrice3 = await document3.get("price");
    const tempImg3 = await document3.get("uri");
    const tempStore3 = await document3.get("store");

    setOuterName3(tempName3);
    setOuterPrice3(tempPrice3);
    setOuterImg3(tempImg3);
    setOuterStore3(tempStore3);
  };

  handleFireBase();

  const Box = () => {
    return (
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: `${outerImg}` }} style={styles.image} />
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.textSmall}>{outerStore}</Text>
            <Text style={styles.textBold}>{outerName}</Text>
            <Text style={styles.textBold}>{outerPrice}원</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const Box2 = () => {
    return (
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: `${outerImg2}` }} style={styles.image} />
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.textSmall}>{outerStore2}</Text>
            <Text style={styles.textBold}>{outerName2}</Text>
            <Text style={styles.textBold}>{outerPrice2}원</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const Box3 = () => {
    return (
      <View style={styles.box}>
        <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
          <View style={styles.imageWrapper}>
            <Image source={{ uri: `${outerImg3}` }} style={styles.image} />
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.textSmall}>{outerStore3}</Text>
            <Text style={styles.textBold}>{outerName3}</Text>
            <Text style={styles.textBold}>{outerPrice3}원</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../icon+image/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Outer</Text>
      </View>

      <View style={styles.section}>
        <Box />
        <Box2 />
        <Box3 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "5%",
    flexDirection: "row",
    alignItems: "center",
  },

  backIcon: {
    width: 25,
    height: 25,
    marginLeft: "20%",
  },

  headerText: {
    flex: 1,
    fontFamily: "BinggraeMelona-Bold",
    color: "black",
    fontSize: 25,
    marginLeft: "15%",
  },

  container: {
    paddingTop: "8%",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    // borderColor:"blue",
    // borderWidth:3,
  },

  section: {
    flexDirection: "row",
    marginTop: "10%",
    alignItems: "center",
    width: "100%",
    height: "30%",
    backgroundColor: "white",
    justifyContent: "space-around",
    // paddingLeft:"1%",
    paddingRight: "1%",
    // borderColor:"red",
    // borderWidth:1,
  },

  box: {
    width: "32%",
    // height:'100%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    // borderColor:"blue",
    // borderWidth:1,
  },

  imageWrapper: {
    flex: 5,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    // borderColor:"red",
    // borderWidth:1,
  },
  image: {
    width: 110,
    height: 130,
  },
  infoWrapper: {
    flex: 2,
    width: "100%",
    // padding:"10%",
    alignItems: "flex-start",
    // borderColor:"pink",
    // borderWidth:1,
  },
  textSmall: {
    fontSize: 14,
    fontFamily: "Vitro_pride",
    // marginLeft:"-10%",
  },
  textBold: {
    fontSize: 14,
    fontFamily: "BinggraeMelonaBold",
    // marginLeft:"0%",
    // paddingBottom:"2%"
  },
});
