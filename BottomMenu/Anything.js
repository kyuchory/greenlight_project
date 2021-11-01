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
  });

  const touchGuide = () =>{

  }

export default function Anything({ navigation }) {

  return (
      <View style={styles.container}>
        <Text style={styles.ableBrand}>후원 가능 브랜드</Text>

        <View style={styles.brandList}>


          <TouchableOpacity
            style={styles.brandWrapper}
            onPress={() => navigation.navigate("ABrand")}>
            <TouchableHighlight style={styles.circle}/>
            <View style={styles.nameAndBar}>
              <Text style={styles.brandName}>GREENLIGHT</Text>
              <PointConsumer>
                {(value) => (
                  <View style={styles.progressBar}>
                    <ProgressBar count={value.state.point * 0.01} />
                    <Text style={{marginLeft:"4%", fontSize:14}}>{value.state.point}%</Text>
                  </View>
                )}
              </PointConsumer>
              <Text style={{marginLeft:"1%"}}>폐섬유, 특수소재</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.brandWrapper}
            onPress={() => navigation.navigate("ABrand")}>
            <TouchableHighlight style={styles.circle}/>
            <View style={styles.nameAndBar}>
              <Text style={styles.brandName}>FRIEDTAG</Text>
              <PointConsumer>
                {(value) => (
                  <View style={styles.progressBar}>
                    <ProgressBar count={value.state.point * 0.01} />
                    <Text style={{marginLeft:"3%", fontSize:14}}>{value.state.point}%</Text>
                  </View>
                )}
              </PointConsumer>
              <Text style={{marginLeft:"1%"}}>폐섬유</Text>
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
  circle:{
    marginTop:"20%",
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:'#FAE0D4',
    marginRight:"3%",

  },
  nameAndBar:{
    // borderColor:'red',
    // borderWidth:1,
    flexDirection:"column"
  },
  brandName: {
    alignItems: "flex-start",
    fontSize: 23,
    fontFamily:'Wemakeprice-Bold',
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