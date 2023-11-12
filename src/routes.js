// src/routes.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaInicial from './TelaInicial';
import Checkin from './pages/Checkin';
import Cadastro from './pages/Cadastro';
import Historico from './pages/Historico';


const Stack = createStackNavigator();

export default function Routes({url}) {
  return (
    <NavigationContainer>
        
        <Stack.Navigator initialRouteName="TelaInicial">
            <Stack.Screen name="TelaInicial" component={TelaInicial} />
            <Stack.Screen name="Checkin" component={Checkin} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Historico" component={Historico} />
            
        </Stack.Navigator>

     
    </NavigationContainer>
  );
}