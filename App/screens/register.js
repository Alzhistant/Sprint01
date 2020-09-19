import React, {Component, useState, useEffect} from 'react';
import { Image, View,Text,TouchableHighlight,TouchableOpacity, ToastAndroid} from 'react-native';
import { mainStyle, BotonRegister } from '../styles/styles';
import auth from '@react-native-firebase/auth';
import { firebaseConfig } from '../firebase/firebaseConfig'
import { TextInput } from 'react-native-gesture-handler';
//import * as firebase from 'firebase/app';

/*if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}*/


export default class Register extends Component{
    constructor(){
        super();
        this.state = {nombre: '', apellido: '', correo: '', tel: '', pass1: '', pass2: ''};
    }
    createUser=()=>{
        var i;
        var Nombre = this.state.nombre;
        var Apellido = this.state.apellido;
        var Correo = this.state.correo;
        var Telefono = this.state.tel;
        var Pass1 = this.state.pass1;
        var Pass2 = this.state.pass2;

        let Persona = [Nombre,Apellido,Correo,Telefono,Pass1,Pass2];
        for(i=0;i<Persona.length;i++){
            if(!Persona[i]){
                ToastAndroid.showWithGravity(
                    "Asegurese de rellenar todos los campos.",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );
                break;
            }
        }
        if(Pass1 == Pass2){
            if(Pass1.length < 8 ){
                ToastAndroid.showWithGravity(
                    "La contraseña es demasiado corta.",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
            );
            }
            else{
                auth().createUserWithEmailAndPassword(Persona[2], Persona[4]).then(() => {
                    console.log('User account created & signed in!');
                    this.props.navigate.navigation('Login');
                }).catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    }
                    if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    }
                    console.error(error);
                });
            }
        }
        else{ 
            ToastAndroid.showWithGravity(
                "Las contraseñas no coinciden.",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
            );
        }
        
    }
    render(){
        return (
        <View style={mainStyle.container}>
                <TextInput style={mainStyle.textInputRegister} placeholder="Nombre"
                    onChangeText={nombre => this.setState({nombre})}
                    underlineColorAndroid={'transparent'}/>

                <TextInput style={mainStyle.textInputRegister} placeholder="Apellido"
                    onChangeText={apellido => this.setState({apellido})}
                    underlineColorAndroid={'transparent'}/>

                <TextInput style={mainStyle.textInputRegister} placeholder="Correo electrónico"
                    onChangeText={correo => this.setState({correo})}
                    underlineColorAndroid={'transparent'}/>

                <TextInput style={mainStyle.textInputRegister} placeholder="Teléfono(+56)"
                    onChangeText={tel => this.setState({tel})}
                    underlineColorAndroid={'transparent'}/>

                <TextInput style={mainStyle.textInputRegister} placeholder="Contraseña (mín. 8 caracteres)"
                    onChangeText={pass1 => this.setState({pass1})}
                    secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                <TextInput style={mainStyle.textInputRegister} placeholder="Confirmar contraseña"
                    onChangeText={pass2 => this.setState({pass2})}
                    secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                    <View style={BotonRegister.container}>
                        <TouchableOpacity
                            style={mainStyle.botonPrimario} 
                            //onPress={() => navigation.navigate('Register')}
                            onPress={this.createUser}>
                            <Text style={mainStyle.textoBoton}>Registrarse</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={BotonRegister.button} 
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={BotonRegister.textoBoton}>Iniciar sesión</Text>
                        </TouchableOpacity>
                    </View>
        </View>
        );
    }

}