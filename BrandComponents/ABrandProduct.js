import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';

Font.loadAsync({
  Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
  'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
  WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
  'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
  HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
  'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
});



const ABrandProduct=()=> {
  return (
    <View style={styles.container}>
      <View style={styles.productTitle}>
        <Text style={styles.strong}>제작 예정 상품</Text>
        <Text style={styles.small}>업사이클링 제품 특성 상 상품마다 약간의 차이가 있을 수 있습니다.</Text>
      </View>
      <View style={styles.productDesc}>
        <Image source={require("../icon+image/tshirtImg1.jpg")} style={styles.tshirtImg}/>
        <View style={styles.productDescText}>
          <Text style={styles.strong}>t_shirt</Text>
          <Text style={styles.normal}>1,000개</Text>
          <View style={styles.iconandimg}>
            <Image source={require('../icon+image/magnifyingGlass.png')} style={{ width:12, height:12, marginRight:2 }}/>
            <Text style={styles.normal}>제품 상세정보</Text>
          </View>
          <View style={styles.iconandimg}>
            <Image source={require('../icon+image/solidarity.png')} style={{ width:12, height:12, marginRight:2 }}/>
            <Text style={styles.normal}>후원하기</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"90%",
    marginLeft:"5%"

  },
  productTitle:{
    flex:1,
    marginTop:10,

  },
  strong:{
    color:"#6E6E6E",
    fontSize:18,
    fontFamily:'WemakepriceBold',
  },
  small:{
    color:"#848484",
    fontSize:10,
    fontFamily:'Vitro_pride',
    marginTop:10
  },
  productDesc:{
    flex:3,
    flexDirection:'row',
  },
  tshirtImg:{
    flex:1,
    width:"100%",
    height:"100%",
    // borderColor:"red",
    // borderWidth:1,

  },
  productDescText:{
    flex:1,
    marginLeft:"5%",
    // borderColor:"blue",
    // borderWidth:1,
    // justifyContent:'space-around'
  },
  normal:{
    color:"#848484",
    fontSize:15,
    fontFamily:'Vitro_pride',
  },
  iconandimg:{
    flexDirection:'row',
    alignItems:'center'
  }
});

export default ABrandProduct;

