import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

function LogoTitle() {
    return (
    <View style={stytles.headerView}>
        <View style={stytles.titleWrapper}>
            <Text style={stytles.title}>LifeUP</Text>
        </View>
        <View style={stytles.inputWrapper}>
        <Image source={require('../icon+image/magnifyingGlass.png')} style={stytles.inputicon}/>
            <TextInput style={stytles.input}/>
        </View>
        <View style={stytles.iconWrapper}>
         <Image source={require('../icon+image/shoppingbag.png')} style={stytles.icon}/>
        </View>
    </View>
      
    );
  }

  const stytles = StyleSheet.create({
    headerView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },

    titleWrapper:{
        flex:1,
    },


    title:{
        color:"#00FF00",
        fontSize:30,
        fontWeight:"900",
        
        
    },
    inputWrapper:{
        flex:2,
        backgroundColor:'#F2F2F2',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        
    },
    inputicon:{
        width:20,
        height:20,
        marginLeft:10,
        marginRight:10,

        
    },
    input:{
        
        
    },
    iconWrapper:{
        flex:1,
        alignItems:'center'

    },
    icon:{
        width:30,
        height:30,
    }



});

export default LogoTitle;