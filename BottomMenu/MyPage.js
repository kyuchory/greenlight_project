import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FabricConsumer } from "../ChatBot/ChatBot_Context";

export default function MyPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.notice}>MyPage</Text>
      <FabricConsumer>
        {value=>(
        <Text>
          후원 현황
          옷감 정보 : {value.state.fabric} 
          벌 수 : {value.state.count}
        </Text>
        )}
      </FabricConsumer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  notice: {
    marginBottom: 30,
    fontSize: 25,
  },
});
