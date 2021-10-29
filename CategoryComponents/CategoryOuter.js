import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { Image, Input, Button } from '../Components'
import { StyleSheet, Text, View } from 'react-native';
import { firestore } from "../utils/firebase";
import * as Font from 'expo-font';
import { render } from 'react-dom';

Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
  });


//사진, 설명 등이 있는 게 스
//그 박스 세개를 정렬한 게 컬럼




export default function CategoryOuter() {


const Section = () => {
  return (
    <View style = {styles.section}>
    </View>
  )
} 

const Box = () => {
    return(
      <View style = {styles.box}>
      <Image source= {require("../icon+image/homeImage.jpg")} 
          style={styles.image} />
      <Text style = {styles.textSmall}> 어쩌구 저쩌구 </Text>
      <Text style = {styles.textSmall}> 가격이 어쩌구</Text>
      </View>
    )
  } 



       
              return(
                <View style = {styles.box}>
                <Image source= {require("../icon+image/homeImage.jpg")} 
                    style={styles.image} />
                <Text style = {styles.textSmall}> ddd</Text>
                <Text style = {styles.textSmall}> dds </Text>
                </View>

              )
              }
           // }
            
            
   

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  box: {
    width:'33%',
    height:'80%',
    flexDirection: 'column',
    backgroundColor: '#3AFCEF',
    marginTop: '10%',
  },

  section:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    width:'100%',
    height:'50%',
    backgroundColor:'white',
    justifyContent: 'space-around',
  },

  image: {
    marginLeft: '30%',
    width: '100%',
    height: '100%',
  },

  textSmall:{
    fontSize:15,
    fontFamily: "Vitro_pride", 
    marginLeft:10,
    },
});

//박스를 가로로 정렬하듯 UI 설정/ 상품사진, 브랜드명가격, 장바구니 표시와 찜 모두,,,