import React from "react";
import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Weather from "./Weather";
import WeatherFor5Days from "./WeatherFor5Days";
 
export default function Main ({temp, condition, description, data5days}) {
    return (
    <View style={styles.container}>
        <View style={styles.purple}>
          <Text style={styles.text} > Your lovely weather app</Text>
        </View>
        <View style={styles.black}>
          {/* <Text style={styles.text} >Hi </Text>
          <Text style={styles.text} >Powercoders team</Text> */}
           <Weather temp={temp} condition={condition} description={description}/>
           

        

         
          <Text>
            {data5days.data.city.name}
          </Text>
        
        </View>

       
        
        <StatusBar style="light" />
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection:'row',
      // backgroundColor: '#fff',
      
  
    },
    text: {
      color:'white',
      fontSize: 22,
    },
    purple: {
      backgroundColor: "purple",
     flex: 1,
     alignItems:"flex-start",
     justifyContent:"flex-end",
     paddingBottom: 15
    },
    black: {
      backgroundColor: "white",
     flex: 6,
    //  alignItems: 'center',
      // justifyContent: 'center',
    }
  });
