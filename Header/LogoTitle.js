import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function LogoTitle() {
    return (
    <View style={stytles.headerView}>
        <Text style={stytles.title}>LifeUP</Text>
        <TextInput backgroundColor="gray" value={"ssssss"}/>
    </View>
      
    );
  }

  const stytles = StyleSheet.create({
    headerView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },


    title:{
        color:"#00FF00",
        fontSize:30,
        fontWeight:"900",
        
        
    },



});

export default LogoTitle;