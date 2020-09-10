import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { mainStyle } from './src/styles/styles';
import TratamientoScreen from './src/screens/tratamientos';
import HomeScreen from './src/screens/home';
import MapScreen from './src/screens/mapa';

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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name="Tratamientos" component={TratamientoScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name='Mapa' component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;