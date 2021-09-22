import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from 'react';
import { StyleSheet } from 'react-native';

import Anything from "../BottomMenu/Anything";
import Category from "../BottomMenu/Category";
import Home from "../BottomMenu/Home";
import MyPage from "../BottomMenu/MyPage";

import Pick from "../BottomMenu/Pick";
import LogoTitle from "../Header/LogoTitle";



const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: (props) => <LogoTitle {...props}/>}}
            />
            <BottomTabNavigator.Screen
            name="Category"
            component={Category}
            options={{ headerTitle: (props) => <LogoTitle {...props}/>}}
            />
            <BottomTabNavigator.Screen
            name="Anything"
            component={Anything}
            options={{ headerTitle: (props) => <LogoTitle {...props}/>}}
            />
            <BottomTabNavigator.Screen
            name="Pick"
            component={Pick}
            options={{ headerTitle: (props) => <LogoTitle {...props}/>}}
            />
            <BottomTabNavigator.Screen
            name="MyPage"
            component={MyPage}
            options={{ headerTitle: (props) => <LogoTitle {...props}/>}}
            />
        </BottomTabNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});