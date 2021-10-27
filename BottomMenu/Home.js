import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
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
            "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
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
        <SubContents/>
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
