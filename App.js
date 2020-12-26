import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tab from './components/Tab'
import Tracker from './components/Tracker'
import AboutUs from './components/AboutUs'
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
        <Drawer.Navigator >
          <Drawer.Screen name="Giriş" component={Tab}/>
          <Drawer.Screen name="Hakkımızda" component={AboutUs}/>
          <Drawer.Screen name="Tracker" component={Tracker}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
