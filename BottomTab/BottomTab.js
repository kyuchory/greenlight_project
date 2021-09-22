import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from 'react';
import { StyleSheet } from 'react-native';

import Anything from "../BottomMenu/Anything";
import Category from "../BottomMenu/Category";
import Home from "../BottomMenu/Home";
import MyPage from "../BottomMenu/MyPage";
import Pick from "../BottomMenu/Pick";

//깃 브랜치용 주석
const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen
            name="Home"
            component={Home}
            />
            <BottomTabNavigator.Screen
            name="Category"
            component={Category}
            />
            <BottomTabNavigator.Screen
            name="Anything"
            component={Anything}
            />
            <BottomTabNavigator.Screen
            name="Pick"
            component={Pick}
            />
            <BottomTabNavigator.Screen
            name="MyPage"
            component={MyPage}
            />
        </BottomTabNavigator.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});