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


const handleFireBase = async()=>{
  const document = await firestore.collection("outer").doc("outer1").get();
  const tempName = await document.get("name");
  const tempPrice = await document.get("price");
  const tempImg = await document.get("uri");
  // console.log("ddd"+tempName);
  // console.log("ddd"+tempPrice);
  // console.log(tempImg);
  setOuterName(tempName);
  setOuterPrice(tempPrice);
  setOuterImg(tempImg);
  
}

handleFireBase();

const Box = () => {
    return(
      <View style = {styles.box}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
            <TouchableHighlight/>
            <Image source= {{uri:`${outerImg}`}} 
            style={styles.image} />
      <Text style = {styles.textSmall}> GreenLight </Text>
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
      <Text style = {styles.textSmall}> GreenLight </Text>
      <Text style = {styles.textBold}> Green Jacket</Text>
      <Text style = {styles.textBold}> 50,000원</Text>
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
      <Text style = {styles.textSmall}> GreenLight </Text>
      <Text style = {styles.textBold}> Orange Jacket</Text>
      <Text style = {styles.textBold}> 50,000원</Text>
        </TouchableOpacity>
  
      </View>
    )
  }  
 return (
    <View style={styles.container}>
      <View style={styles.section}>

        <Box/>
        <Box2/>
        <Box3/>
 
      </View>

    </View>

  ); 
};



const styles = StyleSheet.create({
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
    marginTop:'10%',
    justifyContent: 'space-around',

  },

  box: {
    width:'33%',
    height:'35%',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: '10%',
  },

  
  image: {
    //marginLeft: '30%',
    width: '100%',
    height: 200,
  },

  textSmall:{
    fontSize:17,
    fontFamily: "Vitro_pride", 
    marginLeft:'1.5%',
    },
  textBold:{
    fontSize:19,
    fontFamily: "BinggraeMelonaBold",
    //marginLeft:'10%',
  }
});