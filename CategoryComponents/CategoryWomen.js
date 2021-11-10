import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from "expo-font";
Font.loadAsync({
  Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
  'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
});


export default function CategoryWomen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style ={styles.box1}>
      <Text style = {styles.textMain}>전체</Text>
      </View>

      <View style = {styles.Line}></View>
        <View style={styles.box2}>
          <Text style={styles.textBig}> 의류</Text></View>
          <View style = {styles.box3}>
            <View style = {styles.box4}>
            <TouchableOpacity onPress={() => navigation.navigate("CategoryOuter")}>
            <Text style = {styles.textSmall}> 아우터 </Text>     
            </TouchableOpacity>
            </View>

            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 상의 </Text>     
            </View>
          </View>  
          <View style = {styles.box3}>
            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 바지 </Text>     
            </View>
             <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 니트웨어 </Text>     
            </View>
        </View>  
        
        <View style={styles.box2}>
          <Text style={styles.textBig}> 가방 </Text></View>
          <View style = {styles.box3}>
            <View style = {styles.box4}>
            
            <Text style = {styles.textSmall}> 백팩 </Text>     
     
            </View>

            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 메신저백 </Text>     
            </View>
          </View>  
          <View style = {styles.box3}>
            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 토트백 </Text>     
            </View>
             <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 클러치백 </Text>     
            </View>
        </View>   
       
        <View style={styles.box2}>
          <Text style={styles.textBig}> 신발 </Text></View>
          <View style = {styles.box3}>
            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 운동화 </Text>     
            </View>

            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 샌들 </Text>     
            </View>
          </View>  
          <View style = {styles.box3}>
            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 슬리퍼/뮬 </Text>     
            </View>
             <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 기타 </Text>     
            </View>
        </View>  

        <View style={styles.box2}>
          <Text style={styles.textBig}> 액세서리/기타잡화 </Text></View>
          <View style = {styles.box3}>
            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 목걸이 </Text>
            </View>

            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 팔찌/반지 </Text>     
            </View>
          </View>  
          <View style = {styles.box3}>
            <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 벨트 </Text>     
            </View>
             <View style = {styles.box4}>
            <Text style = {styles.textSmall}> 기타 </Text>     
            </View>
        </View>       
    
    </View>

     
      

      
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
    
    box1: {
    marginTop:15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width:'90%',
    height:'5%',
    backgroundColor:'white', 
  },
 
  Line:{
    flexDirection: 'row',
    width:'95%',
    height:'0.2%',
    backgroundColor:'#b6b6b6',
  },
  box2: {
      marginTop:15,
      flexDirection: 'column',
      width:'90%',
      height:'5%',
      backgroundColor:'white',
  },
  box3: {
    flexDirection: 'row',
    width:'85%',
    height:'5.5%',
  },
  box4:{
    flexDirection: 'column',
    width:'50%',
    height:'100%',
    backgroundColor:'lightgrey', 
    opacity:0.8,
  },

  textMain: {
    fontSize:20,
    fontFamily: "Vitro_pride", 
    marginLeft:10,
    color:"grey"
  },

  textSmall:{
    fontSize:15,
    fontFamily: "Vitro_pride", 
    marginLeft:15,
    marginTop:12,
    },

  textBig:{
    fontSize:20,
    fontFamily: "Vitro_pride", 
    marginLeft:10, 
  },

});
