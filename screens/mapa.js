import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { mainStyle } from '../styles/styles';
import MapView, { Polyline } from 'react-native-maps';

export default function MapScreen({ navigation }) {
    return (
      <View style={mainStyle.container}>
        <MapView style={mainStyle.mapStyle}  > 
        
        </MapView>
      </View>
    );
  }

  