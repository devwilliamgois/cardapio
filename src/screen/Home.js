
import React, {Component} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeList from "./HomeList";
import HomePoducts from "./HomePoducts";




const staknavigator = createStackNavigator({
    HomeList:{
        screen:HomeList
    },
    HomePoducts:{
        screen:HomePoducts
    }
})



export default createAppContainer(staknavigator);