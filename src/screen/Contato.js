
import React, {Component} from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Contato extends Component  {
    static navigationOptions = {
        tabBarLabel:"Contato",
        tabBarIcon:({focused,tintColor}) => {
            if(focused){
                return(
                    <Image source={require("../images/contato_azul.png")} style={styles.icone} />
                )
            }else{
                return(
                    <Image source={require("../images/contato_preto.png")} style={styles.icone} />
                )
            }
        }
    }

    render(){
        return(
            <View>
                <Text>Contato</Text>
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

export default Contato