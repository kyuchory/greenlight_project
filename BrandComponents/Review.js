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
        <Image source={require("../icon+image/reviewTshirt.jpg")} style={{ width:120, height:100 }}/>
      </View>
      <View style={{ flexDirection:'row', paddingTop:15, paddingBottom:10 }}>
        <Text style={{ color: "orange" } }>★★★★★</Text>
        <Text style={{ color: "#848484" } }> - 아주 좋아요</Text>
      </View>
      <View>
        <Text style={{ fontFamily:'Vitro_pride' } }>질도 좋고 친환경적이어서 더욱 애착이 가는 옷이에요!</Text>
      </View>
    </View>
  );
}



const Review=()=> {
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
    borderBottomColor:'#848484',
    borderBottomWidth:0.5,
    padding:20,
  }
});

export default Review;

