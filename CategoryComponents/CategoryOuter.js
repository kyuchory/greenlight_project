import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Image, LogBox } from "react-native";
import { useState, useContext, useEffect,} from 'react'
import { firestore } from "../utils/firebase";
import * as Font from 'expo-font';
import { render } from 'react-dom';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
     BinggraeMelonaBold: require('../assets/fonts/BinggraeMelona-Bold.ttf'),
    'BinggraeMelona-Bold': require('../assets/fonts/BinggraeMelona-Bold.ttf'),
  });



const databaseURL = "https://green-light-1030-default-rtdb.firebaseio.com";



export default function CategoryOuter() {
const navigation = useNavigation();

const[outerName, setOuterName] = useState(0);
const[outerPrice, setOuterPrice] = useState(0);
const[outerImg, setOuterImg] = useState(0);
const[outerStore, setOuterStore] = useState(0);

const[outerName2, setOuterName2] = useState(0);
const[outerPrice2, setOuterPrice2] = useState(0);
const[outerImg2, setOuterImg2] = useState(0);
const[outerStore2, setOuterStore2] = useState(0);

const[outerName3, setOuterName3] = useState(0);
const[outerPrice3, setOuterPrice3] = useState(0);
const[outerImg3, setOuterImg3] = useState(0);
const[outerStore3, setOuterStore3] = useState(0);

const handleFireBase = async()=>{
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
  
}

handleFireBase();

const Box = () => {
    return(
      <View style = {styles.box}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
            <TouchableHighlight/>
            <Image source= {{uri:`${outerImg}`}} 
            style={styles.image} />
      <Text style = {styles.textSmall}> {outerStore} </Text>
      <Text style = {styles.textBold}> {outerName}</Text>
      <Text style = {styles.textBold}> {outerPrice}원</Text>
        </TouchableOpacity>
  
      </View>
    )
  } 
  const Box2 = () => {
    return(
      <View style = {styles.box}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
            <TouchableHighlight/>
            <Image source= {require("../icon+image/outer_greenjacket.jpg")} 
          style={styles.image} />
      <Text style = {styles.textSmall}> {outerStore2} </Text>
      <Text style = {styles.textBold}> {outerName2}</Text>
      <Text style = {styles.textBold}> {outerPrice2}원 </Text>
        </TouchableOpacity>
  
      </View>
    )
  }   
  const Box3 = () => {
    return(
      <View style = {styles.box}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
            <TouchableHighlight/>
            <Image source= {require("../icon+image/orange_jacket.jpg")} 
          style={styles.image} />
      <Text style = {styles.textSmall}> {outerStore3} </Text>
      <Text style = {styles.textBold}> {outerName3}</Text>
      <Text style = {styles.textBold}> {outerPrice3}원 </Text>
        </TouchableOpacity>
  
      </View>
    )
  }  
 return (
    <View style={styles.container}>

       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
           source={require("../icon+image/back.png")}
            style={styles.backIcon}/>

        </TouchableOpacity>
        <Text style={styles.headerText}>Outer</Text>
         
        </View>              

      <View style={styles.section}>

        <Box/>
        <Box2/>
        <Box3/>
 
      </View>

    </View>

  ); 
};



const styles = StyleSheet.create({

  header:{
    marginTop:"10%",
    height:"5%",
    flexDirection:"row",
    alignItems:"center",

  },

  backIcon:{
  width:25,
  height:25,
  marginLeft:"20%"
  },

  headerText:{
    flex:1,
    fontFamily:"BinggraeMelona-Bold",
    color: "black",
    fontSize:25,
    marginLeft:"17%"
  },

  container: {
    backgroundColor: 'white',
    width:"100%",
    height:"100%",
  },

  section:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    width:'100%',
    height:'30%',
    backgroundColor:'white',
    marginTop:'-3%',
    justifyContent: 'space-around',

  },

  box: {
    width:'31%',
    height:'35%',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: '10%',
  },

  
  image: {
    width: '100%',
    height: '80%',
  },

  textSmall:{
    fontSize:17,
    fontFamily: "Vitro_pride", 
    marginLeft:'1.5%',
    },
  textBold:{
    fontSize:18,
    fontFamily: "BinggraeMelonaBold",
    //marginLeft:'10%',
  }
});