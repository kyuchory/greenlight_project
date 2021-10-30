import React, { useState, useRef, useEffect, useContext } from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Image, Input, Button } from '../Components'
import { images } from '../utils/images';
import * as Font from 'expo-font';

Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
  });


export default function Mypage() {

  //얇은 섹션 구분선
  const Line1 = () => {
    return(
      <View style = {styles.line1_Container}>
        
      </View> 
    )
  }

  const Profile = () => {
    return(
      <View style = {styles.Profile}>
      <Image rounded source= {require("../icon+image/default_profile.png")} 
          style={styles.image} />
      <Text style = {styles.textName}>
        아무개님~
      </Text>
      </View>
    )
  }

//두꺼운 섹션 구분선
  const Line2 = () => {
    return(
      <View style = {styles.line2_Container}>

      </View> 
    )
  }
  
  //쇼핑포인트, 기부포인트, 쿠폰, 후원내역
  const Shopping = () => {
    return(
      <View style = {styles.Shopping_Container}>
         <Image source= {require("../icon+image/point.png")} 
          style={styles.Point_img} />

           <Image source= {require("../icon+image/point_donate.png")} 
          style={styles.image} />

           <Image source= {require("../icon+image/coupon.png")} 
          style={styles.image} />

           <Image source= {require("../icon+image/donate.png")} 
          style={styles.image} />

      </View>
    )
  }

  const Delivery = () => {
    return(
      <View style = {styles.Delievery_Container}>
        <Text style = {styles.textDelivery}>
          주문/배송조회
        </Text>
      </View>
    )
  }

  const Delivery2 = () => {
    return(
      <View style = {styles.Delivery2_Container}>

      </View>
    )
  }

  const Delivery3 = () => {
    return(
      <View style = {styles.Delivery3_Container}>

      </View>
    )
  }

  const Cancle = () => {
    return(
      <View style = {styles.Cancle_Container}>
      <Text style = {styles.textDelivery}>
          취소/교환/환불
        </Text>
      </View>
    )
  }

 const Cancle2 = () => {
    return(
      <View style = {styles.Cancle2_Container}>

      </View>
    )
  }

  const Cancle3 = () => {
    return(
      <View style = {styles.Cancle3_Container}>
      <Text style = {styles.textSmall}>
        dd
      </Text>
      </View>
    )
  }
  const Call = () => {
    return(
      <View style = {styles.Call_Container}>
        <Text style = {styles.textNumber}>
          0000-0000
        </Text>
        <Text style = {styles.textInfo}>
          cs_help@lifeup.co.kr
        </Text>
        <Text style = {styles.textInfo}>
          운영시간 / 평일 09:00 - 17:00
        </Text>
        <Text style = {styles.textInfo}>
          점심시간 / 12:30 - 13:00
        </Text>
      </View>
    )
  }
 
  return(
    <View style={styles.container}>
      <Line1/>

      <Profile/>
      <Line2/>
      
      <Shopping/>
      <Line1/>
      
      <Delivery/>
      <Delivery2/>
      <Delivery3/>
      <Line1/>
      
      <Cancle/>
      <Cancle2/>
      <Cancle3/>
      <Line2/>
      
      <Call/>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#c8c8c8',
  },

  line1_Container: {
    width:'100%',
    height:'0.3%',
    backgroundColor:'#c8c8c8',
    justifyContent: 'center', 
  },

  line2_Container: {
    width: '100%',
    height: '1%',
    backgroundColor: '#c8c8c8', 
    justifyContent: 'center', 
  },

  Profile:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    width:'100%',
    height:'18%',
    backgroundColor:'#ffffff',
    justifyContent: 'space-around',
  },

  image: {
    width: "100%",
    height: "100%",
  },

  Shopping_Container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width:'100%',
    height:'20%',
    backgroundColor:'#ffffff',
    justifyContent: 'space-around', 
  },

  Point_img:{
    width: "100%",
    height: "100%", 
  },

  Delievery_Container: {
    width:'100%',
    height:'5%',
    backgroundColor:'#ffffff', 
  }, 
  Delivery2_Container:{
    width:'100%',
    height:'10%',
    backgroundColor:'#ffffff', 
    justifyContent: 'space-around',
  },
  Delivery3_Container:{
    width:'100%',
    height:'3%',
    backgroundColor:'#ffffff',
    justifyContent: 'space-around',
     
  },

  Cancle_Container: {
    width:'100%',
    height:'5%',
    backgroundColor:'#ffffff',
  },
  Cancle2_Container: {
    width:'100%',
    height:'10%',
    backgroundColor:'#ffffff',
    justifyContent: 'space-around',
  },  
  Cancle3_Container:{
    width:'100%',
    height:'3%',
    backgroundColor:'#ffffff',
    justifyContent: 'space-around',
  },

  Call_Container: {
    width:'100%',
    height:'24%',
    backgroundColor:'#ffffff',
  }, 

  textName: {
    fontSize: 20,
    fontFamily: "Vitro_pride",
    marginTop: '10%',
  },
  textInfo: {
    marginLeft:15,
    marginTop:5,
    fontSize: 15,
    fontFamily: "Vitro_pride",
  },

  textNumber: {
    marginLeft:15,
    marginTop: 10,
    fontSize: 30,
    fontFamily: "WemakepriceBold",
  },

  textDelivery: {
   marginLeft: 15,
   marginTop:10,
   fontSize:20,
   fontFamily: "Vitro_pride", 
  },
  textSmall:{
  fontSize:10,
  fontFamily: "Vitro_pride", 
  },
});

//총 한 5개 박스로 구성, 마이페이지 헤더(10%), 프로필(20), 쇼핑(20), 배송(20), 취소(20), cs관련(20)
/*

import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FabricConsumer, FabricProvider } from "../ChatBot/ChatBot_Context";

export default function MyPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.notice}>MyPage</Text>
        <FabricConsumer>
        {value=>(
        <Text>
          후원 현황
          옷감 정보 : {value.state.fabric} 
          벌 수 : {value.state.count}
        </Text>
        )}
        </FabricConsumer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  notice: {
    marginBottom: 30,
    fontSize: 25,
  },
});
*/