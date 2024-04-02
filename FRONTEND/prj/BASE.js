import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet,Button } from 'react-native';
import OTPInput from './prj/OTPInput.js';
import AttendanceComp from './prj/projectnew.js';

const Stack=createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="Login" component={OTPInput}/>
        <Stack.Screen name="Attendance" component={AttendanceComp}/>
       </Stack.Navigator>
    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  butt:{
    marginTop:10,
  }
});

export default App;
