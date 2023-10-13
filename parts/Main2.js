import React from "react";
import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Weather from "./Weather";
import Weather2 from "./Weather2";
//import WeatherFor5Days from "./WeatherFor5Days";

export default function Main2 (dayData) {

//console.log(dayData)
//console.log("dayData Main2")


    return (
    <View style={styles.container}>
        <View style={styles.purple}>
          <Text style={styles.text}>
            Your lovely weather app
          </Text>
        </View>
        <View style={styles.black}>
            <Weather2 dayData={dayData} />
            <Text>

            </Text>
      //            <WeatherFor5Days data5days = {data5days} />
        </View>

        <StatusBar style="light" />
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
  
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
    }
  });
