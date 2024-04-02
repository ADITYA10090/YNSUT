
import { StyleSheet, Text, View,Image,Alert, SafeAreaView, Button,Platform,Dimensions,StatusBar,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Current=() =>{
  return (
    <View style={styles.container}>
      <View style={styles.temp}><Text style={styling}>This is the first</Text></View>
      <View style={{backgroundColor:"#fff", flex:0.1}}/>
      <View style={styles.temp}><Text style={styling}>This is the Second</Text></View>
      <View style={{backgroundColor:"#fff", flex:0.1}}/>
      <View style={styles.temp}><Text style={styling}>This is the Third</Text></View>
      
      <StatusBar style="auto" />
    </View>
  );
}
const styling = {alignItems: 'center',
                  justifyContent: 'center',
                  fontSize:20,
                  fontWeight:"600"
                  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:Platform.OS=== "android"? StatusBar.currentHeight:0,
    fontSize:30,
  },
  temp:{backgroundColor:"#fff",
  flex:1,
  width:'80%',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft:20,
  borderRadius:60,
  fontSize:30,
  color:"orange",
  
  }
});


export default Current;