// src/pages/Second.js
import React from 'react';
import { Button, View } from 'react-native';

export default function Second({ navigation }) {
  return (
    <View>
      <Button
        title="Go back to First"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}