import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext} from 'react'
import { StyleSheet, Text, View, Image, LogBox } from "react-native";
import { firestore } from "../utils/firebase";
import { UserContext } from "../contexts";
import * as Font from 'expo-font';
import {TouchableOpacity } from "react-native-gesture-handler";

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
const userEmail = useContext(UserContext);
const email = userEmail.user.email;

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
  const documentUser = await firestore.collection("User").doc(email).get();

  const document = await firestore.collection("outer").doc("outer1").get();
  const tempName = await document.get("name");
  const tempPrice = await document.get("price");
  const tempImg = await document.get("uri");
  const tempStore = await document.get("store");
  const templike = await documentUser.get("likeBrown");

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
  const templike2 =  await documentUser.get("likeGreen");
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
  const templike3 =  await documentUser.get("likeOrange");
  
  setOuterLike3(templike3);
  setOuterName3(tempName3);
  setOuterPrice3(tempPrice3);
  setOuterImg3(tempImg3);
  setOuterStore3(tempStore3);


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
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage2")}>
         
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
       <TouchableOpacity onPress={() => navigation.navigate("OuterPage3")}>
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
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: 'white',
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
  },

  section:{
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    height:'35%',
    backgroundColor:'white',
    paddingRight:"1%",
  },

  box: {
    width:'32%',
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: 'white',
  },
  
  imageWrapper:{
    flex: 5,
    width: '100%',
    alignItems: "flex-start",
    justifyContent:"center",
  },
  image: {
    width: 110,
    height: 130,
  },
  infoWrapper:{
    flex: 2,
    width:"100%", 
    alignItems: "flex-start",
  },
  textSmall:{
    fontSize:14,
    fontFamily: "Vitro_pride", 
    },
  textBold:{
    fontSize:14,
    fontFamily: "BinggraeMelonaBold",
  }
});