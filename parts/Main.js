import React from "react";
import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native';
import Weather from "./Weather";
import WeatherFor5Days from "./WeatherFor5Days";

export default function Main ({dayData, data5days}) {

    return (
    <View style={styles.container2}>
            <ScrollView style={styles.container}>
                <View style={styles.purple}>
                  <Text style={styles.text}>
                    Your lovely weather app
                  </Text>
                </View>
               <Weather dayData = {dayData}/>
                <View style={styles.weekly}>

                    <WeatherFor5Days  data5days = {data5days}/>
                </View>
                <StatusBar style="light"/>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container2: {
      flex: 1,
      backgroundColor: "#63468f"

    },
    container: {
      flex: 2,

    },
    text: {
      color:'white',
      fontSize: 22,
    },
    purple: {
     flex: 1,
     backgroundColor: "#63468f",
     alignItems:"flex-start",
     justifyContent:"flex-end",
     paddingBottom: 15,
     paddingTop: 50,
     paddingLeft: 10,
    },
    weekly: {

     flex: 6,
    }
  });

