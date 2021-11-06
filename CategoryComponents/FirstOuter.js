import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SliderBox } from "react-native-image-slider-box";
import { Line } from "react-native-svg";

import OuterSubContents from "./OuterSubContents";

export default function FirstOuter() {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.high}>
            <SliderBox
              images={[
                require("../icon+image/outer_brownjacket1.png"),
                require("../icon+image/outer_brownjacket2.jpg"),
              ]}
              sliderBoxHeight={400} //슬라이드 이미지 높이
              dotColor="#FFEE58" //밑에 현재 이미지 dot 색상
              inactiveDotColor="#90A4AE" //밑에 dot 색상
              dotStyle={{
                //dot들 css
                width: 5,
                height: 5,
                borderRadius: 15,
                marginHorizontal: 10,
                padding: 0,
                margin: 0,
              }}
              paginationBoxStyle={{
                //dot들 위치 css
                position: "absolute",
                bottom: 0,
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 10,
              }}
              ImageComponentStyle={{
                width: "90%",
                marginTop: 20,
                marginRight: 35,
              }} //이미지슬라이더 전체적인 위치와 너비 조정
              imageLoadingColor="#2196F3" //이건뭐지
            />
            <Text style={{ marginTop: 5 }}>greenLight</Text>
            <Text style={{ marginTop: 5 }}>BrownJacket</Text>
            <Text style={{ marginTop: 5 }}>45,000원</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.low}>
            <OuterSubContents />
          </View>
          <View style={{height:"7%"}}/>
        </View>
      </ScrollView>
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          //alignSelf: "flex-start",
          justifyContent: "center",
          flexDirection: "row",
          height: "6%",
          backgroundColor:"#f8f8ff"
        }}
      >
        <TouchableOpacity>
        <TouchableOpacity
          style={{ alignContent: "center", justifyContent: "center" ,width:"30%"}}
        >
          <Image
            source={require("../icon+image/likeThat.png")}
            style={{height: "70%",}}
          />
        </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: "center" ,width:"70%"}}
        >
          <Image
            source={require("../icon+image/purchase_button.png")}
            style={{width: 240, height:"70%" , marginLeft:21,}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  high: {
    flex: 1,
    height: 500,
    marginTop: 70,
    width: "90%",
  },
  low: {
    width: "95%",
    height: 1490,
  },
  line: {
    width: "100%",
    height: 7,
    backgroundColor: "#E6E6E6",
    justifyContent: "center",
  },
});
