import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CategorySubContents from "../CategoryComponents/CategorySubContents";

export default function Category() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.empty}/>
        <CategorySubContents/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  empty:{
    paddingRight:"100%"
  },

});