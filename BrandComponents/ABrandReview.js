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

const ReviewBox=()=>{
  return(
    <View style={styles.reviewBoxContainer}>
      <View>
        <Image source={require("../icon+image/reviewTshirt.jpg")} style={{ width:100, height:80 }}/>
      </View>
      <View style={{ marginLeft:10 }}>
        <View style={{ flexDirection:'row', paddingTop:10, paddingBottom:10 }}>
          <Text style={{ color: "orange" } }>★★★★★</Text>
          <Text style={{ color: "#848484" } }> - 아주 좋아요</Text>
        </View>
        <View>
          <Text style={{ fontFamily:'Vitro_pride' } }>{`품질이 좋고 친환경적이어서\n더욱 애착이 가는 옷이에요!`}</Text>
        </View>
      </View>
    </View>
  );
}



const ABrandReview=()=> {
  return (
    <View style={styles.container}>
      <ReviewBox/>
      <ReviewBox/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  reviewBoxContainer:{
    flexDirection:'row',
    borderBottomColor:'#848484',
    borderBottomWidth:0.5,
    padding:20,
  }
});

export default ABrandReview;

