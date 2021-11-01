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
    BinggraeMelonaBold: require('../assets/fonts/BinggraeMelona-Bold.ttf'),
    'BinggraeMelona-Bold': require('../assets/fonts/BinggraeMelona-Bold.ttf'),
  });


export default function CategoryOuter() {

const Main = () => {
    return(
      <View style={styles.main}>
              
      <View style = {styles.box1}>
            <Image source= {require("../icon+image/outer_brownjacket1.png")} 
            style={styles.image} />
      </View>
      <View style={styles.box3}>
        <Text style = {styles.textSmall}>
          프로이탁
        </Text>
        <Text style = {styles.textBold}>
          Brown Jacket
        </Text>
        <Text style = {styles.textSmall}>
          45,000원
        </Text>
      </View>
      <View style = {styles.box2}>
          <View style = {styles.option}>
          <Text style = {styles.textBold}>옵션선택칸</Text> 
          </View>

          <View style = {styles.payment}>
          <Image source ={require("../icon+image/purchase_button.png")}
          style={styles.purchase} />
          </View>

          <View style = {styles.share}>
          <Image source ={require("../icon+image/share.png")}
          style={styles.share} /> 
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
    backgroundColor: 'white',
    flexDirection:'column',
    width:'100%',

  },

  main:{
    width:'100%',
    backgroundColor:'white',
    marginTop:'10%',
    alignItems:"center",
  },

  page: {
    marginLeft:'3%',
    width:'95%',
    justifyContent: 'center',
    alignItems:"center",
    marginTop: '3%',
  },

  box1: {
    width:'90%',
    flexDirection: 'column',
    backgroundColor: '#b6b6b6',
    marginTop: '10%',
    
  },

  box2: {
    width:'90%',
 //   height:'10%',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: '3%',
    //alignItems: "center",
  },

  box3: {
    width:'100%',
    flexDirection: 'column',
   backgroundColor: 'white',
    marginTop: '5%',
    marginBottom: '3%',
  },
  line1:{
    width:'100%',
    height:'0.2%',
    backgroundColor: '#b6b6b6',
  },
  option:{
    width:'30%',
   // height:'100%',
    backgroundColor: 'white',
    marginLeft: "10%",
  },
  
  payment: {
    width:'30%',
  //  height:'100%',
    backgroundColor: 'white',
    marginLeft: "10%",
    marginRight: "10%",
  },
  share:{
    marginLeft: "10%",
    width: '10%',

  },
  
  image: {
    width: '100%',
  },
  page_img:{
    width: '100%',
  },
  purchase: {
    width: '100%',
  },
  share:{
    width:'25%',
  },
  textSmall:{
    fontSize:16,
    fontFamily: "Vitro_pride", 
    marginLeft:'5%',
    },
  textBold:{
    fontSize:18,
    fontFamily: "BinggraeMelonaBold",
    marginLeft:'5%',
  }
});