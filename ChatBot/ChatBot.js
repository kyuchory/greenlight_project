import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from 'styled-components/native';
import { GiftedChat } from 'react-native-gifted-chat'



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
    const [sizes, setSizes] = useState({
      width:'0px',
      height:'0px'
    });


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
    const Detail = styled.View`
      width : ${({props}) => props.sizes.width};
      height : ${({props}) => props.sizes.height};
    `;
    const changeView = () => {
      setSizes({
        width:'100%',
        height:'100px'
      })
    }

    return (
        <View style={styles.container}>
          <View style={styles.chatContainer}>
            <Text style={styles.chatManager}>안녕하세요!{"\n"}만나서 반갑습니다.{"\n"}'사용설명서' 혹은 '후원시작'을 클릭해주세요.</Text>
            <View style={styles.chatUser}>
            <TouchableOpacity onPress={handleReady}>
                <Text>사용설명서</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleStart}>
                <Text>후원시작</Text>
            </TouchableOpacity>
            </View>









           {display0 ? (
            <View>
              {start ? (
            <View>
                <Text style={styles.chatManager}>후원하실 상품 재질을 모두 선택해 주세요.</Text>

                <View style={styles.chatUser}>
                <TouchableOpacity onPress={choiceFiber}>
                   <Text>폐섬유</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={choiceSpecial}>
                  <Text>특수소재</Text>
                </TouchableOpacity>
                </View>

                {display1 ? (
                <View>
                  <View style={styles.chatManager}>
                    <Text>후원하실 상품의 개수를 입력해주세요.</Text>
                  </View>
                  <View style={styles.chatUser}>
                    {material ? (
                      <View>
                        <Text>특수소재</Text>
                        <TextInput placeholder="입력"/><Text>벌</Text>
                        <TouchableOpacity onPress={saidYes}>
                          <Text>확인</Text>
                        </TouchableOpacity>
                      </View>
                      ):(
                      <View>
                        <Text>폐섬유</Text>
                        <TextInput placeholder="입력"/><Text>벌</Text>
                        <TouchableOpacity onPress={saidYes}>
                          <Text>확인</Text>
                        </TouchableOpacity>
                      </View>
                      )}
                  </View>
                </View>
                ):(
                <View></View>
                )}

              
              {display2 ? (
              <View>
                <View style={styles.chatManager}>
                  {said ? (
                  <Text>앨범에서 후원하실 상품 이미지를{"\n"}선택하여 업로드해 주세요.{"\n"}(정확한 확인을 위해 프레임 내에서{"\n"}또렷하게 촬영된 사진을 업로드해 주세요.)</Text>
                  ) : (
                  <Text>nononononoo</Text>
                  )}
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
        </View>

    );

  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:"5%",
        backgroundColor:"white"
    },
    chatContainer:{
      flex:1,
      margin:"10%",
    },
    chatManager:{
      backgroundColor:"yellow",
      alignItems:"flex-start",
    },
    chatUser:{
      backgroundColor:"blue",
      alignItems:"flex-end",
    },
})