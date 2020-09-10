import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { mainStyle } from '../styles/styles';

export default function TratamientoScreen({ navigation }) {
    return (
      <View style={mainStyle.container}>
        <TouchableOpacity
          style={mainStyle.botonPrimario} 
          onPress={() => navigation.navigate('Tratamientos')}>
          <Text style={mainStyle.textoBoton}>VER TRATAMIENTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={mainStyle.botonPrimario} 
          onPress={() => navigation.navigate('Tratamientos')}>
          <Text style={mainStyle.textoBoton}>AGREGAR TRATAMIENTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={mainStyle.botonPrimario} 
          onPress={() => navigation.navigate('Tratamientos')}>
          <Text style={mainStyle.textoBoton}>EDITAR TRATAMIENTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={mainStyle.botonPeligro} 
          onPress={() => navigation.navigate('Tratamientos')}>
          <Text style={mainStyle.textoBoton}>ELIMINAR TRATAMIENTOS</Text>
        </TouchableOpacity>
      </View>
    );
  }