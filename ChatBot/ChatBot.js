import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, Image, } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    // const [said, setSaid] = useState(); 

    // const handleYes = () => {
    //   setSaid(true);
    // }
  
    // const handleNo = () => {
    //   setSaid(false);
    // }

    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
  
    return (
        <View style={styles.container}>
            {/* <Text>밥을 먹으실래요?</Text>

            <View>
            <TouchableOpacity onPress={handleYes}>
                <Text>네</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNo}>
                <Text>아뇨</Text>
            </TouchableOpacity>
            </View>

            {said ? (
            <View>
                <Text>맛있게목옹~</Text>
            </View>
            ) : (
            <View>
                <Text>배고플텐데..</Text>
            </View>
            )} */}

        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            />




        </View>

    );

  }

  const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:"5%",
        backgroundColor:"white"
    },
})