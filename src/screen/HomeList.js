
import React, {Component} from "react";
import { View, Text, StyleSheet, Image,TouchableHighlight,FlatList } from "react-native";
// import {  } from "react-native-gesture-handler

class Lista extends Component{
    
    constructor(props){
        super(props);
        this.state = {}

        this.clicou = this.clicou.bind(this);
    }
    clicou(){
       this.props.navigation.navigate('HomePoducts',{title:this.props.data.title,products:this.props.data.produtos});
    }
    render(){
        return(
            <TouchableHighlight underlayColor={"#FFFFFF"} onPress={this.clicou} >
                <View style={[styles.lista,{backgroundColor:this.props.data.bg}]} >
                    <Image source={this.props.data.img} style={styles.listaImagem} />
                    <View>
                        <Text style={styles.listaTitle}>{this.props.data.title}</Text>
                        <Text style={styles.listaDescription}>{this.props.data.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

class HomeList extends Component  {

    constructor(props){
        super(props);

        this.state = {
            list:[{
                key:'1',
                title:'Prato executivo',
                bg:'#e35339',
                img:require('../images/tipos/pe.png'),
                description:'Pratos ja proontos para comer',
                produtos:[
                    {key:'1', name:'Prato de Frango',img:require("../images/cardapio/pe/executivos_frang_.png")},
                    {key:'2', name:'Prato de Peixe',img:require("../images/cardapio/pe/executivos_peix_.png")},
                    {key:'3', name:'Prato de Picanha',img:require("../images/cardapio/pe/executivos_picanh_.png")},
                ]
            },
            {
                key:'2',
                title:'Saladas',
                bg:'#a6bb24',
                img:require('../images/tipos/saladas.png'),
                description:'Pratos saudaveis para você',
                produtos:[
                    {key:'1', name:'Salada de Frango',img:require("../images/cardapio/saladas/salada-fr.png")},
                    {key:'2', name:'Salada Agua doce',img:require("../images/cardapio/saladas/salada_aguadoc_.png")},
                    {key:'3', name:'Salada de Salmão',img:require("../images/cardapio/saladas/salada_salma.png")},
                ]
            },
            {
                key:'3',
                title:'Bebidas',
                bg:'#079ed4',
                img:require('../images/tipos/bebidas.png'),
                description:'Bebidas',
                produtos:[
                    {key:'1', name:'Caipirosca',img:require("../images/cardapio/bebidas/capirosc_3.png")},
                    {key:'2', name:'Cookie Cream',img:require("../images/cardapio/bebidas/cookies_crea.png")},
                    {key:'3', name:'Morango GD',img:require("../images/cardapio/bebidas/morango_gd.png")},
                    {key:'4', name:'Prata',img:require("../images/cardapio/bebidas/patra.png")},
                    {key:'5', name:'Suco fitnees',img:require("../images/cardapio/bebidas/suco_fitines_gd.png")},
                ]
            },
            {
                key:'4',
                title:'Sobremesa',
                bg:'#fcb81c',
                img:require('../images/tipos/sobremesa.png'),
                description:'Pratos ja proontos para comer',
                produtos:[
                    {key:'1', name:'Brownie',img:require("../images/cardapio/sobremesas/brownie_gd.png")},
                    {key:'2', name:'Creme papaya',img:require("../images/cardapio/sobremesas/creme_papaya_cassis_gd.png")},
                    {key:'3', name:'Delicia gelada',img:require("../images/cardapio/sobremesas/delicia_gelada_gd.png")},
                ]
            }
        ]
        }
    }
    
    static navigationOptions = {
        title:'Restaurante XYZ',
    
          headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        headerLayoutPreset: 'center',
        tabBarLabel:"Home",
        tabBarIcon:({focused,tintColor}) => {
            if(focused){
                return(
                    <Image source={require("../images/home_azul.png")} style={styles.icone} />
                )
            }else{
                return(
                    <Image source={require("../images/home_preto.png")} style={styles.icone} />
                )
            }
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.state.list}
                    renderItem={({item}) => <Lista data={item}
                    navigation={this.props.navigation} />}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    },
    container:{
        flex:1
    },
    lista:{
        height:100,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    listaImagem:{
        width:64,
        height:64,
        marginLeft:20,
        marginRight:20
    },
    listaTitle:{
        color:'#FFFFFF',
        fontSize:25,
        fontWeight:'bold'
    },
    listaDescription:{
        color:'#FFFFFF',
        fontSize:16
    }
})
export default HomeList