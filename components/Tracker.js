import React from 'react';
import { View, Text, Button, StyleSheet,ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Countries from './Countries'
import Details from './Details'
import Login from './Login'
const Stack = createStackNavigator();

export default function Tracker(){
  return (
      <>
        
        <Stack.Navigator>
            <Stack.Screen name="Ülkeler" component={Countries} />
            <Stack.Screen name="Detay" component={Details} />
        </Stack.Navigator>
        </>
  );
};
