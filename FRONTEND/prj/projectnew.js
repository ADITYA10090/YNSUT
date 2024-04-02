
import { StyleSheet, Text, View,Image,Alert, SafeAreaView, Button,Platform,Dimensions,StatusBar,FlatList} from 'react-native';

export default function Att() {
  return (
    <View style={styles.container}>
      <View style={styles.temp}><Text style={styles.styling}>This is the first</Text></View>
      <View style={{backgroundColor:"#fff", flex:0.1}}/>
      <View style={styles.temp}><Text style={styles.styling}>This is the Second</Text></View>
      <View style={{backgroundColor:"#fff", flex:0.1}}/>
      <View style={styles.temp}><Text style={styles.styling}>This is the Third</Text></View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    paddingLeft:20,
    // justifyContent: 'center',
    paddingTop:Platform.OS=== "android"? StatusBar.currentHeight:0,
    fontSize:48,
  },
  temp:{backgroundColor:"#F2F2F2",
  flex:0.23,
  width:'80%',
  alignItems: 'left',
  justifyContent: 'center',
  paddingLeft:20,
  borderRadius:60,
  fontSize:30,
  color:"orange",
  borderWidth:1,
  borderColor:"dodgerblue",
  textAlign:'left',
  
  },
  styling:{alignItems: 'center',
  justifyContent: 'center',
  fontSize:30,
  fontWeight:"300",
  
}
});
