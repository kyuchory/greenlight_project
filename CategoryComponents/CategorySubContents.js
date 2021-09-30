import React, { useState } from "react";
import { StyleSheet, Text, useWindowDimensions, Dimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import CategoryWomen from "./CategoryWomen";
import CategoryMen from "./CategoryMen"

//$ expo install react-native-pager-view

let ScreenHeight = Dimensions.get("window").height //subMenu 내용물의 높이를 100%로 맞춰줌
const renderScene = SceneMap({
  first: CategoryWomen,
  second: CategoryMen,
});

export default function CategorySubContents() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "WOMEN" },
    { key: "second", title: "MEN" },
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
            <Text style={{ color: "black", margin: 1, fontWeight:"bold" }}>{route.title}</Text>
          )}
          style={{ backgroundColor: "white" }}
          indicatorStyle={{ backgroundColor: '#5FE6A0' }} //탭바밑줄색깔
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
