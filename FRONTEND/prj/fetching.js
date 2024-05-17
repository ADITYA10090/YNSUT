import axios from 'axios'
import React,{useState,useEffect, Fragment} from "react"
import { Text,Button, View,StyleSheet,ActivityIndicator,TextInput,Image } from "react-native"
import * as Progress from 'react-native-progress';
const AttendanceComp = () => {
  let [attendanceData0, setAttendanceData0] = useState(null);
  let [attendanceData1, setAttendanceData1] = useState(null);
  let [attendanceData2, setAttendanceData2] = useState(null);
  let [attendanceData3, setAttendanceData3] = useState(null);
  let [attendanceData4, setAttendanceData4] = useState(null);
  let [attendanceData5, setAttendanceData5] = useState(null);
  let [loading, setLoading] = useState(true);
useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.7:5000/attendance');
      // const res2 = await axios.get('http://192.168.105.71:5000/captchareq');
      
        // const jsonlink=JSON.stringify(res2);
        // console.log(res2);
        const jsonString =JSON.stringify(response)
        const jsonData = JSON.parse(jsonString);
        const dataArray = jsonData.data.data;
        // const count=dataArray[0]
        // console.log(dataArray);
        setAttendanceData0(dataArray[0]);
        setAttendanceData1(dataArray[1]);
        setAttendanceData2(dataArray[2]);
        setAttendanceData3(dataArray[3]);
        setAttendanceData4(dataArray[4]);
        setAttendanceData5(dataArray[5]);
        setLoading(false);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
      setLoading(false);
    }
  };
  fetchData();
  return () => {
    // Cleanup code (e.g., unsubscribe from a WebSocket or cancel a timer)
  };

},[])
    


  

  return (
    <Fragment>
      <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="" color="#0000ff" />
      ) : (
        <View style={styles.boxes}>
          <Image source={{uri:'https://192.168.1.7:5000/captchareq'}}/>
          {attendanceData0 ? (
            <>
             <Text style={{margin:10,fontWeight:'bold'}} >{`Attendance in Yoga is ${attendanceData0}`}</Text>
             <Progress.Bar style={{margin:10}} progress={(Number(attendanceData0=attendanceData0.replace("%","")))/100.0} width={200} color='rgba(14, 200, 74, 1)' />
            </>
           
            
          ) : (
            <Text>No data available</Text>
          )}
          
          {attendanceData1 ? (
            <>
            <Text style={{margin:10,fontWeight:'bold'}} >{`Attendance in ADC is ${attendanceData1}`}</Text>
            <Progress.Bar style={{margin:10}} progress={(Number(attendanceData1=attendanceData1.replace("%","")))/100.0} width={200} color='rgba(14, 200, 74, 1)' />
            </>
            
          ) : (
            <Text>No data available</Text>
          )}
          {attendanceData2 ? (
           <>
           <Text style={{margin:10,fontWeight:'bold'}} >{`Attendance in OS is ${attendanceData2}`}</Text>
           <Progress.Bar style={{margin:10}} progress={(Number(attendanceData2=attendanceData2.replace("%","")))/100.0} width={200} color='rgba(14, 200, 74, 1)' />
           </>
          ) : (
            <Text>No data available</Text>
          )}
          {attendanceData3 ? (
            <>
            <Text style={{margin:10,fontWeight:'bold'}} >{`Attendance in DAA is ${attendanceData3}`}</Text>
            <Progress.Bar style={{margin:10}} progress={(Number(attendanceData3=attendanceData3.replace("%","")))/100.0} width={200} color='rgba(14, 200, 74, 1)'/>
            </>
          ) : (
            <Text>No data available</Text>
          )}
          {attendanceData4 ? (
            <>
            <Text style={{margin:10,fontWeight:'bold'}} >{`Attendance in SE is ${attendanceData4}`}</Text>
            <Progress.Bar style={{margin:10}} progress={(Number(attendanceData4=attendanceData4.replace("%","")))/100.0} width={200} color='rgba(14, 200, 74, 1)'/>
            </>
          ) : (
            <Text>No data available</Text>
          )}
          {attendanceData5 ? (
            <>
            <Text style={{margin:10,fontWeight:'bold'}} >{`Attendance in CN is ${attendanceData5}`}</Text>
            <Progress.Bar style={{margin:10}} progress={(Number(attendanceData5=attendanceData5.replace("%","")))/100.0} width={200} color='rgba(14, 200, 74, 1)' />
            </>
          ) : (
            <Text>No data available</Text>
          )}
          {/* <Button title='Get Attendance values' onPress={fetchData}></Button> */}
        </View>
        
        
      )}
    </View>
    </Fragment>
    
  );
};

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:'#fff',
    
  },
  boxes:{
    flex:0.7,
    width:'80%',
    paddingTop:15,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:"center",
    borderRadius:50,
    borderWidth:1.7,
    paddingLeft:10,
    borderColor:'dodgerblue',
    paddingBottom:15,
    marginBottom:10,
    

  },
})

export default AttendanceComp;
