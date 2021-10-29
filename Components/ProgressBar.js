import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import * as Progress from 'react-native-progress';

//설치모듈
//install react-native-progress --save
//expo install react-native-svg


export default function ProgressBar(props) {

  
    return (
        <View>
            <Progress.Bar
            progress={props.count}
            width={220}
            height={30}
            color={"#BCFCC2"}
            borderColor={"#E7FCE0"}
            backgroundColor={"white"}
            borderRadius={14}/>
        </View>

    );
  }
  
