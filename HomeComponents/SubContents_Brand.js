import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function SubContents_Brand(){
  return (

    <View style={styles.container}>

      
      <View style={styles.imgContainer}>
          <Image
          source={require("../icon+image/brand.jpg")}
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
    marginTop:"0%"
  },
  image: {
    width:"100%",
    height:"90%",
    resizeMode:'stretch'

  },
});
