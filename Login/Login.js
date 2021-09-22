import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>GreenLight</Text>
      <Text>Please Login</Text>
      <TextInput/>
      <TouchableOpacity onPress={() => navigation.navigate("BottomTab",{screen: "Home"})}>
        <Text>Login</Text>
      </TouchableOpacity>
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
});
