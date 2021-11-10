import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { firestore } from "../utils/firebase";
import { UserContext } from "../contexts";
import { ScrollView } from "react-native-gesture-handler";
import * as Font from "expo-font";

Font.loadAsync({
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  "Vitro_pride": require("../assets/fonts/Vitro_pride.ttf"),
  SpoqaHanSansNeoBold: require("../assets/fonts/SpoqaHanSansNeo-Bold.ttf"),
  "SpoqaHanSansNeo-Bold": require("../assets/fonts/SpoqaHanSansNeo-Bold.ttf"),
});

export default function SupportList({ navigation }) {
  const userEmail = useContext(UserContext);
  const email = userEmail.user.email;
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
        // console.log(listArray);
      });
  }, []);

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

      <ScrollView>
        <View style={styles.listcontainer}>
          {listArray.map((list,index) => (
            <View key={list.id} style={styles.itemBox}>
              <View style={styles.indexBox}>
                <Text style={styles.index}>{index+1}</Text>
              </View>
              <View style={styles.itemInfoBox}>
                <Text style={styles.itemInfo}>후원 종류 : {list.fiber}</Text>
                <Text style={styles.itemInfo}>벌수 : {list.clothNum}</Text>
              </View>

            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

  listcontainer:{
    alignItems: "center",
    justifyContent: "center",
  },
  itemBox:{
    borderWidth: 2,
    borderColor:"#C9C9C9", 
    width: "90%",
    marginTop: "3%",
    marginBottom: "1%",
    flexDirection:"row"
  },
  indexBox:{
    borderRightWidth:2,
    borderRightColor:"#C9C9C9",
    justifyContent:"center",
    alignItems:"center",
    width: 50
  },
  index:{
    fontFamily:"SpoqaHanSansNeoBold"
  },
  itemInfoBox:{
    marginLeft:"3%"
  },
  itemInfo:{
    fontFamily:"Vitro_pride"
  }
});