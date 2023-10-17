import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {weatherOptions, daysOfWeek} from './Options.js';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons} from '@expo/vector-icons';

export default function DayItem ({element}){

const dayMs = element.dt * 1000 ;
const weekdayNumber = new Date(dayMs).getDay();
const condition = element.weather[0].main;

return (
    <LinearGradient
             colors={weatherOptions[condition].gradient}
            style={styles.column}>

            <View>
                <Text> {daysOfWeek[weekdayNumber]} {new Date(dayMs).getDate()} </Text>
            </View>
             <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={30} color="white" />
            <Text> {Math.round(element.main.feels_like)}{'\u00b0'}</Text>

             <Text> {element.weather[0].main}</Text>

    </LinearGradient>
);
}

const styles = StyleSheet.create({
    column:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container:{
    }
})