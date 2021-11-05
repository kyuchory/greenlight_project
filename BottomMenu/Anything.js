import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import ProgressBar from "../Components/ProgressBar";
import { PointConsumer } from "../context/point";
import { firestore } from "../utils/firebase";
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


export default function Anything({ navigation }) {


    //context랑 파이어베이스랑 연결을 못하겠어서 그냥 파이어베이스만 씁니다...
    const [point, setPoint] = useState(0);
    const getProgress = async() => {
      const document = await firestore.collection('Brand').doc('GreenLight').get();
      const progress = document.get('progress'); //데이터베이스에서 가져온 진행도
      // <PointConsumer>
      // {(value) => (
      //    value.actions.setPoint(progress)
      // )}
      // </PointConsumer>
      setPoint(progress);
    }
  
    getProgress();

  return (
      <View style={styles.container}>
        <Text style={styles.ableBrand}>후원 가능 브랜드</Text>

        <View style={styles.brandList}>


          <TouchableOpacity
            style={styles.brandWrapper}
            onPress={() => navigation.navigate("ABrand")}>
            <Image
            source={require("../icon+image/brandImg1.jpg")}
            style={styles.brandImg}/>
            <View style={styles.nameAndBar}>
              <Text style={styles.brandName}>GreenLight</Text>
              {/* <PointConsumer>
                {(value) => ( */}
                  <View style={styles.progressBar}>
                    <ProgressBar count={point * 0.01} />
                    <Text style={{marginLeft:"2%", fontSize:14}}>{point}%</Text>
                  </View>
                {/* )}
              </PointConsumer> */}
              <Text style={{marginLeft:"2%",fontFamily:"Vitro_pride", fontSize:12}}>폐섬유, 특수소재</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.brandWrapper}
            onPress={() => navigation.navigate("ABrand")}>
            <Image
            source={require("../icon+image/brandImg2.jpg")}
            style={styles.brandImg}/>
            <View style={styles.nameAndBar}>
              <Text style={styles.brandName}>Friedtag</Text>
              <PointConsumer>
                {(value) => (
                  <View style={styles.progressBar}>
                    <ProgressBar count={value.state.point * 0.01} />
                    <Text style={{marginLeft:"2%", fontSize:14}}>{value.state.point}%</Text>
                  </View>
                )}
              </PointConsumer>
              <Text style={{marginLeft:"2%",fontFamily:"Vitro_pride", fontSize:12}}>폐섬유</Text>
            </View>
          </TouchableOpacity>


        </View>
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate("UserGuide")}>
            <Image
            source={require("../icon+image/userGuideIcon.png")}
            style={{width: 110,height: 35,}}/>
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
    fontSize: 21,
    fontFamily:'SpoqaHanSansNeoBold',
    color:"#444343"
  },
  progressBar:{
    width:"70%",
    flexDirection:"row",
    
    alignItems:"center",
  
  },
  iconWrapper:{
    height:"50%",
    justifyContent:"flex-end",
    alignItems:"center"
  }

});