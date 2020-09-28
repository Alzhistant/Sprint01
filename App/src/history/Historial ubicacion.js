import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react native';
import { mainStyle } from '../styles/styles';


latP; //==>'34354'; ----Ejemplo de prueba 
lonP; //==>'74245'; ----Ejemplo de pruebas  
//time= new Date(); ----Seguir investigando

  



export function capturarCoordenada(){
  
    function coordenada(longitud,latitud,tiempo){
        this.longitud=longitud;
        this.latitud=latitud;
        this.tiempo=tiempo;
    }

    var longitudCapturar=latP; 
    var latitudCapturar=lonP;
    //var tiempoCapturar=document.write(time.getHours());

  
    coordenadaGuardada=new coordenada(longitudCapturar,latitudCapturar,tiempoCapturar);
    console.log(coordenadaGuardada);
  
    insertar();

}


var array=[];

function insertar(){
  array.push(coordenadaGuardada); // Se estan guardando las coordenada como objeto
  //console.log(array);
}

capturarCoordenada();




/*
class coordenada{
    constructor(longitud,latitud,tiempo){
        this.longitude=longitude;
        this.latitude=latitude;
        this.tiempo=tiempo;
    }

     historia(x,y){ 
      
      let Gurdar_ubicacion=[];
      Guardar_ubicacion.push(x);
      Guardar_ubicacion.push(y);
    }


}

let pacienteCoordenada=new coordenada('Historial coordenada');
pacienteCoordenada.historia('231','-321');

*/

