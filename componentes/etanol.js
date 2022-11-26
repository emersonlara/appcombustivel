
 import React from 'react';
 
 import { View,StyleSheet,Text,TextInput } from 'react-native';
  
 export default  props=> {     
    return(
        <View style={estilos.tpanel}>
            <Text>Digite o preço do Etanol</Text>
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
  
    tpanel:{
            marginBottom:10
        },

     tedit:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:8,
     }   
});

