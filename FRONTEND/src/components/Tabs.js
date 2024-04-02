import React from "react"
import Current from "./workable.js"
import Current2 from "./workable2.js"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Feather} from '@expo/vector-icons'

const Tab= createBottomTabNavigator()

const Tabs= ()=>{
    return(
        <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'grey',
    }}>
      <Tab.Screen name={"Curr"} component={Current} 
      options={{
        tabBarIcon:({focused})=>{
          <Feather
            name={"droplet"}
            size={25}
            color={focused?'tomato':'black'}/>
        }
      }}/>
      <Tab.Screen name={"Curr2"} component={Current2}
      options={{
        tabBarIcon:({focused})=>{
          <Feather
            name={"clock"}
            size={25}
            color={focused?'tomato':'black'}/>
        }
      }}/>
    </Tab.Navigator>
    )
}

export default Tabs