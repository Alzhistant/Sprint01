import React, {Component, useState, useEffect} from 'react';
import { Image, View,Text,Button,TouchableHighlight,TouchableOpacity} from 'react-native';
import { mainStyle, BotonRegister } from '../styles/styles';
import * as firebase from 'firebase/app';
import auth from '@react-native-firebase/auth';
import firebaseConfig from '../firebase/firebaseConfig'
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

export default class RegisterScreen extends Component{
    constructor(){
        super();
        this.state = {nombre: '', apellido: '', correo: '', tel: '', pass1: '', pass2: ''};
    }
    F1=()=>{
        var Nombre = this.state.nombre;
        var Apellido = this.state.apellido;
        var Correo = this.state.correo;
        var Telefono = this.state.tel;
        var Pass1 = this.state.pass1;
        var Pass2 = this.state.pass2;

        if(Pass1 == Pass2)
            alert("True");
        else
            alert("False")
    }
    render(){
        //const {navigation} = useNavigation();
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

                <TextInput style={mainStyle.textInputRegister} placeholder="Contraseña"
                    onChangeText={pass1 => this.setState({pass1})}
                    secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                <TextInput style={mainStyle.textInputRegister} placeholder="Confirmar contraseña"
                    onChangeText={pass2 => this.setState({pass2})}
                    secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                    <View style={BotonRegister.container}>
                        <TouchableOpacity
                            style={mainStyle.botonPrimario} 
                            //onPress={() => navigation.navigate('Register')}
                            onPress={this.F1}>
                            <Text style={mainStyle.textoBoton}>Registrarse</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={BotonRegister.button} 
                            /*onPress={() => this.props.navigation.navigate('Login')}*/>
                            <Text style={BotonRegister.textoBoton}>Iniciar sesión</Text>
                        </TouchableOpacity>
                    </View>
        </View>
        );
    }

}