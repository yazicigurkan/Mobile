import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet, ScrollView, Image, TextInput,Linking } from 'react-native';


export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Emre AYDIN</Text>
      <Text style={{ color: 'blue' }}
        onPress={() => Linking.openURL('https://www.linkedin.com/in/emre-ayd%C4%B1n-9813411b3/')}>
        LinkedIn Profili
      </Text>
      <Text>Ömer SAĞLAMLIK</Text>
      <Text style={{ color: 'blue' }}
        onPress={() => Linking.openURL('https://www.linkedin.com/in/%C3%B6mer-sa%C4%9Flaml%C4%B1k-7222861aa/')}>
        LinkedIn Profili
      </Text>
      <Text>ADEM GÜRKAN YAZICI</Text>
      <Text style={{ color: 'blue' }}
        onPress={() => Linking.openURL('https://www.linkedin.com/in/g%C3%BCrkan-yaz%C4%B1c%C4%B1-b7ba8a172/')}>
        LinkedIn Profili
      </Text>
    </View>
  );
}

