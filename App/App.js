import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { mainStyle } from './src/styles/styles';
import TratamientoScreen from './src/screens/tratamientos';
import HomeScreen from './src/screens/home';
import MapScreen from './src/screens/mapa';
import Ubicacion from './src/screens/ubicacion';
import * as Permissions from 'expo-permissions';

function DetailsScreen({ navigation }) {
  return (
    <View style={ mainStyle.container }>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  async function getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    } else {
      throw new Error('Location permission not granted');
    }
  }
  getLocationAsync()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name="Tratamientos" component={TratamientoScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name='Mapa' component={MapScreen} />
        <Stack.Screen name='Ubicacion' component={Ubicacion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;