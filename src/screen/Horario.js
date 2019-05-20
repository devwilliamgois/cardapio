
import React, {Component} from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Horario extends Component  {
    
    static navigationOptions = {
        tabBarLabel:"Horario",
        tabBarIcon:({focused,tintColor}) => {
            if(focused){
                return(
                    <Image source={require("../images/horario_azul.png")} style={styles.icone} />
                )
            }else{
                return(
                    <Image source={require("../images/horario_preto.png")} style={styles.icone} />
                )
            }
        }
    }

    render(){
        return(
            <View>
                <Text>Horario</Text>
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
export default Horario