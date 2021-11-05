import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import ProgressBar from "../Components/ProgressBar";
import { PointConsumer } from "../context/point";
import * as Font from 'expo-font';

Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
    SpoqaHanSansNeoBold : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    'SpoqaHanSansNeo-Bold' : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
  });



export default function Donate({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>기부하기</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
        source={require("../icon+image/close.png")}
        style={styles.closeIcon}/>
        </TouchableOpacity>
        </View>
    <Text style={styles.ableBrand}>후원 가능 브랜드</Text>

    <View style={styles.brandList}>


      <TouchableOpacity
        style={styles.brandWrapper}
        onPress={() => navigation.navigate("ABrand")}>
        <Image
        source={require("../icon+image/forest1.png")}
        style={styles.brandImg}/>
        <View style={styles.nameAndBar}>
          <Text style={styles.brandName}>'라이프업 숲' 조성 캠페인</Text>
          <PointConsumer>
            {(value) => (
              <View style={styles.progressBar}>
                <ProgressBar count={value.state.point * 0.01} />
                <Text style={{marginLeft:"2%", fontSize:14}}>{value.state.point}%</Text>
              </View>
            )}
          </PointConsumer>
          <Text style={{marginLeft:"2%", marginTop:"2%",fontFamily:"Vitro_pride", fontSize:9}}>
            '라이프업'에서 주관하는 나무심기 운동, 후원자 이름 새긴 비석 건립 계획</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.brandWrapper}
        onPress={() => navigation.navigate("ABrand")}>
        <Image
        source={require("../icon+image/forest1.png")}
        style={styles.brandImg}/>
        <View style={styles.nameAndBar}>
          <Text style={styles.brandName}>바다 정화 운동</Text>
          <PointConsumer>
            {(value) => (
              <View style={styles.progressBar}>
                <ProgressBar count={value.state.point * 0.01} />
                <Text style={{marginLeft:"2%", fontSize:14}}>{value.state.point}%</Text>
              </View>
            )}
          </PointConsumer>
          <Text style={{marginLeft:"2%", marginTop:"2%",fontFamily:"Vitro_pride", fontSize:10}}>
            일단 보류...</Text>
        </View>
      </TouchableOpacity>

    </View>

  </View>
);
}

const styles = StyleSheet.create({
container: {
// display: "flex",
flex: 1,
backgroundColor: "#fff",
// alignItems: "center",
// justifyContent: "center",
},
header:{
  marginTop:"8%",
  height:"8%",
  flexDirection:"row",
  alignItems:"center"
},
headerText:{
  flex:1,
  fontFamily:"BinggraeMelona-Bold",
  color: "#00FF00",
  fontSize:25,
  marginLeft:"3%"
},
closeIcon:{
  width:20,
  height:20,
  marginRight:"5%"
},
ableBrand:{
margin:7,
fontSize: 18,
fontFamily:'Vitro_pride',
color:"#5D5D5D"
},
brandList:{
// borderColor:'red',
// borderWidth:1,
alignItems:"flex-start",
paddingLeft:"5%"

},
brandWrapper:{
borderColor:'#E7FCE0',
backgroundColor:'#E7FCE0',
borderWidth:1,
borderRadius:10,
flexDirection:"row",
alignItems:"center",
marginTop:"7%",
width:325,
height:100
},
brandImg:{
width:50,
height:60,
marginRight:"2%",
marginLeft:"2%",
},
nameAndBar:{
// borderColor:'red',
// borderWidth:1,
flexDirection:"column"
},
brandName: {
alignItems: "flex-start",
fontSize: 18,
fontFamily:'SpoqaHanSansNeoBold',
color:"#444343"
},
progressBar:{
width:"70%",
flexDirection:"row",

alignItems:"center",

},


});