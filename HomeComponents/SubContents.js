import React, { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, Dimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import Best from "./SubContents_Best";
import Brand from "./SubContents_Brand"; 
import Home from "./SubContents_Home";
import Eco from "./SubContents_Eco";
import Event from "./SubContents_Event";

//홈,브랜드,베스트,친환경,이벤트의 메뉴와 SubContents들
//https://github.com/satya164/react-native-tab-view

let ScreenHeight = Dimensions.get("window").height //subMenu 내용물의 높이를 100%로 맞춰줌
const renderScene = SceneMap({
  first: Home,
  second: Brand,
  third: Best,
  fourth: Eco,
  fifth: Event,
});

export default function SubContents() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "홈" },
    { key: "second", title: "브랜드" },
    { key: "third", title: "베스트" },
    { key: "fourth", title: "친환경" },
    { key: "fifth", title: "이벤트" },
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
            <Text style={{ color: "black", margin: 3 }}>{route.title}</Text>
          )}
          style={{ backgroundColor: "white" }}
          indicatorStyle={{ backgroundColor: 'gray' }} //탭바밑줄색깔
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  subMenu: {
    flex: 1,
    margin: "3%",
    height: ScreenHeight,
  },
});
