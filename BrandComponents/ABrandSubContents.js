// import React, { useState } from "react";
// import { StyleSheet, Text, useWindowDimensions, Dimensions, Image, View } from "react-native";
// import { SceneMap, TabBar, TabView } from "react-native-tab-view";
// // import Product from "./ABrandProduct";
// // import Review from "./ABrandReview";
// import { PointConsumer } from "../context/point";
// import { PointProvider } from "../context/point";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import ProgressBar from "../Components/ProgressBar";

// import * as Font from 'expo-font';

// Font.loadAsync({
//   Vitro_pride: require('../assets/fonts/Vitro_pride.ttf'),
//   'Vitro_pride': require('../assets/fonts/Vitro_pride.ttf'),
//   WemakepriceBold: require('../assets/fonts/Wemakeprice-Bold.ttf'),
//   'Wemakeprice-Bold': require('../assets/fonts/Wemakeprice-Bold.ttf'),
//   HSBombaram3_Regular: require('../assets/fonts/HSBombaram3_Regular.ttf'),
//   'HSBombaram3_Regular': require('../assets/fonts/HSBombaram3_Regular.ttf'),
// });

// function ABrandProduct() {

//   return (
//     <PointProvider>
//       <View style={styles.container}>
//         <View style={styles.productTitle}>
//           <Text style={styles.strong}>제작 예정 상품</Text>
//           <Text style={styles.small}>
//             업사이클링 제품 특성 상 상품마다 약간의 차이가 있을 수 있습니다.
//           </Text>
//         </View>
//         <View style={styles.productDesc}>
//           <Image
//             source={require("../icon+image/tshirtImg1.jpg")}
//             style={styles.tshirtImg}
//           />
//           <View style={styles.productDescText}>
//             <Text style={styles.strong}>t_shirt</Text>
//             <Text style={styles.normal}>1,000개</Text>
//             <PointConsumer>
//               {(value) => (
//                 <View>
//                   <ProgressBar count={value.state.point * 0.01} />
//                   <View style={styles.iconandimg}>
//                     <Image
//                       source={require("../icon+image/magnifyingGlass.png")}
//                       style={{ width: 12, height: 12, marginRight: 2 }}
//                     />
//                     <Text style={styles.normal}>제품 상세정보</Text>
//                   </View>
//                   <View style={styles.iconandimg}>
//                     <Image
//                       source={require("../icon+image/solidarity.png")}
//                       style={{ width: 12, height: 12, marginRight: 2 }}
//                     />
//                     <TouchableOpacity
//                       onPress={() =>
//                         value.actions.setPoint(value.state.point + 1)
//                       }
//                     >
//                       <Text style={styles.normal}>후원하기</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               )}
//             </PointConsumer>
//           </View>
//         </View>
//       </View>
//     </PointProvider>
//   );
// }

// const ReviewBox=()=>{
//   return(
//     <View style={styles.reviewBoxContainer}>
//       <View>
//         <Image source={require("../icon+image/reviewTshirt.jpg")} style={{ width:100, height:80 }}/>
//       </View>
//       <View style={{ marginLeft:10 }}>
//         <View style={{ flexDirection:'row', paddingTop:10, paddingBottom:10 }}>
//           <Text style={{ color: "orange" } }>★★★★★</Text>
//           <Text style={{ color: "#848484" } }> - 아주 좋아요</Text>
//         </View>
//         <View>
//           <Text style={{ fontFamily:'Vitro_pride' } }>{`품질이 좋고 친환경적이어서\n더욱 애착이 가는 옷이에요!`}</Text>
//         </View>
//       </View>
//     </View>
//   );
// }



// const ABrandReview=()=> {
//   return (
//     <View style={styles.container}>
//       <ReviewBox/>
//       <ReviewBox/>
//     </View>
//   );
// }







// //홈,브랜드,베스트,친환경,이벤트의 메뉴와 SubContents들
// //https://github.com/satya164/react-native-tab-view

// let ScreenHeight = Dimensions.get("window").height //subMenu 내용물의 높이를 100%로 맞춰줌
// const renderScene = SceneMap({
//   first: ABrandProduct,
//   second: ABrandReview,
// });

// export default function ABrandSubContents() {
//   const layout = useWindowDimensions();
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     { key: "first", title: "Product" },
//     { key: "second", title: "Review" },
//   ]); //각 key값에 해당하는 메뉴 이름 부여

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//       renderScene={renderScene}
//       style={styles.subMenu}
//       renderTabBar={(props) => (
//         <TabBar
//           {...props}
//           renderLabel={({ route, color }) => (
//             <Text style={{ color: "black", margin: 3, fontFamily:'Vitro_pride' }}>{route.title}</Text>
//           )}
//           style={{ backgroundColor: "#FAFAFA" }}
//           indicatorStyle={{ backgroundColor: '#BEBDBD' }} //탭바밑줄색깔
//         />
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   subMenu: {
//     flex: 1,
//     height: ScreenHeight,
//   },

//   container: {
//     flex: 1,
//     width: "90%",
//     marginLeft: "5%",
//   },
//   productTitle: {
//     flex: 1,
//     marginTop: 10,
//   },
//   strong: {
//     color: "#6E6E6E",
//     fontSize: 18,
//     fontFamily: "WemakepriceBold",
//   },
//   small: {
//     color: "#848484",
//     fontSize: 10,
//     fontFamily: "Vitro_pride",
//     marginTop: 10,
//   },
//   productDesc: {
//     flex: 3,
//     flexDirection: "row",
//   },
//   tshirtImg: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     // borderColor:"red",
//     // borderWidth:1,
//   },
//   productDescText: {
//     flex: 1,
//     marginLeft: "5%",
//     // borderColor:"blue",
//     // borderWidth:1,
//     // justifyContent:'space-around'
//   },
//   normal: {
//     color: "#848484",
//     fontSize: 15,
//     fontFamily: "Vitro_pride",
//   },
//   iconandimg: {
//     flexDirection: "row",
//     alignItems: "center",
//   },


//   reviewBoxContainer:{
//     flexDirection:'row',
//     borderBottomColor:'#848484',
//     borderBottomWidth:0.5,
//     padding:20,
//   },





// });
