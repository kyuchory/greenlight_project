import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Pick() {
  return (
    <View style={styles.container}>
      <Text style={styles.notice}>Pick</Text>
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