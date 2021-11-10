import React, { useState, useContext,} from 'react'
import { StyleSheet, Text, View, Image} from "react-native";
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
    BinggraeMelonaBold: require('../assets/fonts/BinggraeMelona-Bold.ttf'),
    'BinggraeMelona-Bold': require('../assets/fonts/BinggraeMelona-Bold.ttf'),
  });




export default function Mypage() {

  const[mileage, setMileage] = useState(0);
  const[supportCount, setSupportCount] = useState(0);
  const [donateCount, setDonateCount] = useState(0);
  const [depositCount, setDepositCount] = useState(0);
  const [name, setName] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const userEmail = useContext(UserContext);
  const email = userEmail.user.email;



  const renderItem = async()=>{//마일리지,후원횟수,이름 불러오기

    const document = await firestore.collection("User").doc(email).get();

    const tempmileage = await document.get("mileage");
    const tempsupportCount = await document.get("supportCount");
    const tempdonateCount = await document.get("donateCount");
    const tempdepositCount = await document.get("depositCount");
    const tempName = await document.get("name");

    setMileage(tempmileage);
    setSupportCount(tempsupportCount);
    setDonateCount(tempdonateCount);
    setDepositCount(tempdepositCount);
    setName(tempName);

  }

  renderItem();



  
  
  //얇은 섹션 구분선
  const Line1 = () => {
    return(
      <View style = {styles.line1_Container}></View> 
    )
  }

  const Profile = () => {
    return(
      <View style = {styles.Profile}>
        <View style = {styles.ProfileImgWrapper}>
          <Image source= {require("../icon+image/default_profile.png")} 
                 style={styles.profileImage} />
        </View>
        <View style = {styles.ProfileInner}>
          <Text style = {styles.textName}>{name} 님</Text>
          <Text style = {styles.textInfo}>Lv.1 기린이</Text>
          <View style={styles.textInfoBox}>
            <Text style = {{fontSize: 15,fontFamily: "Vitro_pride",}}>LifeUp 회원 혜택 보기</Text>
          </View> 
          
        </View>
      </View>
    )
  }

//두꺼운 섹션 구분선
  const Line2 = () => {
    return(
      <View style = {styles.line2_Container}>
      </View> 
    )
  }
  



  //쇼핑포인트, 기부포인트, 쿠폰, 후원내역
  const Shopping = () => {
    const navigation = useNavigation();


    return(

      <View style = {styles.Shopping_Container}>
        
        <View style = {styles.iconContents}>
          <Image source= {require("../icon+image/point.png")} 
          style={styles.image} />
          <Text style={styles.iconContentsText}>포인트</Text>
          <Text style={styles.iconContentsNum}>{mileage}</Text>
          
        </View>

        <View style = {styles.iconContents}>
          <TouchableOpacity onPress={() => navigation.navigate("Donate")}>
           <Image source= {require("../icon+image/point_donate.png")} 
          style={styles.image} />
          <View style={{alignItems:"center"}}>
            <Text style={styles.iconContentsText}>기부하기</Text>
            <Text style={styles.iconContentsNum}>{donateCount}</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.iconContents}>
           <Image source= {require("../icon+image/coupon.png")} 
          style={styles.image} />
          <Text style={styles.iconContentsText}>쿠폰</Text>
          <Text style={styles.iconContentsNum}>0</Text>
        </View>
        
        <View style = {styles.iconContents}>
          <TouchableOpacity onPress={() => navigation.navigate("SupportList")}>
           <Image source= {require("../icon+image/donate.png")} 
                  style={styles.image} />
            <View style={{alignItems:"center"}}>
              <Text style={styles.iconContentsText}>후원 내역</Text>
              <Text style={styles.iconContentsNum}>{supportCount}</Text>
            </View>
          </TouchableOpacity>
        </View>
        

      </View>
    )
  }

  const Delivery = () => {
    return(
      <View style = {styles.Delievery_Container}>
        <View>
          <Text style = {styles.textDelivery}>주문/배송조회</Text>
        </View>
        <View style = {styles.DelieveryContents}>
          <View style = {styles.numberContents}>
            <Text style={styles.iconContentsNum}>{depositCount}</Text>
            <Text style={styles.iconContentsText}>입금/결제</Text>
          </View>
          <View style = {styles.numberContents}>
            <Text style={styles.iconContentsNum}>0</Text>
            <Text style={styles.iconContentsText}>배송중</Text>
          </View>
          <View style = {styles.numberContents}>
            <Text style={styles.iconContentsNum}>0</Text>
            <Text style={styles.iconContentsText}>배송완료</Text>
          </View>
          <View style = {styles.numberContents}>
            <Text style={styles.iconContentsNum}>0</Text>
            <Text style={styles.iconContentsText}>구매확정</Text>
          </View>
        </View>
      </View>
    )
  }


  const Cancle = () => {
    return(
      <View style = {styles.Delievery_Container}>
        <View>
          <Text style = {styles.textDelivery}>취소/교환/환불</Text>
        </View>
        <View style = {styles.DelieveryContents}>
          <View style = {styles.numberContents}>
            <Text style={styles.iconContentsNum}>0</Text>
            <Text style={styles.iconContentsText}>교환</Text>
          </View>
          <View style = {styles.numberContents}>
            <Text style={styles.iconContentsNum}>0</Text>
            <Text style={styles.iconContentsText}>교환완료</Text>
          </View>
          <View style = {styles.numberContents}>
            <Text style={styles.iconContentsNum}>0</Text>
            <Text style={styles.iconContentsText}>환불</Text>
          </View>
          <View style = {styles.numberContents}>
            <Text style={styles.iconContentsNum}>0</Text>
            <Text style={styles.iconContentsText}>환불완료</Text>
          </View>
        </View>
      </View>
    )
  }


  const Call = () => {
    return(
      <View style = {styles.Call_Container}>
        <Text style = {styles.textNumber}>
          0000-0000
        </Text>
        <Text style = {styles.textInfo}>
          cs_help@lifeup.com
        </Text>
        <Text style = {styles.textInfo}>
          운영시간 / 평일 09:00 - 17:00
        </Text>
        <Text style = {styles.textInfo}>
          점심시간 / 12:30 - 13:00
        </Text>
      </View>
    )
  }
 
  return(
    
    <View style={styles.container}>
      
      <Line1/>
      <Profile/>
      <Line2/>     
      <Shopping/>
      
      <Line1/>     
      <Delivery/>
      <Line1/>    
      <Cancle/>
      <Line2/>   
      <Call/>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E6E6E6',
  },

  line1_Container: {
    width:'100%',
    height:'0.3%',
    backgroundColor:'#E6E6E6',
    justifyContent: 'center', 
  },

  line2_Container: {
    width: '100%',
    height: '1%',
    backgroundColor: '#E6E6E6', 
    justifyContent: 'center', 
  },

  Profile:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    width:'100%',
    height:'18%',
    backgroundColor:'#ffffff',
  },
  ProfileImgWrapper:{
    flex:1,
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    
  },
  profileImage:{
    width:80,
    height:80,
    borderRadius:40,
    borderWidth:1,
    borderColor:"gray",
  },
  ProfileInner:{
    flex:2,
    justifyContent:'space-around',
    height:'90%',
  },

  image: {
    width: 45,
    height: 45,  
  },

  Shopping_Container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width:'100%',
    height:'19%',
    backgroundColor:'#ffffff',
    justifyContent: 'space-around', 
    padding:'4%',
    
  },
  iconContents:{
    alignItems:'center',
    width:"20%",
    
  },
  iconContentsText:{
    fontSize: 10,
    fontFamily: "Vitro_pride",
    marginTop:5,
  },
  iconContentsNum:{
    fontSize: 18,
    fontWeight:'400',
  },
  numberContents:{
    alignItems:'center',
    width:"20%",
  },
  Delievery_Container: {
    width:'100%',
    height:'19%',
    backgroundColor:'#ffffff', 
    paddingTop:"3%"
  }, 
  DelieveryContents:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor:'#ffffff',
    justifyContent: 'space-around', 
    padding:'4%',

  },


  Cancle_Container: {
    width:'100%',
    height:'5%',
    backgroundColor:'#ffffff',
  },

  Call_Container: {
    width:'100%',
    height:'24%',
    backgroundColor:'#ffffff',
  }, 

  textName: {
    fontSize: 20,
    fontFamily: "BinggraeMelonaBold",
    marginTop: '10%',
    marginLeft:15,
  },
  textInfo: {
    marginLeft:15,
    marginTop:5,
    fontSize: 15,
    fontFamily: "Vitro_pride",
  },
  textInfoBox: {
    marginLeft:15,
    marginTop:5,
    fontSize: 15,
    fontFamily: "Vitro_pride",
    borderColor:"#E6E6E6",
    borderWidth:1,
    width:"80%",
    justifyContent:"center",
    alignItems:"center"
  },

  textNumber: {
    marginLeft:15,
    marginTop: 10,
    fontSize: 30,
    fontFamily: "WemakepriceBold",
  },

  textDelivery: {
   marginLeft: 15,
   fontSize:20,
   fontFamily: "BinggraeMelonaBold", 
  },
  textSmall:{
  fontSize:10,
  fontFamily: "Vitro_pride", 
  },



  modalView: {
    width:"100%",
    height:300,
    margin: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },


});
