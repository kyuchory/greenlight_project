import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function SubContents_Brand(){
  return (

    <View style={styles.container}>

      
      <View style={styles.imgContainer}>
          <Image
          source={require("../icon+image/brand_down.jpeg")}
          style={styles.image}/>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start',
    flexDirection:"column",
  },
  imgContainer:{
    flex:1,
    //flexDirection:"row",
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width:"100%",
    height:"65%",
    resizeMode:'contain'

  },
});