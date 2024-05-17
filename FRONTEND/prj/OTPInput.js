import axios from 'axios';
import React, { useState, useRef,useEffect } from 'react';
import { View, TextInput, StyleSheet,Button,Image, Platform } from 'react-native';
import * as FileSystem from 'expo-file-system'
// import asyncstorage from "@react-native"
let jsonData;
const OTPInput = ({ length,navigation }) => {
  length=5;
  const [otp, setOTP] = useState(Array(length).fill(''));
  const[dummy,setDummy]=useState(null);
  const otpInputs = useRef([]);

  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (index < length - 1 && value !== '') {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && index > 0 && otp[index] === '') {
      otpInputs.current[index - 1].focus();
    }
    
  };
  // gostart();
  const [imagesrc, setImagesrc] = useState(null);

  async function getCaptcha (){
      console.log("hello");
      try {
          const linkresponse = await axios.get("http://192.168.1.7:5000/getcaptcha")
          const src='data:image/jpeg;base64,' + linkresponse.data;
          // setImagesrc(null);
          setImagesrc(src);
          // setImagesrc(src);
          // console.log(src);
      } catch (error) {
          console.log(error);
      }
    };

  async function OtpSubmit(){
    console.log(otp);
    await axios.post("http://192.168.1.7:5000/sendcaptcha",{otp});
    navigation.navigate("Attendance")

  }
    

  return (
    <View style={styles.container}>
      {imagesrc && (
        <Image
          source={{ uri: imagesrc  } }
          style={{ width: 140, height: 50,marginBottom:50 }}
          alt="Supportive"
        />
      )}  
        <View style={styles.temp}>
        
        {Array(length)
        .fill()
        .map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={otp[index]}
            onChangeText={(value) => handleChange(index, value)}
            onKeyPress={({ nativeEvent: { key } }) =>
              handleKeyPress(index, key)
            }
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (otpInputs.current[index] = ref)}
          />
        ))}
        </View>
        <View style={{margin:20}}></View>
        <Button title="Get Attendance" onPress={OtpSubmit}></Button>
        <View style={{margin:20}}></View>
        <Button title="Get Captcha" onPress={getCaptcha} ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
    backgroundColor:"#fff"
  },
  temp:{
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    // borderWidth: 1,
    // borderColor: 'black',
    borderRadius: 30,
    backgroundColor:'#F2F2F2',
    // paddingHorizontal: 10,
    marginHorizontal: 5,
    marginBottom:30,
    width: 60,
    height:60,
    textAlign: 'center',
  },
});

export default OTPInput;
