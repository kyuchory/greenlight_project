import React, { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, Dimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import Product from "./ABrandProduct";
import Review from "./ABrandReview";
import * as Font from 'expo-font';

Font.loadAsync({
  Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
  'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
  WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
  'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
  HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
  'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
});

//홈,브랜드,베스트,친환경,이벤트의 메뉴와 SubContents들
//https://github.com/satya164/react-native-tab-view

let ScreenHeight = Dimensions.get("window").height //subMenu 내용물의 높이를 100%로 맞춰줌
const renderScene = SceneMap({
  first: Product,
  second: Review,
});

export default function ABrandSubContents() {
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
            <Text style={{ color: "black", margin: 3, fontFamily:'Vitro_pride' }}>{route.title}</Text>
          )}
          style={{ backgroundColor: "#FAFAFA" }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  subMenu: {
    flex: 1,
    height: ScreenHeight,
  },
});
