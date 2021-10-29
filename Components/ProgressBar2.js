import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import * as Progress from 'react-native-progress';

//설치모듈
//install react-native-progress --save
//expo install react-native-svg


export default function ProgressBar2(props) {

  
    return (
        <View>
            <Progress.Bar
            progress={props.count}
            width={150}
            height={40}
            color={"#D9D9D9"}
            backgroundColor={"#EDEDED"}
            borderRadius={17}/>
        </View>

    );
  }
  
