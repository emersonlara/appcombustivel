
 import React from 'react';
 
 import { View,StyleSheet,Text,TextInput } from 'react-native';
  
 export default  props=> {
    return(
        <View style={estilos.bloco}>
            <Text>Digite o preço da gasolina</Text>            
            <TextInput
                style={estilos.tedit}
                editable
                keyboardType='numeric'
                onChangeText={text=>props.aoModificar(text)}
            /> 
        </View>
     
     )
}

 
const estilos = StyleSheet.create({
  
    bloco:{
            marginBottom:10
        },

     tedit:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:8,
     }   
});

