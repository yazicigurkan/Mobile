import React from 'react';
import { View, Text, Button, StyleSheet,ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Countries from './Countries'
import Details from './Details'
const Stack = createStackNavigator();

export default function Tracker(){
  return (
      <>
        
        <Stack.Navigator>
            <Stack.Screen name="Countries" component={Countries} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
        </>
  );
};
