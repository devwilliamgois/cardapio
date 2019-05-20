
import React, {Component} from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Sobre extends Component  {

    static navigationOptions = {
        tabBarLabel:"Sobre",
        tabBarIcon:({focused,tintColor}) => {
            if(focused){
                return(
                    <Image source={require("../images/sobre_azul.png")} style={styles.icone} />
                )
            }else{
                return(
                    <Image source={require("../images/sobre_preto.png")} style={styles.icone} />
                )
            }
        }
    }


    render(){
        return(
            <View>
                <Text>Sobre</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    }
})

export default Sobre