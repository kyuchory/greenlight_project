import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import PickSubContents from "../PickComponents/PickSubContents";
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { StyleSheet, Text, View, Image, LogBox } from "react-native";
import { useState, useContext, useEffect,} from 'react'
import { firestore } from "../utils/firebase";
import * as Font from 'expo-font';
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



export default function Pick() {
const navigation = useNavigation();

const[outerName, setOuterName] = useState(0);
const[outerPrice, setOuterPrice] = useState(0);
const[outerImg, setOuterImg] = useState(0);
const[outerStore, setOuterStore] = useState(0);
const[outerlike, setOuterLike]= useState(0);

const[outerName2, setOuterName2] = useState(0);
const[outerPrice2, setOuterPrice2] = useState(0);
const[outerImg2, setOuterImg2] = useState(0);
const[outerStore2, setOuterStore2] = useState(0);
const[outerlike2, setOuterLike2]= useState(0);

const[outerName3, setOuterName3] = useState(0);
const[outerPrice3, setOuterPrice3] = useState(0);
const[outerImg3, setOuterImg3] = useState(0);
const[outerStore3, setOuterStore3] = useState(0);
const[outerlike3, setOuterLike3]= useState(0);

const handleFireBase = async()=>{
  const document = await firestore.collection("outer").doc("outer1").get();
  const tempName = await document.get("name");
  const tempPrice = await document.get("price");
  const tempImg = await document.get("uri");
  const tempStore = await document.get("store");
  const templike = await document.get("like");

  setOuterLike(templike);
  setOuterName(tempName);
  setOuterPrice(tempPrice);
  setOuterImg(tempImg);
  setOuterStore(tempStore);

  const document2 = await firestore.collection("outer").doc("outer2").get();
  const tempName2 = await document2.get("name");
  const tempPrice2 = await document2.get("price");
  const tempImg2 = await document2.get("uri");
  const tempStore2 = await document2.get("store");
  const templike2 = await document2.get("like");
  
  setOuterLike2(templike2);
  setOuterName2(tempName2);
  setOuterPrice2(tempPrice2);
  setOuterImg2(tempImg2);
  setOuterStore2(tempStore2);

  const document3 = await firestore.collection("outer").doc("outer3").get();
  const tempName3 = await document3.get("name");
  const tempPrice3 = await document3.get("price");
  const tempImg3 = await document3.get("uri");
  const tempStore3 = await document3.get("store");
  const templike3 = await document3.get("like");
  
  setOuterLike3(templike3);
  setOuterName3(tempName3);
  setOuterPrice3(tempPrice3);
  setOuterImg3(tempImg3);
  setOuterStore3(tempStore3);

  const document11 = await firestore.collection("outer").get();
        document11.forEach((doc) => {
            const templike = doc.data().like;
            const tempname = doc.data().name;   
            if(templike == 1){
              const reallike = "찜"
              console.log(tempname + ' '+ reallike);
            }
            else{
              const reallike = "안찜"
              console.log(tempname + ' '+ reallike);
            }         
            });
}


handleFireBase();


const Box = () => {
    return(
      <View style = {styles.box}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
          <View style={styles.imageWrapper}>
              <Image source= {{uri:`${outerImg}`}} 
              style={styles.image}
              />
            </View>
            <View style={styles.infoWrapper}>
              <Text style = {styles.textSmall}>{outerStore}</Text>
              <Text style = {styles.textBold}>{outerName}</Text>
              <Text style = {styles.textBold}>{outerPrice}원</Text>
            </View>

        </TouchableOpacity>
  
      </View>
    )
  }
  
  const Box_2 = () => {
    return(
      <View style = {styles.box_2}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
          <View style={styles.imageWrapper}>
              <Image source= {{uri:`${outerImg}`}} 
              style={styles.image_none}
              />
            </View>
            <View style={styles.infoWrapper}>
              <Text style = {styles.textSmall}>{outerStore}</Text>
              <Text style = {styles.textBold}>{outerName}</Text>
              <Text style = {styles.textBold}>{outerPrice}원</Text>
            </View>

        </TouchableOpacity>
  
      </View>
    )
  } 

  const Box2 = () => {
    return(
      <View style = {styles.box}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
         
       <View style={styles.imageWrapper}>
            <Image source= {{uri:`${outerImg2}`}} 
            style={styles.image}
            />
          </View>
          <View style={styles.infoWrapper}>
            <Text style = {styles.textSmall}>{outerStore2}</Text>
            <Text style = {styles.textBold}>{outerName2}</Text>
            <Text style = {styles.textBold}>{outerPrice2}원</Text>
          </View>
        </TouchableOpacity>
  
      </View>
    )
  }   
  const Box3 = () => {
    return(
      <View style = {styles.box}>
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage")}>
       <View style={styles.imageWrapper}>
            <Image source= {{uri:`${outerImg3}`}} 
            style={styles.image}
             />
        </View>
          <View style={styles.infoWrapper}>
            <Text style = {styles.textSmall}>{outerStore3}</Text>
            <Text style = {styles.textBold}>{outerName3}</Text>
            <Text style = {styles.textBold}>{outerPrice3}원</Text>
          </View>
        </TouchableOpacity>
  
      </View>
    )
  }  

const Like1 = () => {
  console.log("1번째꺼" + outerlike);
  if(outerlike === 1){
    return(
      <Box />
    )
  }else{
    return(
    <Box_2/>
    )
  }
}

const Like2 =()=>{
  console.log("2번째꺼" + outerlike2);
  if(outerlike2 === 1){
    return(
      <Box2 />
    )
  }else{
    return(
    <Box_2/>
    )
  }
}

const Like3 =()=>{
  console.log("3번째꺼" + outerlike3);
  if(outerlike3 === 1){
    return(
      <Box3 />
    )
  }else{
    return(
    <Box_2/>
    )
  }
}

 return (
    <View style={styles.container}>          
      <View style={styles.section}>
        <Like1/>
        <Like2/>
        <Like3/>
 
      </View>

    </View>

  ); 
};



const styles = StyleSheet.create({
  box_2: {
    width:'0%',
    height:'0%',
    // height:'100%',
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: 'white',
    // borderColor:"blue",
    // borderWidth:1,
    
  },

  image_none:{
    width:0,
    height:0,
  },

  backIcon:{
  width:25,
  height:25,
  marginLeft:"20%"
  },

  headerText:{
    flex:1,
    fontFamily:"BinggraeMelona-Bold",
    color: "black",
    fontSize:25,
    marginLeft:"15%"
  },

  container: {
    paddingTop:"8%",
    backgroundColor: 'white',
    width:"100%",
    height:"100%",
    // borderColor:"blue",
    // borderWidth:3,
  },

  section:{
    flexDirection: 'row',
    //marginTop: '3%',
    alignItems: 'center',
    width:'100%',
    height:'30%',
    backgroundColor:'white',
    // justifyContent: 'space-around',
    // paddingLeft:"1%",
    paddingRight:"1%",
    // borderColor:"red",
    // borderWidth:1,

  },

  box: {
    width:'32%',
    // height:'100%',
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: 'white',
    // borderColor:"blue",
    // borderWidth:1,
    
  },
  
  imageWrapper:{
    flex: 5,
    width: '100%',
    alignItems: "flex-start",
    justifyContent:"center",
    // borderColor:"red",
    // borderWidth:1,

  },
  image: {
    width: 110,
    height: 130,
  },
  infoWrapper:{
    flex: 2,
    width:"100%", 
    // padding:"10%",
    alignItems: "flex-start",
    // borderColor:"pink",
    // borderWidth:1,
    
  },
  textSmall:{
    fontSize:14,
    fontFamily: "Vitro_pride", 
    // marginLeft:"-10%",
    },
  textBold:{
    fontSize:14,
    fontFamily: "BinggraeMelonaBold",
    // marginLeft:"0%",
    // paddingBottom:"2%"
  }
});