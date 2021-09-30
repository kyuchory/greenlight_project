import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';
import * as Progress from 'react-native-progress';
// Font.loadAsync({
//   Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
//   'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
//   WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
//   'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
//   HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
//   'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
// });

//설치모듈
//install react-native-progress --save
//expo install react-native-svg


export default function ProgressBar(props) {

  
    return (
        <View>
            <Progress.Bar progress={props.count} width={150} height={30} color={"green"} />
        </View>

    );
  }
  
