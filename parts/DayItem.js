import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {daysOfWeek} from './Options.js';

export default function DayItem ({element}){

const dayMs = element.dt * 1000 ;

const weekdayNumber = new Date(dayMs).getDay();
//console.log(new Date(dayMs).getDate(), weekdayNumber);
return (

    <View style={styles.column}>
        <View>
            <Text> {daysOfWeek[weekdayNumber]} {new Date(dayMs).getDate()} </Text>
        </View>
        <Text> {Math.round(element.main.feels_like)}{'\u00b0'}</Text>
    </View>
);
}

const styles = StyleSheet.create({
    column:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

})