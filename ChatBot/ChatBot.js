import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useContext,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Animated,
  Image,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker"; //$ expo install expo-image-picker
import DateTimePicker from "@react-native-community/datetimepicker"; //$ expo install @react-native-community/datetimepicker
import FabricContext, {
  FabricConsumer,
  FabricProvider,
} from "./ChatBot_Context";
import { firestore } from "../utils/firebase";
import { UserContext } from "../contexts";

import * as Font from "expo-font";
Font.loadAsync({
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  Vitro_pride: require("../assets/fonts/Vitro_pride.ttf"),
  WemakepriceBold: require("../assets/fonts/Wemakeprice-Bold.ttf"),
  "Wemakeprice-Bold": require("../assets/fonts/Wemakeprice-Bold.ttf"),
  HSBombaram3_Regular: require("../assets/fonts/HSBombaram3_Regular.ttf"),
  HSBombaram3_Regular: require("../assets/fonts/HSBombaram3_Regular.ttf"),
});

export default function ChatBot() {
  const [display0, setDisplay0] = useState(false);
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [viewCondition0, setViewCondition0] = useState(false);
  const [viewCondition1, setViewCondition1] = useState(false);
  const [viewCondition2, setViewCondition2] = useState(false);
  const [viewCondition3, setViewCondition3] = useState(false);
  const [viewCondition4, setViewCondition4] = useState(false);
  const [start, setStart] = useState();
  const [material, setMaterial] = useState();
  const [said, setSaid] = useState(false);
  const [image, setImage] = useState(null); //사진업로드
  const [text, setText] = useState(""); // 벌수 입력받을 것 을 저장할 state
  const scrollViewRef = useRef(); //챗봇 스크롤 자동으로 내리기 위해 필요

  //캘린더
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [fbObject, setFbObject] = useState({});

  const userEmail = useContext(UserContext);
  const email = userEmail.user.email;
  console.log(email);

  const getMileage= async()=>{
    const prevMileage = await firestore.collection(email).get();
    prevMileage.forEach((document)=>console.log(document.data()['마일리지']));
  }

  getMileage()

  const handleMileage = () => {
    const prevMileage = firestore.collection(email).get(mileage).then();
    console.log(prevMileage);
    const plusMileage = prevMileage + 5000;
    setMileage(plusMileage);
    firestore.collection(email).add({
      ...firestore.collection(email),
      마일리지: plusMileage,
    });

    console.log(firestore.collection(email).get(mileage));
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const handleReady = () => {
    setStart(false);
    setDisplay0(true);
  };

  const handleStart = () => {
    setStart(true);
    setDisplay0(true);
    setViewCondition0(true);
  };

  const choiceFiber = () => {
    setMaterial(false);
    setDisplay1(true);
    setViewCondition1(true);
  };

  const choiceSpecial = () => {
    setMaterial(true);
    setDisplay1(true);
    setViewCondition1(true);
  };

  const saidYes = () => {
    setSaid(true);
    setDisplay2(true);
    setViewCondition2(true);
    {
      <FabricConsumer>{({ actions }) => actions.setCount(999)}</FabricConsumer>;
    }
    
  };
  const pickPictureYes = () => {
    setDisplay3(true);
    setViewCondition3(true);
  };

  const pickCalendarYes = () => {
    setDisplay4(true);
    setViewCondition4(true);
  };

  const finish = () => {
    {
      <FabricConsumer>
        {({ actions }) => (actions.setCount(text), actions.setFabric("ttt"))}
      </FabricConsumer>;
      // https://velog.io/@kwonh/React-Context-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-React.createContext
    }
  };

  //사진업로드 함수들
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //캘린더 함수들
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        } //스크롤 하단 유지
      >
        <View style={styles.chatContainer}>
          <View style={styles.chatManager}>
            <Image
              source={require("../icon+image/robot.png")}
              style={styles.avatarImage}
            />
            <ImageBackground
              source={require("../icon+image/chatImageLeft.png")}
              resizeMode="stretch"
              style={styles.chatImage}
            >
              <Text
                style={{
                  paddingTop: "10%",
                  paddingBottom: "10%",
                  paddingRight: "5%",
                  paddingLeft: "15%",
                }}
              >
                안녕하세요!{"\n"}만나서 반갑습니다.{"\n"}'사용설명서' 혹은
                '후원시작'을 클릭해주세요.
              </Text>
            </ImageBackground>
          </View>
          
          <View
            style={styles.chatUser}
            pointerEvents={viewCondition0 ? "none" : "auto"}
          >
            <ImageBackground
              source={require("../icon+image/chatImageRight.png")}
              resizeMode="stretch"
              style={styles.chatImage}
            >
              <View style={styles.iconView}>
                <TouchableOpacity onPress={handleReady}>
                  <Image
                    source={require("../icon+image/userGuideIcon.png")}
                    style={{ width: 100, height: 30 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleStart}>
                  <Image
                    source={require("../icon+image/start.png")}
                    style={{ width: 100, height: 30 }}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {display0 ? (
            <View>
              {start ? (
                <View>
                  <View style={styles.chatManager}>
                    <Image
                      source={require("../icon+image/robot.png")}
                      style={styles.avatarImage}
                    />
                    <ImageBackground
                      source={require("../icon+image/chatImageLeft.png")}
                      resizeMode="stretch"
                      style={styles.chatImage}
                    >
                      <Text
                        style={{
                          paddingTop: "10%",
                          paddingBottom: "10%",
                          paddingRight: "5%",
                          paddingLeft: "15%",
                        }}
                      >
                        후원하실 상품 재질을 모두 선택해 주세요.
                      </Text>
                    </ImageBackground>
                  </View>

                  <View
                    style={styles.chatUser}
                    pointerEvents={viewCondition1 ? "none" : "auto"}
                  >
                    <ImageBackground
                      source={require("../icon+image/chatImageRight.png")}
                      resizeMode="stretch"
                      style={styles.chatImage}
                    >
                      <View style={styles.iconView}>
                        <TouchableOpacity onPress={choiceFiber}>
                          <Image
                            source={require("../icon+image/fiberIcon.png")}
                            style={{ width: 100, height: 30 }}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={choiceSpecial}>
                          <Image
                            source={require("../icon+image/specialMaterialIcon.png")}
                            style={{ width: 100, height: 30 }}
                          />
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                  </View>

                  {display1 ? (
                    <View>
                      <View style={styles.chatManager}>
                        <Image
                          source={require("../icon+image/robot.png")}
                          style={styles.avatarImage}
                        />
                        <ImageBackground
                          source={require("../icon+image/chatImageLeft.png")}
                          resizeMode="stretch"
                          style={styles.chatImage}
                        >
                          <Text
                            style={{
                              paddingTop: "10%",
                              paddingBottom: "10%",
                              paddingRight: "5%",
                              paddingLeft: "15%",
                            }}
                          >
                            후원하실 상품의 개수를 입력해주세요.
                          </Text>
                        </ImageBackground>
                      </View>

                      <View style={styles.chatUser}>
                        <ImageBackground
                          source={require("../icon+image/chatImageRight.png")}
                          resizeMode="stretch"
                          style={styles.chatImage}
                        >
                          {material ? (
                            <View
                              pointerEvents={viewCondition2 ? "none" : "auto"}
                              style={{ alignItems: "center" }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  paddingTop: "10%",
                                  paddingBottom: "2%",
                                  paddingRight: "20%",
                                  paddingLeft: "5%",
                                }}
                              >
                                <Image
                                  source={require("../icon+image/specialMaterialIcon.png")}
                                  style={{ width: 100, height: 30 }}
                                />
                                <View style={{ backgroundColor: "#F2F2F2" }}>
                                  <TextInput
                                    onSubmitEditing={() =>
                                      console.log("onSubmitEditing")
                                    }
                                    placeholder="입력"
                                    value={text}
                                    onChange={onChangeText}
                                  />
                                </View>
                                <Text style={{ marginLeft: 5, marginTop: 4 }}>
                                  벌
                                </Text>
                              </View>
                              <TouchableOpacity onPress={saidYes}>
                                <Image
                                  source={require("../icon+image/confirmIcon.png")}
                                  style={{ width: 40, height: 20 }}
                                />
                              </TouchableOpacity>
                            </View>
                          ) : (
                            <View
                              pointerEvents={viewCondition2 ? "none" : "auto"}
                              style={{ alignItems: "center" }}
                            >
                              <View
                                style={{
                                  flexDirection: "row",
                                  paddingTop: "10%",
                                  paddingBottom: "2%",
                                  paddingRight: "20%",
                                  paddingLeft: "5%",
                                }}
                              >
                                <Image
                                  source={require("../icon+image/fiberIcon.png")}
                                  style={{ width: 100, height: 30 }}
                                />
                                <View style={{ backgroundColor: "#F2F2F2" }}>
                                  <TextInput
                                    placeholder="입력"
                                    value={text}
                                    onChange={onChangeText}
                                  />
                                </View>
                                <Text style={{ marginLeft: 5, marginTop: 4 }}>
                                  벌
                                </Text>
                              </View>
                              <TouchableOpacity onPress={saidYes}>
                                <Image
                                  source={require("../icon+image/confirmIcon.png")}
                                  style={{ width: 40, height: 20 }}
                                />
                              </TouchableOpacity>
                            </View>
                          )}
                        </ImageBackground>
                      </View>
                    </View>
                  ) : (
                    <View></View>
                  )}

                  {display2 ? (
                    <View>
                      <View style={styles.chatManager}>
                        <Image
                          source={require("../icon+image/robot.png")}
                          style={styles.avatarImage}
                        />
                        <ImageBackground
                          source={require("../icon+image/chatImageLeft.png")}
                          resizeMode="stretch"
                          style={styles.chatImage}
                        >
                          {said ? (
                            <Text
                              style={{
                                paddingTop: "10%",
                                paddingBottom: "10%",
                                paddingRight: "5%",
                                paddingLeft: "15%",
                              }}
                            >
                              앨범에서 후원하실 상품 이미지를{"\n"}선택하여
                              업로드해 주세요.{"\n"}
                              (정확한 확인을 위해 프레임 내에서{"\n"}또렷하게
                              촬영된 사진을 업로드해 주세요.)
                            </Text>
                          ) : (
                            <Text>nononononoo</Text>
                          )}
                        </ImageBackground>
                      </View>

                      <View style={styles.chatUser}>
                        <ImageBackground
                          source={require("../icon+image/chatImageRight.png")}
                          resizeMode="stretch"
                          style={styles.chatImage}
                        >
                          {image && (
                            <Image
                              source={{ uri: image }}
                              style={styles.imageInChat}
                            />
                          )}
                        </ImageBackground>
                      </View>

                      <View
                        style={styles.chatUser}
                        pointerEvents={viewCondition3 ? "none" : "auto"}
                      >
                        <ImageBackground
                          source={require("../icon+image/chatImageRight.png")}
                          resizeMode="stretch"
                          style={styles.chatImage}
                        >
                          <View
                            style={{
                              alignItems: "center",
                              margin: "5%",
                              paddingRight: "3%",
                            }}
                          >
                            <TouchableOpacity onPress={pickImage}>
                              <Image
                                source={require("../icon+image/picUploadIcon.png")}
                                style={{ width: 100, height: 40 }}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={pickPictureYes}>
                              <Image
                                source={require("../icon+image/confirmIcon.png")}
                                style={{ width: 40, height: 20 }}
                              />
                            </TouchableOpacity>
                          </View>
                        </ImageBackground>
                      </View>
                    </View>
                  ) : (
                    <View></View>
                  )}

                  {display3 ? (
                    <View>
                      <View style={styles.chatManager}>
                        <Image
                          source={require("../icon+image/robot.png")}
                          style={styles.avatarImage}
                        />
                        <ImageBackground
                          source={require("../icon+image/chatImageLeft.png")}
                          resizeMode="stretch"
                          style={styles.chatImage}
                        >
                          <Text
                            style={{
                              paddingTop: "10%",
                              paddingBottom: "10%",
                              paddingRight: "5%",
                              paddingLeft: "15%",
                            }}
                          >
                            업로드 되었습니다!{"\n"}심사과정은 약 1~2일이
                            소요되며,{"\n"}
                            이후 승인 여부는 '마이페이지-후원 내역'에서{"\n"}
                            보실 수 있습니다.
                          </Text>
                        </ImageBackground>
                      </View>

                      <View style={styles.chatManager}>
                        <Image
                          source={require("../icon+image/robot.png")}
                          style={styles.avatarImage}
                        />
                        <ImageBackground
                          source={require("../icon+image/chatImageLeft.png")}
                          resizeMode="stretch"
                          style={styles.chatImage}
                        >
                          <Text
                            style={{
                              paddingTop: "10%",
                              paddingBottom: "10%",
                              paddingRight: "5%",
                              paddingLeft: "15%",
                            }}
                          >
                            승인되었습니다!{"\n"}택배 방문 희망일을
                            선택해주세요.{"\n"}
                            배송비 입금 확인 후, 택배 방문 희망일에{"\n"}수거할
                            예정입니다.
                          </Text>
                        </ImageBackground>
                      </View>

                      <View
                        style={styles.chatUser}
                        pointerEvents={viewCondition4 ? "none" : "auto"}
                      >
                        <ImageBackground
                          source={require("../icon+image/chatImageRight.png")}
                          resizeMode="stretch"
                          style={styles.chatImage}
                        >
                          <TouchableOpacity onPress={showDatepicker}>
                            <Text
                              style={{
                                paddingTop: "5%",
                                paddingBottom: "2%",
                                paddingRight: "10%",
                                paddingLeft: "5%",
                              }}
                            >
                              !!날짜 선택!!{"\n"}
                              {date.getFullYear()}-{date.getMonth() + 1}-
                              {date.getDate()}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={pickCalendarYes}>
                            <Image
                              source={require("../icon+image/confirmIcon.png")}
                              style={{
                                width: 40,
                                height: 20,
                                marginTop: 5,
                                marginBottom: 5,
                                marginLeft: 32,
                              }}
                            />
                          </TouchableOpacity>
                        </ImageBackground>
                        {show && (
                          <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                          />
                        )}
                      </View>
                    </View>
                  ) : (
                    <View></View>
                  )}

                  {display4 ? (
                    <View>
                      <View style={styles.chatManager}>
                        <Image
                          source={require("../icon+image/robot.png")}
                          style={styles.avatarImage}
                        />
                        <ImageBackground
                          source={require("../icon+image/chatImageLeft.png")}
                          resizeMode="stretch"
                          style={styles.chatImage}
                        >
                          <Text
                            style={{
                              paddingTop: "10%",
                              paddingBottom: "10%",
                              paddingRight: "5%",
                              paddingLeft: "15%",
                            }}
                          >
                            모든 과정이 마무리 되었습니다!{"\n"}포인트는 수거
                            완료 후 적립됩니다.
                            {"\n"}라이프업을 통해 업사이클링 브랜드들을{"\n"}
                            지지해 주셔서 감사합니다.
                          </Text>
                        </ImageBackground>
                      </View>
                      <FabricConsumer>
                        {({ actions }) => (
                          <View style={styles.chatUser}>
                            <ImageBackground
                              source={require("../icon+image/chatImageRight.png")}
                              resizeMode="stretch"
                              style={styles.chatImage}
                            >
                              <TouchableOpacity onPress={() => handleMileage()}>
                                <Image
                                  source={require("../icon+image/finishIcon.png")}
                                  style={{
                                    width: 100,
                                    height: 30,
                                    marginTop: "5%",
                                    marginLeft: "5%",
                                    marginRight: "5%",
                                  }}
                                />
                              </TouchableOpacity>
                            </ImageBackground>
                          </View>
                        )}
                      </FabricConsumer>
                    </View>
                  ) : (
                    <View></View>
                  )}
                </View>
              ) : (
                <View>
                  <Text>사용설명서 modal</Text>
                </View>
              )}
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "2%",
    backgroundColor: "white",
  },
  chatContainer: {
    flex: 1,
    marginTop: "10%",
  },
  chatManager: {
    // backgroundColor:"yellow",
    alignItems: "center",
    marginTop: "10%",
    flexDirection: "row",
  },
  chatUser: {
    // backgroundColor:"pink",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: "10%",
  },
  iconView: {
    flexDirection: "row",
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "4%",
    marginRight: "11%",
  },
  chatImage: {
    justifyContent: "flex-end",
  },
  avatarImage: {
    width: 30,
    height: 30,
    marginBottom: "15%",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "gray",
  },
  imageInChat: {
    width: 100,
    height: 100,
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "5%",
    marginRight: "10%",
  },
});
