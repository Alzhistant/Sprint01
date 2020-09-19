import React, {Component, useState, useEffect} from 'react';
import { Image, View,Text,Button,TouchableHighlight,TouchableOpacity} from 'react-native';
import { mainStyle, BotonRegister } from '../styles/styles';
import auth from '@react-native-firebase/auth';
import {firebaseConfig} from '../firebase/firebaseConfig'
import googleImg from '../assets/google.png'
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from 'firebase'

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default class Login extends Component{
    signInWithGoogleAsync = async () => {
      try {
        const result = await Google.logInAsync({
          behavior: 'web',
          //expoClientId: '337237467623-sbd1n1l4kcgvr5o1evjdjkihq7r1cfip.apps.googleusercontent.com',
          //iosClientId: '337237467623-sbd1n1l4kcgvr5o1evjdjkihq7r1cfip.apps.googleusercontent.com',
          //androidClientId: '337237467623-sbd1n1l4kcgvr5o1evjdjkihq7r1cfip.apps.googleusercontent.com',
          //iosStandaloneAppClientId: '337237467623-sbd1n1l4kcgvr5o1evjdjkihq7r1cfip.apps.googleusercontent.com',
          androidStandaloneAppClientId: '337237467623-sbd1n1l4kcgvr5o1evjdjkihq7r1cfip.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
        });
    
        if (result.type === 'success') {
          return result.accessToken;
        } else {
          return { cancelled: true };
        }
      } catch (e) {
        return { error: true };
      }
    }
    componentDidMount(){
      this.checkIfLoggedIn();
    }
    checkIfLoggedIn = () => {
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.props.navigation.navigate('Register');
        }
        else{

        }
      })
    }
    render(){
      return (
        <View style={mainStyle.container}>
          
          <TextInput style={mainStyle.textInputRegister} placeholder="Correo electrónico"
                  underlineColorAndroid={'transparent'}/>

              <TextInput style={mainStyle.textInputRegister} placeholder="Contraseña"
                  underlineColorAndroid={'transparent'}/>
          
          <TouchableOpacity
            style={mainStyle.botonPrimario} 
            onPress={() => navigation.navigate('Home')}>
            <Text style={mainStyle.textoBoton}>Iniciar sesión</Text>
          </TouchableOpacity>
          <Text>{"                                        "}</Text>
          <Text>{"                                        "}</Text>
          <Text style = {{color: 'black'}}>{"¿Nuevo en Alzhistant?"}</Text>
          <TouchableOpacity
            style={mainStyle.botonPrimario} 
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={mainStyle.textoBoton}>Registrarrse</Text>
          </TouchableOpacity>
          <Text>{"                                        "}</Text>
          <Text>{"                                        "}</Text>
          <Text style = {{color: 'black'}}>{"o inicie sesión con"}</Text>
          <Text>{"                                        "}</Text>
          <TouchableOpacity onPress={() => /*this.signInWithGoogleAsync()*/console.log('Nope') }>
          <Image source={googleImg} style={mainStyle.botonCirculo} />
          </TouchableOpacity>
        </View>
      );
    }
}