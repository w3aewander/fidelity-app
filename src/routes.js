// src/routes.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaInicial from './TelaInicial';
import Checkin from './pages/Checkin';
import Cadastro from './pages/Cadastro';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        
        <Stack.Navigator initialRouteName="TelaInicial">
            <Stack.Screen name="TelaInicial" component={TelaInicial} />
            <Stack.Screen name="Checkin" component={Checkin} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            
        </Stack.Navigator>

     
    </NavigationContainer>
  );
}