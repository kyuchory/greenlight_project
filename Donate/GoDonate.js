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



  export default function GoDonate({ navigation }) {

    return(
        <View style={styles.container}>
            <Text>기부하기 결제페이지 만들 예정</Text>


        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop:"8%",
    },

    });