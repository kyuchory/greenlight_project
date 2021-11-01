import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { Image, Input, Button } from '../Components'
import { StyleSheet, Text, View } from 'react-native';
import { firestore } from "../utils/firebase";
import * as Font from 'expo-font';
import { images } from '../utils/images';
import { render } from 'react-dom';

Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
  });



const databaseURL = "https://green-light-1030-default-rtdb.firebaseio.com";


const getOuter = async() => {
  const outer = await firestore.collection(outer).get();
  //setMileage(prevMileage.forEach((document)=>document.data()['마일리지']));
  console.log(outer);
 // const plusMileage = mileage + 500
 // setMileage(plusMileage);
 

 // firestore.collection('User').doc(email).set({'마일리지':plusMileage});
  // firestore.collection(email).add({
  //   ...firestore.collection(email).doc('test2').set({'마일리지':plusMileage})
  // });
};

class Outer extends React.Component {
  constructor(){
      super();
      this.state = {
        words:{}
      }
  }
  _get(){
    fetch(`${databaseURL}/outer.json`).then(res => {
      if(res.status != 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(words => this.setState({words: words}));
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.words != this.state.words;
  }
  componentDidMount() {
    this._get();
  }
  render() {
    return (
      <div key={id}>
        {Object.keys(this.state.words).map(id => {
            const word = this.state.words[id];
            return (
              <Text> 상품명: {Outer.name}
              </Text>
            );
        })}
      </div>
    );
  }
}



export default function CategoryOuter() {

/* 
  const FetchData = () => {
    //받아온 데이터를 저장할 배열
    //let product = [];

    firestore
        .collection('outer') //product 컬렉션 반환
        .get()
        .then((docs) => {
          //forEach 함수로 각각의 다큐먼트에 함수 실행
          docs.forEach((doc) => {
            console.log(doc.data())

           // const Box = () => {
       
              return(
                <View style = {styles.box}>
                <Image source= {require("../icon+image/homeImage.jpg")} 
                    style={styles.image} />
                <Text style = {styles.textSmall}> ${doc.data().name} </Text>
                <Text>ddd</Text>
                <Text style = {styles.textSmall}> ${doc.data().price} </Text>
                </View>

              )
           // }
            
          });

        });
        return (
       <View style = {styles.container}>
         <Text>ddd</Text> 
       </View>
        ); 
  }
   */

/* 
const Section = () => {
  return (
    <View style = {styles.section}>
    </View>
  )
} 
 */

const Box = () => {
    return(
      <View style = {styles.box}>
      <Image source= {require("../icon+image/default_profile.png")} 
          style={styles.image} />
      <Text style = {styles.textSmall}> 어쩌구 저쩌구 </Text>
      <Text style = {styles.textSmall}> 가격이 어쩌구</Text>
      <Text style = {styles.textSmall}> like 자리</Text>
      </View>
    )
  }  

 return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Box/>
        <Box/>
        <Box/>
 
      </View>

    </View>

  ); 
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  section:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    width:'100%',
    height:'50%',
    backgroundColor:'white',
    marginTop:'10%',
    justifyContent: 'space-around',
  },

  box: {
    width:'33%',
    height:'80%',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: '10%',
  },

  
  image: {
    //marginLeft: '30%',
    width: '100%',
    height: '100%',
  },

  textSmall:{
    fontSize:15,
    fontFamily: "Vitro_pride", 
    marginLeft:'10%',
    },
});
