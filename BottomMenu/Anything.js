import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Anything({navigation}) {
  const [point, setPoint] = useState(0); //point관리 state

  const handlePoint = useCallback(() => { //point+5함수 useCallback최적화
    setPoint(point + 5);
  }, [point]);

  return (
    <View style={styles.container}>
      <Text style={styles.notice}>Anything</Text>
      <TouchableOpacity onPress={() => handlePoint()}>
        <Text>후원하기</Text>
      </TouchableOpacity>
      <Button onPress={() => navigation.navigate("SubPage")}
      title="이동하기"
      accessibilityLabel="시각장애인을위한~"
      />
      <Text>{point}</Text>
    </View>
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
