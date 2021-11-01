import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { firestore } from "../utils/firebase";
import * as Font from 'expo-font';
import { render } from 'react-dom';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";

Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
  });


export default function CategoryOuter() {

const Main = () => {
    return(
      <View style={styles.main}>
              
      <View style = {styles.box1}>
            <Image source= {require("../icon+image/outer_brownjacket1.png")} 
            style={styles.image} />
      </View>

      <View style = {styles.box2}>
          <View style = {styles.option}>
          <Text>옵션선택칸</Text> 
          </View>

          <View style = {styles.payment}>
          <Image source ={require("../icon+image/purchase_button.png")}
          style={styles.purchase} />
          </View>
      </View>


      </View>

      
    )
  }  

const Page = () => {
  return(
   <View style = {styles.page}>
      <Image source = {require("../icon+image/outer_brownjacketpage.jpg")}
      style = {styles.page_img}/>
  </View> 
  )
  
}

 return (
    <View style={styles.container}>
          <ScrollView>

          <Main/>
          <Page/>

          </ScrollView>
    </View>

    

  ); 
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection:'column',
    width:'100%',
    height:'100%',
  },

  main:{
    flexDirection: 'column',
    //alignItems: 'flex-start',
    width:'100%',
    height:'170%',
    backgroundColor:'white',
    marginTop:'10%',
    alignItems:"center",
  },

  page: {
    marginTop: '30%',
    width:'100%',
    height: '750%',
    alignItems:"center",
  },

  box1: {
    width:'90%',
    height:'100%',
    flexDirection: 'column',
    backgroundColor: '#b6b6b6',
    marginTop: '10%',
  },

  box2: {
    width:'90%',
    height:'10%',
    flexDirection: 'row',
    backgroundColor: 'yellow',
    marginTop: '5%',
    //alignItems: "center",
  },

  option:{
    width:'30%',
    height:'100%',
    backgroundColor: 'white',
    marginLeft: "10%",
  },
  
  payment: {
    width:'30%',
    height:'100%',
    backgroundColor: 'white',
    marginLeft: "20%",
  },
  
  image: {
    width: '100%',
    height: '100%',
  },
  page_img:{
    width: '90%',
    height: '90%', 
  },
  purchase: {
    width: '100%',
    height: '100%',
  },
  textSmall:{
    fontSize:15,
    fontFamily: "Vitro_pride", 
    marginLeft:'10%',
    },
});