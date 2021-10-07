import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>GreenLight</Text>
      <Text>Please Login</Text>
      <TextInput />
      <TouchableOpacity
        onPress={() => navigation.navigate("BottomTab", { screen: "Home" })}
      >
        <Text>Loginsssssss</Text>
      </TouchableOpacity>
      <Chat></Chat>
    </View>
  );
}





function Chat() {
  const [said, setSaid] = useState(); 

  const handleYes = () => {
    setSaid(true);
  }

  const handleNo = () => {
    setSaid(false);
  }

  return (
    <View>
      <Text>밥을 먹으실래요?</Text>

      <View>
        <TouchableOpacity onPress={handleYes}>
          <Text>네</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNo}>
          <Text>아뇨</Text>
        </TouchableOpacity>
      </View>

      {said ? (
        <View>
          <Text>맛있게목옹~</Text>
        </View>
      ) : (
        <View>
          <Text>배고플텐데..</Text>
        </View>
      )}
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
