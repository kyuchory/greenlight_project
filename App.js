import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login/Login";
import BottomTab from "./BottomTab/BottomTab";
import ABrand from "./Brands/ABrand";
import BBrand from "./Brands/BBrand";
import Signup from "./Login/Signup";
import ChatBot from "./ChatBot/ChatBot";
import CategoryOuter from "./CategoryComponents/CategoryOuter";
import UserGuide from "./ChatBot/UserGuide";
import OuterPage from "./CategoryComponents/OuterPage";
import OuterPage2 from "./CategoryComponents/OuterPage2";
import OuterPage3 from "./CategoryComponents/OuterPage3";

import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

import { PointProvider } from "./context/point";
import { FabricProvider } from "./ChatBot/ChatBot_Context";
import { UserProvider } from "./contexts";

import { LogBox } from 'react-native';
import Donate from "./Donate/Donate";
import DonateDetailPage1 from "./Donate/DonateDetailPage1";
import DonateDetailPage2 from "./Donate/DonateDetailPage2";
import GoDonate from "./Donate/GoDonate";

import SupportList from "./ChatBot/SupportList";

import FirstOuter from "./CategoryComponents/FirstOuter";
import Payment from "./CategoryComponents/Payment";
import PaymentCompletion from "./CategoryComponents/PaymentCompletion";

import LogoTitle3 from "./Header/LogoTitle3";
import LogoTitle4 from "./Header/LogoTitle4";
import LogoTitle5 from "./Header/LogoTitle5";
import DonationCompletion from "./Donate/DonationCompletion";
import ChatBot2 from "./ChatBot/ChatBot2";
import GoDonate2 from "./Donate/GoDonate2";


LogBox.ignoreLogs(['Setting a timer']);


const Stack = createStackNavigator();


export default function App() {
  const [point, setPoint] = useState(1);
  const handlePoint = () => {
    setPoint(point + 5);
  };


  return (
    <UserProvider>
    <FabricProvider>
    <PointProvider>
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTab" component={BottomTab} point={point}/>
        <Stack.Screen name="ABrand" component={ABrand} />
        <Stack.Screen name="BBrand" component={BBrand} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ChatBot" component={ChatBot} />
        <Stack.Screen name="ChatBot2" component={ChatBot2} />
        <Stack.Screen name="CategoryOuter" component= {CategoryOuter} />
        <Stack.Screen name="UserGuide" component= {UserGuide}/>
        <Stack.Screen name="OuterPage" component={OuterPage}/>
        <Stack.Screen name="OuterPage2" component={OuterPage2}/> 
        <Stack.Screen name="OuterPage3" component={OuterPage3}/>
        
        

        <Stack.Screen name="Donate" component={Donate}/>
        <Stack.Screen name="DonateDetailPage1" component={DonateDetailPage1}/>
        <Stack.Screen name="DonateDetailPage2" component={DonateDetailPage2}/>
        <Stack.Screen name="GoDonate" component={GoDonate}/>
        <Stack.Screen name="GoDonate2" component={GoDonate2}/>
        <Stack.Screen name="DonationCompletion"
                      component={DonationCompletion}
                      options={{
                        headerShown: true,
                        headerTitle: (props) => (
                          <LogoTitle5 {...props} title={"기부완료"} />
                        ),
                      }}/>

        <Stack.Screen name="SupportList" component={SupportList}/>

        <Stack.Screen
                  name="FirstOuter"
                  component={FirstOuter}
                  options={{
                    headerShown: true,
                    headerTitle: (props) => (
                      <LogoTitle3 {...props} title={"상세정보"} />
                    ),
                  }}
                />
                <Stack.Screen
                  name="Payment"
                  component={Payment}
                  options={{
                    headerShown: true,
                    headerTitle: (props) => (
                      <LogoTitle4 {...props} title={"주문하기"} />
                    ),
                  }}
                />
                <Stack.Screen
                  name="PaymentCompletion"
                  component={PaymentCompletion}
                  options={{
                    headerShown: true,
                    headerTitle: (props) => (
                      <LogoTitle5 {...props} title={"주문완료"} />
                    ),
                  }}
                />


      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
    </PointProvider>
    </FabricProvider>
    </UserProvider>
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