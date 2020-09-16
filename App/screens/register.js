import React, {Component, useState, useEffect} from 'react';
import { Image, View,Text,Button,TouchableHighlight,TouchableOpacity} from 'react-native';
import { mainStyle, Boton } from '../styles/styles';
import * as firebase from 'firebase/app';
import auth from '@react-native-firebase/auth';
import firebaseConfig from '../firebase/firebaseConfig'
import { TextInput } from 'react-native-gesture-handler';

export default function RegisterScreen({ navigation }) {
    return (
      <View style={mainStyle.container}>
            <TextInput style={mainStyle.textInputRegister} placeholder="Nombre"
                underlineColorAndroid={'transparent'}/>

            <TextInput style={mainStyle.textInputRegister} placeholder="Apellido"
                underlineColorAndroid={'transparent'}/>

            <TextInput style={mainStyle.textInputRegister} placeholder="Correo electrónico"
                underlineColorAndroid={'transparent'}/>

            <TextInput style={mainStyle.textInputRegister} placeholder="Teléfono(+56)"
                underlineColorAndroid={'transparent'}/>

            <TextInput style={mainStyle.textInputRegister} placeholder="Contraseña"
                secureTextEntry={true} underlineColorAndroid={'transparent'}/>

            <TextInput style={mainStyle.textInputRegister} placeholder="Confirmar contraseña"
                secureTextEntry={true} underlineColorAndroid={'transparent'}/>


                <View style={Boton.button} />
                <View style={Boton.button} />
            
      </View>
    );
  }