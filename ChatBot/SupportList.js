import React, { useContext, useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { firestore } from "../utils/firebase";
import { UserContext } from "../contexts";

import * as Font from 'expo-font';

Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
    SpoqaHanSansNeoBold : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
    'SpoqaHanSansNeo-Bold' : require('../assets/fonts/SpoqaHanSansNeo-Bold.ttf'),
  });



export default function SupportList({ navigation }) {
    const userEmail = useContext(UserContext);
    const email = userEmail.user.email;

    const [data, setData] = useState('');
    const [listItems, setListItems] = useState([]);
    const listItem = [];

  

    const findSupportList = async() => {
        const document = await firestore.collection("User").doc(email).collection("supportList").get();
        document.forEach((doc) => {
            const tempfiber = doc.data().fiber;
            const tempclothNum = doc.data().clothNum;
            // console.log(tempclothNum + tempfiber);
            const itemArray = tempclothNum + "+" + tempfiber;
            // console.log(itemArray);
            setListItems([...listItems, itemArray]);

            });
            }




    findSupportList();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>후원내역</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
        source={require("../icon+image/close.png")}
        style={styles.closeIcon}/>
        </TouchableOpacity>
        </View>

        <View>
        <Text>만드는중............</Text> 
        <View>{listItems.map(  (goal)=> <Text>{goal}</Text> )}</View>


        </View>


        
        
        

         </View>
    );
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
},
header:{
  marginTop:"8%",
  height:"8%",
  flexDirection:"row",
  alignItems:"center"
},
headerText:{
  flex:1,
  fontFamily:"BinggraeMelona-Bold",
  color: "#00FF00",
  fontSize:25,
  marginLeft:"3%"
},
closeIcon:{
  width:20,
  height:20,
  marginRight:"5%"
},
optionIcon:{
  width:50,
  height:20,
  marginRight:"2%",
  borderRadius:6
},
brandList:{
// borderColor:'red',
// borderWidth:1,
alignItems:"flex-start",
paddingLeft:"5%",
marginTop:"2%",
},
brandWrapper:{
borderColor:'#E7FCE0',
backgroundColor:'#E7FCE0',
borderWidth:1,
borderRadius:10,
flexDirection:"row",
alignItems:"center",
marginBottom:"5%",
width:325,
height:100
},
brandImg:{
width:50,
height:60,
marginRight:"2%",
marginLeft:"2%",
},
nameAndBar:{
// borderColor:'red',
// borderWidth:1,
flexDirection:"column"
},
brandName: {
alignItems: "flex-start",
fontSize: 18,
fontFamily:'SpoqaHanSansNeoBold',
color:"#444343"
},
progressBar:{
width:"70%",
flexDirection:"row",

alignItems:"center",

},


});