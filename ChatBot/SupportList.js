import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { firestore } from "../utils/firebase";
import { UserContext } from "../contexts";

import * as Font from "expo-font";

Font.loadAsync({
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  WemakepriceBold: require("../assets/fonts/Wemakeprice-Bold.ttf"),
  "Wemakeprice-Bold": require("../assets/fonts/Wemakeprice-Bold.ttf"),
  HSBombaram3_Regular: require("../assets/fonts/HSBombaram3_Regular.ttf"),
  HSBombaram3_Regular: require("../assets/fonts/HSBombaram3_Regular.ttf"),
  SpoqaHanSansNeoBold: require("../assets/fonts/SpoqaHanSansNeo-Bold.ttf"),
  "SpoqaHanSansNeo-Bold": require("../assets/fonts/SpoqaHanSansNeo-Bold.ttf"),
});

export default function SupportList({ navigation }) {
  const userEmail = useContext(UserContext);
  const email = userEmail.user.email;

  const [data, setData] = useState("");
  const [listArray, setListArray] = useState([]);

  useEffect(() => {
    firestore
      .collection("User")
      .doc(email)
      .collection("supportList")
      .onSnapshot((snapshot) => {
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setListArray(list);
        console.log(listArray);
      });
  }, []);

  const findSupportList = async () => {
    const document = await firestore
      .collection("User")
      .doc(email)
      .collection("supportList")
      .get();
    document.forEach((doc) => {
      const tempfiber = doc.data().fiber;
      const tempclothNum = doc.data().clothNum;
      listItem.push({ fiber: tempfiber, clothNum: tempclothNum });
    });

    // console.log(listItem);
    // setData(listItem);
    // for(let i = 0 ; i < listItem.length; i++){
    //     <Text>{i}</Text>
    // }
  };

  const Item = ({ listFiber, listClothNum }) => {
    <View>
      <Text>후원 재질: {listFiber}</Text>
      <Text>후원한 벌: {listClothNum}</Text>
    </View>;
  };

  const renderItem = ({ item }) => (
    <Item listFiber={item.listFiber} listClothNum={item.listClothNum} />
  );

  // listArray.map((list)=>{
  //   <View key={list.id}>

  //   </View>
  // })

  // findSupportList();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>후원내역</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../icon+image/close.png")}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* <View>
            <FlatList
            data={data}
            renderItem={renderItem}
            />
            
        </View> */}

      <View style={styles.listcontainer}>
        {listArray.map((list) => (
          <View key={list.id} style={{ borderWidth: 5, width: "90%" ,marginTop:"5%", marginBottom:"5%", }}>
            <Text>벌수 : {list.clothNum}</Text>
            <Text>후원 종류 : {list.fiber}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    //\\ alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    marginTop: "8%",
    height: "8%",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    fontFamily: "BinggraeMelona-Bold",
    color: "#00FF00",
    fontSize: 25,
    marginLeft: "3%",
  },
  closeIcon: {
    width: 20,
    height: 20,
    marginRight: "5%",
  },
  optionIcon: {
    width: 50,
    height: 20,
    marginRight: "2%",
    borderRadius: 6,
  },
  brandList: {
    // borderColor:'red',
    // borderWidth:1,
    alignItems: "flex-start",
    paddingLeft: "5%",
    marginTop: "2%",
  },
  brandWrapper: {
    borderColor: "#E7FCE0",
    backgroundColor: "#E7FCE0",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%",
    width: 325,
    height: 100,
  },
  brandImg: {
    width: 50,
    height: 60,
    marginRight: "2%",
    marginLeft: "2%",
  },
  nameAndBar: {
    // borderColor:'red',
    // borderWidth:1,
    flexDirection: "column",
  },
  brandName: {
    alignItems: "flex-start",
    fontSize: 18,
    fontFamily: "SpoqaHanSansNeoBold",
    color: "#444343",
  },
  progressBar: {
    width: "70%",
    flexDirection: "row",

    alignItems: "center",
  },
  listcontainer:{
    alignItems: "center",
    justifyContent: "center",
  }
});
