import { StatusBar } from "expo-status-bar";
import React, { useState,ImageBackground} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Register({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require("../assets/covid-19.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email or Username"
          placeholderTextColor="#fff"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
        <View style={styles.register}>
            <TouchableOpacity>
                <Text style={styles.register}>Forgot Passssssword?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Register </Text>
            </TouchableOpacity>
        </View>
      
 
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Tracker')}>
        <Text style={styles.loginText} >LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d4059",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#f56a79",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:"white"

  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"white"
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#decdc3",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  register: {

    flexDirection:'row',
    paddingLeft:20,
    paddingRight:20,
    color:'white',
    justifyContent:'flex-start'
     // or 'stretch'
  }
});