import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
Font.loadAsync({
  Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
  'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
  WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
  'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
  HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
  'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
});


export default function CategoryWomen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <TouchableOpacity onPress={() => navigation.navigate("CategoryOuter")}>
            <TouchableHighlight/>
            <Text> outer</Text>     
       </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  box: {
      marginTop:10,
      flexDirection: 'row',
      alignItems: 'flex-start',
      width:'90%',
      height:'20%',
      backgroundColor:'#b6b6b6',
  },

});

// const CategoryWomen=()=> {
//   return (
//     <View style={styles.container}>
//     <Text>Sample2</Text>
//     <Text>Sample2</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'yellow',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

// export default CategoryWomen;

