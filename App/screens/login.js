import React, {Component, useState, useEffect} from 'react';
import { Image, View,Text,Button,TouchableHighlight,TouchableOpacity} from 'react-native';
import { mainStyle } from '../styles/styles';
import * as firebase from 'firebase/app';
import auth from '@react-native-firebase/auth';
import firebaseConfig from '../firebase/firebaseConfig'
import googleImg from '../assets/google.png'
import { TextInput } from 'react-native-gesture-handler';

export default function LoginScreen({ navigation }) {
    return (
      <View style={mainStyle.container}>
        
        <Text>Usuario</Text>
        
        <TouchableOpacity
          style={mainStyle.botonPrimario} 
          onPress={() => navigation.navigate('Tratamientos')}>
          <Text style={mainStyle.textoBoton}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={mainStyle.botonPrimario} 
          onPress={() => navigation.navigate('Register')}>
          <Text style={mainStyle.textoBoton}>Registrarse</Text>
        </TouchableOpacity>
        <Text>{"                                        "}</Text>
        <Text>{"                                        "}</Text>
        <Text>{"                                        "}</Text>
        <TouchableOpacity onPress={() => alert("Alerta")}>
        <Image source={googleImg} style={mainStyle.botonCirculo} />
        </TouchableOpacity>
      </View>
    );
  }