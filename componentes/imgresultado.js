
 import React from 'react';
 
 import { View,StyleSheet,Text,Image } from 'react-native';
  
 export default  props=> {
    return(
        <View style={estilos.bloco}>     

           {
              props.comb  == '' ?              
                <Image 
                    source= {require('../assets/logo.jpg')}
                    style={estilos.bomba}
                />
                :                 
                    props.comb  == 'G' ?                
                        <Image 
                            source= {require('../assets/gasolina.jpg')}
                            style={estilos.bomba}
                        />
                    :  
                        <Image 
                            source= {require('../assets/etanol.jpg')}
                            style={estilos.bomba}
                         />
           }





        </View>
     
     )
}

 
const estilos = StyleSheet.create({
  
    bloco:{
            marginBottom:10,
            justifyContent:'center', 
            alignItems:'center'
        },

     txt:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:8,
     }, 
     
     bomba:{
        with:218,
        height:200,
        resizeMode:'stretch'     
     }
});

