import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function PaymentCompletion(){
    return(
        <View style={styles.container}>
            <View style={styles.textBox}>
                <View>
                    <Text style={{fontSize:20, marginBottom:"2%"}}>주문이 정상적으로 완료 되었습니다.</Text>
                    <Text style={{fontSize:12}}>               업체(브랜드)의 주문 확인 후 발송됩니다.</Text>
                </View>
            </View>
            <View style={styles.buttonBox}>
                <Image source={require("../icon+image/priceCheck.png")} style={{width:"49%"}}/>
                <Image source={require("../icon+image/goHome.png")}
                style={{width:"49%"}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      backgroundColor: "white",
    },
    textBox:{
        width:"95%",
        height: "15%",
        backgroundColor:"white",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonBox:{
        width:"95%",
        height: "8%",
        backgroundColor:"white",
        flexDirection: "row",
        justifyContent: "space-between",
    }
})