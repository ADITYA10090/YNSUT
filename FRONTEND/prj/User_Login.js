import React from "react";
import { StyleSheet,Text,View,TextInput,Button } from "react-native";
import { useState } from "react";
import * as SecureStore from 'expo-secure-store'


 const Login=({navigation})=>{
    const [key,setKey]=useState();
    const [value,setValue]=useState();
    const saveSecureValue=async()=>{
        await SecureStore.setItemAsync(key,value,{
            requireAuthentication:true,
            authenticationPrompt:"Permission To Save This Info",
            
        });
        setKey();
        setValue();
    }

    const retrieveSecureValue=async()=>{
        let result=await SecureStore.getItemAsync(key);
        console.log(result);
        setValue(result);
    }

    const Log=async()=>{
        let res=await SecureStore.getItemAsync(key);
        if (value==res){
            navigation.navigate("OTPpage")
        }
    }

    return(
        <View style={styles.containter}>
            <TextInput value={key} onChangeText={setKey} placeholder="Enter Username" style={styles.textfield}></TextInput>
            <TextInput value={value} onChangeText={setValue} placeholder="Password" style={styles.textfield}></TextInput>
            <Button title="Save Username and Password" onPress={saveSecureValue}></Button>
            <View style={{margin:30}}></View>
            <Button title="Login" onPress={Log} ></Button>
        </View>
    )
    }
    const styles=StyleSheet.create({
        containter:{
            flex:1,
            justifyContent:'center',
            alignContent:'center',
        },
        textfield:{
            flex:0.1,
            borderWidth:3,
            borderColor:'grey',
            margin:30,
            padding:12,
        }
    })
    export default Login;
