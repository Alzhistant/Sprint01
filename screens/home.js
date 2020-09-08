import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { mainStyle } from '../styles/styles';

export default function HomeSreen({ navigation }) {
    return (
      <View style={mainStyle.container}>
        <TouchableOpacity
          style={mainStyle.botonPrimario} 
          onPress={() => navigation.navigate('Tratamientos')}>
          <Text style={mainStyle.textoBoton}>TRATAMIENTOS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={mainStyle.botonPrimario} 
          onPress={() => navigation.navigate('Mapa')}>
          <Text style={mainStyle.textoBoton}>VER MAPA</Text>
        </TouchableOpacity>
      </View>
    );
  }