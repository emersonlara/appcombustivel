/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import Gasolina from './componentes/gasolina';
import Etanol from './componentes/etanol';
import BtnCalcular from './componentes/btncalcular';
import Resultado from './componentes/resultado';
import ImgResultado from './componentes/imgresultado';
 

 export default function App(){

  const [gasolina,setGasolina] = useState(0);
  const [etanol,setEtanol] = useState(0);
  const [resultado,setResultado] = useState('');


  const calcular=()=>{

    if(!gasolina){
      alert('Informe o preço da gasolina')
      return
    }

    if(!etanol){
      alert('Informe o preço do etanol')
      return
    }

    let res 
    let calculo  = ( (etanol/gasolina) * 100 ).toFixed(1) ;
    if(calculo > 70){ 
      res = 'GASOLINA'

    }else
    {
      res = 'ETANOL'
    }

    alert('A melhor escolha para abastecer e com : '+res)
    setResultado(res);
  }

    
  const limpavalor=()=>{
    setResultado('')
  }

  const setarGasolina=(v)=>{
    limpavalor()
    setGasolina(v)    
  }

  const setarEtanol=(v)=>{
    limpavalor()    
    setEtanol(v)
  }



 return(
       <SafeAreaView style={estilos.frameprincipal}>          
          <Gasolina aoModificar={setarGasolina}/>
          <Etanol aoModificar={setarEtanol}/>
          <BtnCalcular aoPressionar ={calcular}/>         
          <Resultado resultado={resultado}/>
          <ImgResultado comb={resultado.charAt(0)}/>

       </SafeAreaView>    
    )
 }
 
 const estilos = StyleSheet.create({
   frameprincipal:{
      padding:10
   },
});
  
   

 
 //export default App;
 