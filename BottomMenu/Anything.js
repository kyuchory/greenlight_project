import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProgressBar from "../Components/ProgressBar";

import { PointConsumer } from "../context/point";
import { PointProvider } from "../context/point";

export default function Anything({ navigation }) {
  // const [point, setPoint] = useState(0); //point관리 state

  // const handlePoint = useCallback(() => {
  //   //point+1함수 useCallback최적화
  //   setPoint(point + 1);
  // }, [point]);

  return (
    <PointProvider>
      <View style={styles.container}>
        <Button
          onPress={() => navigation.navigate("ABrand")}
          title="이동하기"
          accessibilityLabel="시각장애인을위한~"
        />
        <Text style={styles.notice}>A브랜드</Text>
        <PointConsumer>
          {(value) => (
            <View>
              <ProgressBar count={value.state.point * 0.01} />
              <Text>{value.state.point}</Text>
              <TouchableOpacity
                onPress={() => value.actions.setPoint(value.state.point + 1)}
              >
                <Text>후원하기</Text>
              </TouchableOpacity>
            </View>
          )}
        </PointConsumer>
      </View>
    </PointProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  notice: {
    alignItems: "flex-start",
    fontSize: 25,
  },
});
