// src/pages/First.js
import React from 'react';
import { Button, View } from 'react-native';

export default function First({ navigation }) {
  return (
    <View>
      <Button
        className='btn btn-primary'
        title="TelaInicial"
        onPress={() => navigation.navigate('TelaInicial')}
      />
    </View>
  );
}
