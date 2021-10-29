import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


const SubContents_Eco=()=> {
  return (

    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../icon+image/ecoImg1.png")}
          style={styles.image}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  imgContainer:{
    flex:1,
    // borderColor:"red",
    // borderWidth:2,
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width:"100%",
    height:"100%",
    resizeMode:'stretch'

  },
});

export default SubContents_Eco;

