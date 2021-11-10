import React, { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export const Slider = () => {
  return(
        <View>
          <SliderBox
            images={[
              require("../icon+image/guide1.jpg"),
              require("../icon+image/guide2.jpg"),
              require("../icon+image/guide3.jpg"),
              require("../icon+image/guide4.jpg"),
              require("../icon+image/guide5.jpg"),
              require("../icon+image/guide6.jpg"),
            ]}
            sliderBoxHeight={400} //슬라이드 이미지 높이
            dotColor="green" //밑에 현재 이미지 dot 색상
            inactiveDotColor="#90A4AE" //밑에 dot 색상
            dotStyle={{
              //dot들 css
              width: 15,
              height: 15,
              borderRadius: 15,
              marginHorizontal: 10,
              padding: 0,
              margin: 0,
            }}
            paginationBoxStyle={{
              //dot들 위치 css
              position: "absolute",
              bottom: -20,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 0,
            }}
            ImageComponentStyle={{ width: "100%", marginTop: "10%" }} //이미지슬라이더 전체적인 위치와 너비 조정
            imageLoadingColor="#2196F3" //이건뭐지
          />
      </View>
  )
}
export default function UserGuide() {  

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>후원 도우미</Text>
        </View>
        <Slider/>
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
    backgroundColor:"#26D95C"
  },
  headerText:{
    fontFamily:"BinggraeMelona-Bold",
    color:"white",
    fontSize:25,
    margin:"3%",
  },
 
});
