import * as React from 'react';
import { View, Text, TouchableOpacity} from 'react native';
import { mainStyle } from '../styles/styles';
import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";


const db = firebase.firestore(firebaseApp);


documentoReferente = db.collection("pacientes").doc("paciente-test");
// Se hace referencia al archivo coleccion del documento paciente-test del cloud firestore


export default function obtenerDatos(){

    
    documentoReferente.get().then(function(documento) {  
    if (documento.exists) {
        //ingresa a los datos del documentos
        
        console.log("Document data:", documento.data()); // Extrae los datos de "documento", el paramentro asignado a la funcion para ingresar a .doc()

        documento.forEach(obj => {  //Realiza el recorrido del arreglo objeto de paciente-test, mostrando en pantalla cada atributo que contiene
            Object.entries(obj).forEach(([createdAt,latitud,longitud ]) => {
                console.log(`${createdAt} ${longitud} ${latitud}`);
            });
            console.log('-------------------');
        });



    } else {
        // El caso que no se haya encontrado el documento
        console.log("No such document!");
    }
    }).catch(function(error) {
    console.log("Error getting document:", error);
    });

   
}

obtenerDatos();





/*

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

*/




