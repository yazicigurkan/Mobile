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
    <View style={styles.container}>
      <Text>Detay</Text>
      <Text>{route.params?.ulke}</Text>
      <ScrollView persistentScrollbar={true}>
      {
          ulke.map(detay=>
            <View style={{display:'flex',flexDirection:"row",justifyContent:"space-between",width:Width,paddingLeft:20,paddingRight:20}}>
                <Text >
                    {String(detay.Date).substring(0,10)}
                </Text>
                <Text>
                    {detay.Confirmed}
                </Text>
            </View>
        )
      }
      </ScrollView>
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});