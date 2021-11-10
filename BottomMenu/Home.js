import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { ScrollView } from "react-native-gesture-handler";
import SubContents from "../HomeComponents/SubContents";



export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SliderBox
          images={[
            require("../icon+image/ecoImg1.png"),
            require("../icon+image/eventImg3.png"),
          ]}
          sliderBoxHeight={400} //슬라이드 이미지 높이
          dotColor="#FFEE58" //밑에 현재 이미지 dot 색상
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
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
          ImageComponentStyle={{ width: "94%", marginTop: 20 }} //이미지슬라이더 전체적인 위치와 너비 조정
          imageLoadingColor="#2196F3" //이건뭐지
        />
        <SubContents />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
