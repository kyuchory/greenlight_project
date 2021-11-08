import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import ProgressBar from "../Components/ProgressBar";

import { firestore } from "../utils/firebase";
import * as Font from 'expo-font';

Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    Vitro_core: require('../assets/fonts/Vitro_core.ttf'),
    'Vitro_core': require('../assets/fonts/Vitro_core.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
    SpoqaHanSansNeoBold : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    'SpoqaHanSansNeo-Bold' : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
  });



export default function Donate({ navigation }) {

  const [lifeUppoint, setLifeUppoint] = useState(0);
  const [polarBearPoint, setPolarBearPoint] = useState(0);

  const getProgress = async() => {
    const document = await firestore.collection('Brand').doc('LifeUpForest').get();
    const lifeUpProgress = document.get('progress'); //데이터베이스에서 가져온 진행도
    const document2 = await firestore.collection('Brand').doc('PolarBear').get();
    const polarBearProgress = document2.get('progress'); //데이터베이스에서 가져온 진행도

    setLifeUppoint(lifeUpProgress);
    setPolarBearPoint(polarBearProgress);
  }

  getProgress();


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
        <View style={{flexDirection:"row", paddingLeft:"5%",}}>
        <Image
        source={require("../icon+image/donatable.png")}
        style={styles.optionIcon}/>
        <Image
        source={require("../icon+image/donateHistory.png")}
        style={styles.optionIcon}/>

        </View>

    <View style={styles.brandList}>

      <TouchableOpacity
        style={styles.brandWrapper}
        onPress={() => navigation.navigate("DonateDetailPage1")}>
        <Image
        source={require("../icon+image/forest1.png")}
        style={styles.brandImg}/>
        <View style={styles.nameAndBar}>
          <Text style={styles.brandName}>'라이프업 숲' 조성 캠페인</Text>

              <View style={styles.progressBar}>
                <ProgressBar count={lifeUppoint * 0.01} />
                <Text style={{marginLeft:"2%", fontSize:14}}>{lifeUppoint}%</Text>
              </View>

          <Text style={{marginLeft:"2%", marginTop:"2%",fontFamily:"Vitro_pride", fontSize:9}}>
            '라이프업'에서 주관하는 나무심기 운동, 후원자 이름 새긴 비석 건립 계획</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.brandWrapper}
        onPress={() => navigation.navigate("DonateDetailPage2")}>
        <Image
        source={require("../icon+image/polarBear1.jpg")}
        style={styles.brandImg}/>
        <View style={styles.nameAndBar}>
          <Text style={styles.brandName}>북극곰 살리기 캠페인</Text>

              <View style={styles.progressBar}>
                <ProgressBar count={polarBearPoint * 0.01} />
                <Text style={{marginLeft:"2%", fontSize:14}}>{polarBearPoint}%</Text>
              </View>

          <Text style={{marginLeft:"2%", marginTop:"2%",fontFamily:"Vitro_pride", fontSize:10}}>
            기후변화로 멸종위기에 놓인 북극곰을 살려주세요</Text>
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
  fontFamily:"Vitro_core",
  color: "#00FF00",
  fontSize:24,
  marginLeft:"3%"
},
closeIcon:{
  width:20,
  height:20,
  marginRight:"5%"
},
optionIcon:{
  width:50,
  height:20,
  marginRight:"2%",
  borderRadius:6
},
brandList:{
// borderColor:'red',
// borderWidth:1,
alignItems:"flex-start",
paddingLeft:"5%",
marginTop:"2%",
},
brandWrapper:{
borderColor:'#E7FCE0',
backgroundColor:'#E7FCE0',
borderWidth:1,
borderRadius:10,
flexDirection:"row",
alignItems:"center",
marginBottom:"5%",
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