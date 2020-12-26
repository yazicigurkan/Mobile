import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './Register'
import Login from './Login'

const Tab = createBottomTabNavigator();


export default function App({route}) {
  return (
      <Tab.Navigator>
        <Tab.Screen name="GİRİŞ" component={Login}/>
        <Tab.Screen name="KAYDOL" component={Register}/>
      </Tab.Navigator>
  );
}