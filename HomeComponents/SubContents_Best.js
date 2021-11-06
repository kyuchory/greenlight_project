import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function SubContents_Best(){
  return (

    <View style={styles.container}>

      <View style={styles.imgContainer}>
          <Image
          source={require("../icon+image/best.jpg")}
          style={styles.image}/>
      </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"column",
  },
  imgContainer:{
    flex:1,
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop:"5%"
  },
  image: {
    width:"100%",
    height:"95%",
    resizeMode:'stretch'

  },
});
