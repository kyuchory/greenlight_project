import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Button, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";



import * as Font from 'expo-font';
Font.loadAsync({
    Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
    'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
    WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
    'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
    HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
    'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
  });


  export default function ChatBot() {
    const [display0, setDisplay0] = useState(false);
    const [display1, setDisplay1] = useState(false);
    const [display2, setDisplay2] = useState(false);
    const [start, setStart] = useState(); 
    const [material, setMaterial] = useState();
    const [said, setSaid] = useState(false);



    const handleReady = () => {
      setStart(false);
      setDisplay0(true);
    }
  
    const handleStart = () => {
      setStart(true);
      setDisplay0(true);
    }

    const choiceFiber = () =>{
      setMaterial(false);
      setDisplay1(true);

    }
    const choiceSpecial = () =>{
      setMaterial(true);
      setDisplay1(true);

    }

    const saidYes = () =>{
      setSaid(true);
      setDisplay2(true);
    }
    // const Detail = styled.View`
    //   width : ${({props}) => props.sizes.width};
    //   height : ${({props}) => props.sizes.height};
    // `;
    // const changeView = () => {
    //   setSizes({
    //     width:'100%',
    //     height:'100px'
    //   })
    // }

    return (
        <View style={styles.container}>
          <ScrollView>
          <View style={styles.chatContainer}>
            <View style={styles.chatManager}>
              <Image source={require("../icon+image/robot.png")} style={styles.avatarImage}/>
              <ImageBackground
              source={require("../icon+image/chatImageLeft.png")}
              resizeMode="stretch"
              style={styles.chatImage}
              >
              <Text style={{paddingTop:"10%", paddingBottom:"10%", paddingRight:"5%", paddingLeft:"15%"}}>
                안녕하세요!{"\n"}만나서 반갑습니다.{"\n"}'사용설명서' 혹은 '후원시작'을 클릭해주세요.
              </Text>
              </ImageBackground>
            </View>
        
            <View style={styles.chatUser}>
              <ImageBackground
              source={require("../icon+image/chatImageRight.png")}
              resizeMode="stretch"
              style={styles.chatImage}
              >
            <TouchableOpacity onPress={handleReady}>
                <Text style={{paddingTop:"5%", paddingBottom:"2%", paddingRight:"10%", paddingLeft:"5%"}}>사용설명서</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleStart}>
                <Text style={{paddingTop:"2%", paddingBottom:"4%", paddingRight:"0%", paddingLeft:"15%"}}>후원시작</Text>
            </TouchableOpacity>
            </ImageBackground>
            </View>









           {display0 ? (
            <View>
              {start ? (
            <View>
                <View style={styles.chatManager}>
                  <Image source={require("../icon+image/robot.png")} style={styles.avatarImage}/>
                  <ImageBackground
                  source={require("../icon+image/chatImageLeft.png")}
                  resizeMode="stretch"
                  style={styles.chatImage}
                  >
                    <Text style={{paddingTop:"10%", paddingBottom:"10%", paddingRight:"5%", paddingLeft:"15%"}}>후원하실 상품 재질을 모두 선택해 주세요.</Text>
                  </ImageBackground>
                </View>
                
                <View style={styles.chatUser}>
                  <ImageBackground
                  source={require("../icon+image/chatImageRight.png")}
                  resizeMode="stretch"
                  style={styles.chatImage}
                  >
                    <TouchableOpacity onPress={choiceFiber}>
                      <Text style={{paddingTop:"5%", paddingBottom:"2%", paddingRight:"15%", paddingLeft:"5%"}}>폐섬유</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={choiceSpecial}>
                      <Text style={{paddingTop:"2%", paddingBottom:"4%", paddingRight:"5%", paddingLeft:"11%"}}>특수소재</Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>

                {display1 ? (
                <View>
                  <View style={styles.chatManager}>
                  <Image source={require("../icon+image/robot.png")} style={styles.avatarImage}/>
                  <ImageBackground
                  source={require("../icon+image/chatImageLeft.png")}
                  resizeMode="stretch"
                  style={styles.chatImage}
                  >
                    <Text style={{paddingTop:"10%", paddingBottom:"10%", paddingRight:"5%", paddingLeft:"15%"}}>후원하실 상품의 개수를 입력해주세요.</Text>
                    </ImageBackground>
                  </View>

                  <View style={styles.chatUser}>
                  <ImageBackground
                  source={require("../icon+image/chatImageRight.png")}
                  resizeMode="stretch"
                  style={styles.chatImage}
                  >
                    {material ? (
                      <View>
                        <View style={{flexDirection:"row",justifyContent:"space-around", paddingTop:"10%", paddingBottom:"2%", paddingRight:"15%", paddingLeft:"15%"}}>
                          <Text>특수소재</Text>
                          <TextInput placeholder="입력"/><Text>벌</Text>
                        </View>
                        <TouchableOpacity onPress={saidYes}>
                          <Text style={{paddingTop:"2%", paddingBottom:"2%", paddingRight:"15%", paddingLeft:"30%"}}>확인</Text>
                        </TouchableOpacity>
                      </View>
                      ):(
                      <View>
                        <View style={{flexDirection:"row",justifyContent:"space-around", paddingTop:"10%", paddingBottom:"2%", paddingRight:"15%", paddingLeft:"15%"}}>
                          <Text>폐섬유</Text>
                          <TextInput placeholder="입력"/><Text>벌</Text>
                        </View>
                        <TouchableOpacity onPress={saidYes}>
                          <Text style={{paddingTop:"2%", paddingBottom:"2%", paddingRight:"15%", paddingLeft:"30%"}}>확인</Text>
                        </TouchableOpacity>
                      </View>
                      )}
                      </ImageBackground>
                  </View>
                </View>
                ):(
                <View></View>
                )}

              
              {display2 ? (
              <View>
                <View style={styles.chatManager}>
                  <Image source={require("../icon+image/robot.png")} style={styles.avatarImage}/>
                  <ImageBackground
                  source={require("../icon+image/chatImageLeft.png")}
                  resizeMode="stretch"
                  style={styles.chatImage}
                  >
                  {said ? (
                  <Text style={{paddingTop:"10%", paddingBottom:"10%", paddingRight:"5%", paddingLeft:"15%"}}>
                    앨범에서 후원하실 상품 이미지를{"\n"}선택하여 업로드해 주세요.{"\n"}
                    (정확한 확인을 위해 프레임 내에서{"\n"}또렷하게 촬영된 사진을 업로드해 주세요.)
                    </Text>
                  ) : (
                  <Text>nononononoo</Text>
                  )}
                  </ImageBackground>
                </View>

                <View style={styles.chatUser}>
                  
                  <Button
                  title="사진 업로드"
                  />
                </View>
              </View>) : (<View></View>)}
                



            </View>

            ) : (
            <View>
                <Text>사용설명서 modal</Text>
            </View>
            )}
            </View>
           ) : (
            <View></View>)}



              </View>

            </ScrollView>
        </View>

    );

  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:"2%",
        backgroundColor:"white"
    },
    chatContainer:{
      flex:1,
      marginTop:"10%",
    },
    chatManager:{
      // backgroundColor:"yellow",
      alignItems:"center",
      marginTop:"10%",
      flexDirection:"row"
      
    },
    chatUser:{
      // backgroundColor:"pink",
      justifyContent:"center",
      alignItems:"flex-end",
      marginTop:"10%"
    },
    chatImage:{
      justifyContent:"flex-end",
    },
    avatarImage:{
      width:30,
      height:30,
      marginBottom:"15%",
      borderRadius:40,
      borderWidth:1,
      borderColor:"gray",
    }
})