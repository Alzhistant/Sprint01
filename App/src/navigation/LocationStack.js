import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Location from '../screens/Location/Location'

const Stack = createStackNavigator();

export default function LocationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="location"
                component={Location}
                options={{ title: "Ubicaciones" }}
            />
        </Stack.Navigator>
    )
}
