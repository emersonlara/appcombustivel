
 import React from 'react';
 
 import { View,StyleSheet,Text,TouchableHighlight } from 'react-native';
  
 export default  props=> {
    return(
        <View style={estilos.tpanel}>
            <TouchableHighlight 
                style={estilos.tbutton}
                onPress={props.aoPressionar}
              >
                <Text style={estilos.txtbtn}>calcular</Text>                
            </TouchableHighlight>
        </View>     
     )
}

 
const estilos = StyleSheet.create({
  
    tpanel:{
            marginBottom:10
        },

     tbutton:{        
        backgroundColor:'#34baab',
        justifyContent:'center',
        alignItems:'center', 
        borderRadius:8, 
        pádding:10,
     },

     txtbtn:{

        textTransform:'uppercase',
        color:'#fff',        
        fontSize:25,

     },

     tedit:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:8,
     }   
});

