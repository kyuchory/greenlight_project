import React, { useState } from "react";
import { Dimensions, useWindowDimensions, StyleSheet, Text } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import Detail from "./Detail";
import Review from "./Detail";
import QnA from "./Detail";

let ScreenHeight = Dimensions.get("window").height;//subMenu 내용물의 높이를 100%로 맞춰줌
let ScreenWidth = Dimensions.get("window").width;

const renderScene = SceneMap({
  first: Detail,
  second: Review,
  third: QnA,
});

export default function OuterSubContents() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Detail" },
    { key: "second", title: "Review" },
    { key: "third", title: "QnA" },
  ]);
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
            <Text style={{ color: "black", margin: 1, fontWeight: "bold" }}>
              {route.title}
            </Text>
          )}
          style={{ backgroundColor: "white" }}
          indicatorStyle={{ backgroundColor: "#5FE6A0" }} //탭바밑줄색깔
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
    subMenu: {
      flex: 1,
      height: ScreenHeight,
      width: "100%",
    },
  });
