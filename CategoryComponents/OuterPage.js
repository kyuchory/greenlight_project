import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useContext, useEffect,} from 'react'
import { firestore } from "../utils/firebase";
import * as Font from 'expo-font';
import { render } from 'react-dom';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";

const databaseURL = "https://green-light-1030-default-rtdb.firebaseio.com";

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


export default function CategoryOuter() {
const navigation = useNavigation();
const[outerName, setOuterName] = useState(0);
const[outerPrice, setOuterPrice] = useState(0);
const[outerImg, setOuterImg] = useState(0);
const[outerStore, setOuterStore] = useState(0);
const[like, setLike] = useState(0);


const handleFireBase = async()=>{
  const document = await firestore.collection("outer").doc("outer1").get();
  const tempName = await document.get("name");
  const tempPrice = await document.get("price");
  const tempImg = await document.get("uri");
  const tempStore = await document.get("store");
  const tempLike = await document.get("like");

  setLike(tempLike);
  setOuterName(tempName);
  setOuterPrice(tempPrice);
  setOuterImg(tempImg);
  setOuterStore(tempStore);
}

handleFireBase();

const Main = () => {
    return(
      <View style={styles.main}>

        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
           source={require("../icon+image/back.png")}
            style={styles.backIcon}/>

        </TouchableOpacity>
        <Text style={styles.headerText}>{outerName}</Text>
         
        </View>              



      <View style = {styles.box1}>
            <Image source= {require("../icon+image/outer_brownjacket1.png")} 
            style={styles.image} />
      </View>
      <View style={styles.box3}>
        <Text style = {styles.textSmall}>
          {outerStore}
        </Text>
        <Text style = {styles.textBold}>
          {outerName}
        </Text>
        <Text style = {styles.textSmall}>
          {outerPrice}원
        </Text>
      </View>
      <View style = {styles.box2}>
          <View style = {styles.option}>
          <Text style = {styles.textSmall}>Freesize</Text> 
          </View>

          <View style = {styles.payment}>
          <Image source ={require("../icon+image/purchase_button.png")}
          style={styles.purchase} />
          </View> 

          <View style = {styles.share}>
          <Image source ={require("../icon+image/share.png")}
          style={styles.share_img} /> 
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
          <View style = {styles.like}>
          <Image source ={require("../icon+image/heart.png")}
          style={styles.like_img} /> 
          </View>
          </TouchableOpacity>
        
      </View>


      </View>

      
    )
  }  

const Page = () => {
  return(
   <View style = {styles.page}>
      <Image source = {require("../icon+image/outer_brownjacketpage.jpg")}
      style = {styles.page_img}
      resizeMode= {"contain"}/>
  </View> 
  )
  
}

const Line1 = () => {
  return(
    <View style = {styles.line1}>
    </View>
  )
}
 return (

    <View style={styles.container}>
        <ScrollView>
          <Main/>
          <Line1/>
          <Page/>
        </ScrollView>
          

          
    </View>

  ); 
};



const styles = StyleSheet.create({
  container: {
    paddingTop:"8%",
    backgroundColor: 'white',
    flexDirection:'column',
    width:'100%',

  },
  header:{
    marginTop:"-8%",
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
    marginLeft:"4%"
  },
  main:{
    width:'100%',
    backgroundColor:'white',
    marginTop:'10%',
    alignItems:"center",
  },

  page: {
    marginBottom:'3%',
    padding:"1%",
    width:'100%',
    justifyContent: 'center',
    // borderColor:"red",
    // borderWidth:1
  },

  box1: {
    width:'90%',
    flexDirection: 'column',
    backgroundColor: '#b6b6b6',
    marginTop: '3%',
    
  },

  box2: {
    width:'90%',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent:"flex-start",
  },

  box3: {
    width:'90%',
    flexDirection: 'column',
   backgroundColor: 'white',
    marginTop: '5%',
    marginBottom: '3%',
    
  },
  line1:{
    marginTop:'-15%',
    width:'100%',
    height:'0.2%',
    backgroundColor: '#b6b6b6',
  },
  option:{
    flex:2,
    
    backgroundColor: 'white',
    
    justifyContent:"center",
    // borderColor:"blue",
    // borderWidth:1,

    
  },
  
  payment: {
    flex:4,
    alignItems:"center",
    justifyContent:"center"
  }, 
  like:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  share:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
 
  
  image: {
    width: '100%',
  },
  page_img:{
    width:'100%',
    
  },
  purchase: {
    width: '100%',
    borderRadius:10,
    borderWidth:1,
    borderColor:"black"
  },
  like_img:{
    width:30,
    height:30
    
  },
  share_img:{
    // width:'100%',
  },
  textSmall:{
    fontSize:16,
    fontFamily: "Vitro_pride", 

    },
  textBold:{
    fontSize:20,
    fontFamily: "BinggraeMelonaBold",

  }
});