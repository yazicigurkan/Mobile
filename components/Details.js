import React, { useState ,useEffect} from 'react';
import { View, Text, Button, StyleSheet,ScrollView,Dimensions} from 'react-native';
import axios from 'axios'
const Width=Dimensions.get("window").width
export default function Details({route}){
    const [ulke,setUlke]=useState([]);
    useEffect(()=>{
        axios.get(`https://api.covid19api.com/total/country/${route.params?.ulke}`)
        .then(res=> setUlke(res.data) )
        .catch(err=> console.log(err))
    },[])
  return (
    <ScrollView persistentScrollbar={true}>
    <View style={styles.container}>
      <Text style={styles.Vaka}>VAKA SAYILARI </Text>
      </View>
      <View style={styles.UlkeIsmıContainer}>
      <Text style={styles.UlkeIsmı}>{route.params?.ulke}</Text>
      </View>
      <View style={styles.UlkeDetayContainer}>
      {
          ulke.map(detay=>
            <View style={{display:'flex',flexDirection:"row",justifyContent:"space-between",width:Width,paddingLeft:20,paddingRight:20}}>
                <Text style={styles.Tarih} >
                    {String(detay.Date).substring(0,10)}
                </Text>
                <Text>
                    {detay.Confirmed}
                </Text>
            </View>
        )
      }
     
    </View>
    </ScrollView>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'grey'

  },
  UlkeIsmıContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FDFD96'
  },
  Tarih:{
      margin: 10
  },
  UlkeIsmı:{
    fontSize:20,
    backgroundColor:'#FDFD96'
  },
  Vaka:{
    fontSize:30
  }
});