import React, { useState, useContext, useEffect,} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground,Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { UserContext } from "../contexts";
import { firestore } from "../utils/firebase";
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';


Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
    BinggraeMelonaBold: require('../assets/fonts/BinggraeMelona-Bold.ttf'),
    'BinggraeMelona-Bold': require('../assets/fonts/BinggraeMelona-Bold.ttf'),
    SpoqaHanSansNeoBold : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    'SpoqaHanSansNeo-Bold' : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    esamanru_Light: require('../assets/fonts/esamanru_Light.ttf'),
    'esamanru_Light': require('../assets/fonts/esamanru_Light.ttf'),
  });



  export default function DonateDetailPage2({ navigation }) {

    return(
        <View style={styles.container}>
            <ImageBackground
            source={require("../icon+image/polarBear2.jpg")}
            style={styles.backgroundPic}>

                <View style={styles.IconWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                    source={require("../icon+image/back.png")}
                    style={styles.backIcon}/>
                </TouchableOpacity>
                </View>

                <View style={styles.contentsWrapper}>
                    <Text style={styles.title}>북극곰 살리기 캠페인</Text>
                    <Text style={styles.content}>
                        현재 멸종위기에 놓인 북극곰은 먹이사슬의{"\n"}
                        최상위 포식자로써 북극 생태계의 균형을{"\n"}
                        유지하는 데 중요한 역할을 합니다.{"\n"}
                        북극곰과 북극 생태계의 보전은{"\n"}
                        우리 모두를 위해 반드시 필요한 일입니다.{"\n"}
                        라이프업과 함께 기후변화 대응에 참여해 주세요!
                    </Text>
                    <View style={styles.PicWrapper}>
                        <Image
                        source={require("../icon+image/bearMainImg.png")}
                        style={styles.youtubePic}/>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("GoDonate")}>
                    <View style={styles.donateButton}>
                    <Text style={styles.buttonText}>기부하기</Text>                    
                    </View> 
                </TouchableOpacity>
            </ImageBackground>

        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop:"8%",
    },
    backgroundPic: {
    width: '100%',
    height: '100%',
    alignItems: "center",
    },
    IconWrapper:{
    flex: 1,
    width:"90%",
    alignItems: "flex-start",
    justifyContent:"center",
    // borderColor:"yellow",
    // borderWidth:1,
    },
    backIcon:{
    width:30,
    height:30,
    },
    contentsWrapper:{
    flex: 10,
    width:"90%",
    height: '86%',
    // borderColor:"white",
    // borderWidth:1,
    },
    title:{
    flex:1,
    fontFamily:"SpoqaHanSansNeoBold",
    fontSize:24,
    color:"white",
    // borderColor:"white",
    // borderWidth:1,
    },
    content:{
    flex:2,
    fontFamily:"esamanru_Light",
    fontSize:16,
    width:"100%",
    color:"white",
    // borderColor:"white",
    // borderWidth:1,
    },
    PicWrapper:{
    flex:5,
    alignItems:"center",
    // justifyContent:"center",
    // borderColor:"red",
    // borderWidth:2,
    },
    youtubePic:{
    width: "100%",
    height: "60%",
    
    },
    donateButton:{
    width: Dimensions.get('window').width,
    backgroundColor:"#7CB199",
    justifyContent:"center",
    alignItems:"center",
    padding:"4%"
    },
    buttonText:{
        color:"white",
        fontSize:24,
        fontFamily:"SpoqaHanSansNeoBold",
    }
    
    });