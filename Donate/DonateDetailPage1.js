import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground,Dimensions } from "react-native";
import * as Font from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';


Font.loadAsync({
    SpoqaHanSansNeoBold : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    'SpoqaHanSansNeo-Bold' : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    esamanru_Light: require('../assets/fonts/esamanru_Light.ttf'),
    'esamanru_Light': require('../assets/fonts/esamanru_Light.ttf'),
  });



  export default function DonateDetailPage1({ navigation }) {

    return(
        <View style={styles.container}>
            <ImageBackground
            source={require("../icon+image/forest2.png")}
            style={styles.backgroundPic}>

                <View style={styles.IconWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                    source={require("../icon+image/back.png")}
                    style={styles.backIcon}/>
                </TouchableOpacity>
                </View>

                <View style={styles.contentsWrapper}>
                    <Text style={styles.title}>'라이프업 숲' 조성 캠페인</Text>
                    <Text style={styles.content}>
                        환경보존을 위해 라이프업에서 {"\n"}'숲 조성하기 캠페인'을 시작한 지{"\n"}
                        어느덧 다섯 해가 되었습니다.{"\n"}
                        이번 '라이프업 숲 5호' 역시{"\n"}
                        모든 후원자들에게 감사를 표하기 위해{"\n"}
                        '후원자 비석'을 건립할 계획입니다.{"\n"}
                        라이프업과 함께 숲 조성 캠페인에 참여해 주세요!
                    </Text>
                    <View style={styles.PicWrapper}>
                        <Image
                        source={require("../icon+image/forestMainImg.png")}
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
    },
    backIcon:{
    width:30,
    height:30,
    },
    contentsWrapper:{
    flex: 10,
    width:"90%",
    height: '86%',
    },
    title:{
    flex:1,
    fontFamily:"SpoqaHanSansNeoBold",
    fontSize:24,
    color:"white",
    },
    content:{
    flex:2,
    fontFamily:"esamanru_Light",
    fontSize:16,
    width:"100%",
    color:"white",
    },
    PicWrapper:{
    flex:5,
    alignItems:"center",
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