// In App.js in a new project

import React from "react";
import { View, Text,Image,StyleSheet } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from './src/screen/Home';
import Contato from './src/screen/Contato';
import Horario from './src/screen/Horario';
import Sobre from './src/screen/Sobre';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen:Home,

      tabBarLabel:"Home",
      navigationOptions: {
        tabBarIcon:({focused,tintColor}) => {
              if(focused){
                  return(
                    
                      <Image source={require("./src/images/home_azul.png")} style={styles.icone} />
                  )
              }else{
                  return(
                      <Image source={require("./src/images/home_preto.png")} style={styles.icone} />
                  )
              }
          
      }
}
  },
  Contato: {
    screen:Contato
  },
  Horario: {
    screen:Horario
  },
  Sobre: {
    screen:Sobre
  },
});
const styles = StyleSheet.create({
  icone:{
      width:26,
      height:26
  }
})
export default createAppContainer(AppNavigator);