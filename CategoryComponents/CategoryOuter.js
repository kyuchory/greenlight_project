import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import { firestore } from "../utils/firebase";
import * as Font from 'expo-font';
import { render } from 'react-dom';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
     BinggraeMelonaBold: require('../assets/fonts/BinggraeMelona-Bold.ttf'),
    'BinggraeMelona-Bold': require('../assets/fonts/BinggraeMelona-Bold.ttf'),
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
  const navigation = useNavigation();

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
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
            <TouchableHighlight/>
            <Image source= {require("../icon+image/outer_brownjacket1.png")} 
          style={styles.image} />
      <Text style = {styles.textSmall}> GreenLight </Text>
      <Text style = {styles.textBold}> Brown Jacket</Text>
      <Text style = {styles.textBold}> 50,000원</Text>
        </TouchableOpacity>
  
      </View>
    )
  } 
  const Box2 = () => {
    return(
      <View style = {styles.box}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
            <TouchableHighlight/>
            <Image source= {require("../icon+image/outer_greenjacket.jpg")} 
          style={styles.image} />
      <Text style = {styles.textSmall}> GreenLight </Text>
      <Text style = {styles.textBold}> Green Jacket</Text>
      <Text style = {styles.textBold}> 50,000원</Text>
        </TouchableOpacity>
  
      </View>
    )
  }   
  const Box3 = () => {
    return(
      <View style = {styles.box}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
            <TouchableHighlight/>
            <Image source= {require("../icon+image/orange_jacket.jpg")} 
          style={styles.image} />
      <Text style = {styles.textSmall}> GreenLight </Text>
      <Text style = {styles.textBold}> Orange Jacket</Text>
      <Text style = {styles.textBold}> 50,000원</Text>
        </TouchableOpacity>
  
      </View>
    )
  }  
 return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Box/>
        <Box2/>
        <Box3/>
 
      </View>

    </View>

  ); 
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width:"100%",
    height:"100%",
  },

  section:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    width:'100%',
    height:'30%',
    backgroundColor:'white',
    marginTop:'10%',
    justifyContent: 'space-around',
  },

  box: {
    width:'33%',
    height:'35%',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: '10%',
  },

  
  image: {
    //marginLeft: '30%',
    width: '100%',
    height: '95%',
  },

  textSmall:{
    fontSize:17,
    fontFamily: "Vitro_pride", 
    marginLeft:'1.5%',
    },
  textBold:{
    fontSize:19,
    fontFamily: "BinggraeMelonaBold",
    //marginLeft:'10%',
  }
});
