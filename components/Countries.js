import React, { useState ,useEffect} from 'react';
import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import axios from 'axios'
export default function Countries({navigation}){
    const [ulkeler,setUlkeler]=useState([]);
    useEffect(()=>{
        axios.get("https://api.covid19api.com/countries")
        .then(res=> setUlkeler(res.data) )
        .catch(err=> console.log(err))
    },[])
  return (

    <ScrollView persistentScrollbar={true}>
            <View style={styles.container}>
                <Text>Ulke Listesi</Text>
                {
                    ulkeler.map((ulke,index) => 
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('Details',{ulke:ulke.Country})}>
                            <Text style={{margin:10}}>{ulke.Country}</Text>
                        </TouchableOpacity>
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
    alignItems: 'center'
  }
});