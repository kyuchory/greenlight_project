import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';





const Sample1=()=> {
  return (
    <View style={styles.container}>
      <Image source={require('../icon+image/homeImage.jpg')} style={styles.image}/>
      <View style={styles.textView}>
      <Text style={styles.textStrong}>우리의</Text>
      <Text style={styles.textStrong}>New Brand</Text>
      <Text style={styles.textSmall}>이벤트기간 10%할인</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
    alignItems:'flex-end',
    justifyContent: 'flex-start',
  },
  image:{
    width:'100%',
    height:'100%',
  },
  textView:{
    position:'absolute',
    alignItems:'flex-end',
    paddingRight:'10%',
    paddingTop:'15%'
  },
  textStrong:{
    fontSize:40,
  },
  textSmall:{
    fontSize:20,
    marginTop:10,
  }
});

export default Sample1;

