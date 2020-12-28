import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios'
import { color } from 'react-native-reanimated';
export default function Countries({ navigation }) {
  const [ulkeler, setUlkeler] = useState([]);
  useEffect(() => {
    axios.get("https://api.covid19api.com/countries")
      .then(res => setUlkeler(res.data))
      .catch(err => console.log(err))
  }, [])

  function compare(a, b) {
    if (a.Country < b.Country) {
      return -1;
    }
    if (a.Country > b.Country) {
      return 1;
    }
    return 0;
  }

  ulkeler.sort(compare);

  return (
    <ScrollView persistentScrollbar={true}>
      <View style={styles.container}>
      </View>
      <View style={styles.AltYazı}>
        {
          ulkeler.map((ulke, index) =>
            <Button
              key={index} onPress={() => navigation.navigate('Detay', { ulke: ulke.Country })}
              title={ulke.Country}
            />
          )
        }
      </View>
    </ScrollView >
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'

  },
  UstYazi: {
    fontWeight: 'bold',
    fontSize: 30,

  },
  Ulkeler: {
    margin: 10,
    backgroundColor: 'cyan',
    fontSize: 18
  },
  AltYazı: {
    justifyContent: 'center',
    margin: 5,
    backgroundColor: 'white',
    padding: 15
  }

});