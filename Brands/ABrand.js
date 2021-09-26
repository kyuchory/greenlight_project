import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import BrandSubContents from "../BrandComponents/ABrandSubContents";


export default function ABrand() {
    
  
    return (
        <View style={styles.container}>

            <View style={styles.brandTopWrapper}>
                <View style={styles.backgroundPicWrapper}>
                    <ImageBackground source={require("../icon+image/brandImg1.jpg")} style={styles.backgroundPic}/>
                </View>
                <View style={styles.brandIntro}>
                    <View style={styles.brandtitle}>
                        <Text style={styles.brandName}>A Brand</Text>
                        <Image source={require("../icon+image/heart.png")} style={styles.heart}/>
                    </View>
                    <Text style={styles.brandDesc}>자연으로부터 받은 영감을 재사용 면을 이용해 새로운 의류로 만드는 브랜드</Text>
                </View>
                <Image source={{uri:"https://youthumbnail.com/image/youtube-player.webp"}} style={styles.youtubePic}/>                

            </View>


            <View style={styles.brandBottomWrapper}>
                <BrandSubContents/>
            </View>

        </View>

    );
  }
  
  const styles = StyleSheet.create({
    container:{
        flex:1,
    
    },
    brandTopWrapper:{
        flex:1,
        // justifyContent:"center",
        // alignItems:"center"
    
    },

    backgroundPicWrapper:{
        
    },
    backgroundPic:{
        width:"100%",
        height:"100%",
        opacity:0.5,
    },
    brandIntro:{
        width:"80%",
        // borderColor:"red",
        // borderWidth:1,
        margin:"10%",
        position:"absolute",
        
    },
    brandtitle:{
        flexDirection:"row",
        alignItems:"center",
        
    },
    brandName:{
        color:"white",
        fontSize:32,
        fontWeight:"bold",

    },
    heart:{
        width:25,
        height:25,
        marginLeft:10
    },
    brandDesc:{
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        

    },
    youtubePic:{
        width:"70%",
        height:"40%",
        position:"absolute",
        marginLeft:"15%",
        marginTop:"45%",

    },
    brandBottomWrapper:{
        flex:1,
    }

  });
  