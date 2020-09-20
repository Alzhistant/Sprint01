import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react native';
import { mainStyle } from '../styles/styles';


//Lo que se ve en pantallla
export default function LocationSreen({ navigation }) {
    return (
    
        <View>
            
            </View>
    );
}

class coordenada{
    constructor(logitud,latitud,tiempo){
        this.longitud=longitud;
        this.latitud=latitud;
        this.tiempo=tiempo;
    }
    historia(){
        //Posiblemente un for o un ciclo
        return "El paciente estuvo: "+ this.tiempo, " minutos ","\n en las cordenadas: " + this.latitud, "\n" + this.longitud;
    }
}

var Guardar_ubicacion=[];