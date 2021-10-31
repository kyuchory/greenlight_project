import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { PointConsumer } from "../context/point";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProgressBar from "../Components/ProgressBar2";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useNavigation } from "@react-navigation/native";

import * as Font from "expo-font";
Font.loadAsync({
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  WemakepriceBold: require("../assets/fonts/Wemakeprice-Bold.ttf"),
  "Wemakeprice-Bold": require("../assets/fonts/Wemakeprice-Bold.ttf"),
  HSBombaram3_Regular: require("../assets/fonts/HSBombaram3_Regular.ttf"),
  HSBombaram3_Regular: require("../assets/fonts/HSBombaram3_Regular.ttf"),
});

function ABrandProduct() {
  const navigation = useNavigation();
  return (
    <View style={styles.containerProduct}>
      <View style={styles.productTitle}>
        <Text style={styles.strong}>제작 예정 상품</Text>
        <Text style={styles.small}>
          업사이클링 제품 특성 상 상품마다 약간의 차이가 있을 수 있습니다.
        </Text>
      </View>
      <View style={styles.productDesc}>
        <Image
          source={require("../icon+image/tshirtImg1.jpg")}
          style={styles.tshirtImg}
        />
        <View style={styles.productDescText}>
          <Text style={styles.strong}>t_shirt</Text>
          <Text style={styles.normal}>1,000개</Text>
          <PointConsumer>
            {(value) => (
              <View>
                <ProgressBar count={value.state.point * 0.01} width={100} />
                <View style={styles.iconandimg}>
                  <Image
                    source={require("../icon+image/magnifyingGlass.png")}
                    style={{ width: 12, height: 12, marginRight: 2 }}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ChatBot")}
                  >
                    <Text style={styles.normal}>제품 상세정보</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.iconandimg}>
                  <Image
                    source={require("../icon+image/solidarity.png")}
                    style={{ width: 12, height: 12, marginRight: 2 }}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      value.actions.setPoint(value.state.point + 10)
                    }
                  >
                    <Text style={styles.normal}>후원하기</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </PointConsumer>
        </View>
      </View>
    </View>
  );
}

const ReviewBox = () => {
  return (
    <View style={styles.reviewBoxContainer}>
      <View>
        <Image
          source={require("../icon+image/reviewTshirt.jpg")}
          style={{ width: 100, height: 80 }}
        />
      </View>
      <View style={{ marginLeft: 10 }}>
        <View
          style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 10 }}
        >
          <Text style={{ color: "orange" }}>★★★★★</Text>
          <Text style={{ color: "#848484" }}> - 아주 좋아요</Text>
        </View>
        <View>
          <Text
            style={{ fontFamily: "Vitro_pride" }}
          >{`품질이 좋고 친환경적이어서\n더욱 애착이 가는 옷이에요!`}</Text>
        </View>
      </View>
    </View>
  );
};

const ABrandReview = () => {
  return (
    <View style={styles.container}>
      <ReviewBox />
      <ReviewBox />
    </View>
  );
};

let ScreenHeight = Dimensions.get("window").height; //subMenu 내용물의 높이를 100%로 맞춰줌
const renderScene = SceneMap({
  first: ABrandProduct,
  second: ABrandReview,
});

function ABrandSubContents() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Product" },
    { key: "second", title: "Review" },
  ]); //각 key값에 해당하는 메뉴 이름 부여

  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderScene={renderScene}
      style={styles.subMenu}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          renderLabel={({ route, color }) => (
            <Text
              style={{ color: "black", margin: 3, fontFamily: "Vitro_pride" }}
            >
              {route.title}
            </Text>
          )}
          style={{ backgroundColor: "#FAFAFA" }}
          indicatorStyle={{ backgroundColor: "#BEBDBD" }} //탭바밑줄색깔
        />
      )}
    />
  );
}

//ABrand

export default function ABrand() {
  return (
    <View style={styles.container}>
      <View style={styles.brandTopWrapper}>
        <View style={styles.backgroundPicWrapper}>
          <ImageBackground
            source={require("../icon+image/brandImg1.jpg")}
            style={styles.backgroundPic}
          />
        </View>
        <View style={styles.brandIntro}>
          <View style={styles.brandtitle}>
            <Text style={styles.brandName}>A Brand</Text>
            <Image
              source={require("../icon+image/heart.png")}
              style={styles.heart}
            />
          </View>
          <Text style={styles.brandDesc}>
            자연으로부터 받은 영감을 재사용 면을 이용해 새로운 의류로 만드는
            브랜드
          </Text>
        </View>
        <Image
          source={{ uri: "https://youthumbnail.com/image/youtube-player.webp" }}
          style={styles.youtubePic}
        />
      </View>

      <View style={styles.brandBottomWrapper}>
        <ABrandSubContents />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  brandTopWrapper: {
    flex: 1,
  },

  backgroundPicWrapper: {},
  backgroundPic: {
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  brandIntro: {
    width: "80%",
    margin: "10%",
    position: "absolute",
  },
  brandtitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandName: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  heart: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  brandDesc: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  youtubePic: {
    width: "70%",
    height: "40%",
    position: "absolute",
    marginLeft: "15%",
    marginTop: "45%",
  },
  brandBottomWrapper: {
    flex: 1,
  },

  //ABrandSubContents스타일

  subMenu: {
    flex: 1,
    height: ScreenHeight,
  },
  //ABrandSubContents>Product스타일
  containerProduct: {
    flex: 1,
    width: "90%",
    marginLeft: "5%",
  },
  productTitle: {
    flex: 1,
    marginTop: 10,
  },
  strong: {
    color: "#6E6E6E",
    fontSize: 18,
    fontFamily: "WemakepriceBold",
  },
  small: {
    color: "#848484",
    fontSize: 10,
    fontFamily: "Vitro_pride",
    marginTop: 10,
  },
  productDesc: {
    flex: 3,
    flexDirection: "row",
  },
  tshirtImg: {
    flex: 1,
    width: "100%",
    height: "100%",
    // borderColor:"red",
    // borderWidth:1,
  },
  productDescText: {
    flex: 1,
    marginLeft: "5%",
    // borderColor:"blue",
    // borderWidth:1,
    // justifyContent:'space-around'
  },
  normal: {
    color: "#848484",
    fontSize: 15,
    fontFamily: "Vitro_pride",
  },
  iconandimg: {
    flexDirection: "row",
    alignItems: "center",
  },

  //ABrandSubContents>Review스타일
  reviewBoxContainer: {
    flexDirection: "row",
    borderBottomColor: "#848484",
    borderBottomWidth: 0.5,
    padding: 20,
  },
});
