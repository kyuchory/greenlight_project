import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PickSubContents from "../PickComponents/PickSubContents";

export default function Pick() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.empty} />
        <PickSubContents />
      </ScrollView>
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
  empty: {
    paddingRight: "100%",
  },
});
