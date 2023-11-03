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
               style={styles.item}>

               <View style={styles.day}>
                   <Text style={styles.text}> {daysOfWeek[weekdayNumber]} {new Date(dayMs).getDate()}  </Text>
               </View>
                <View style={styles.conditions}>
                   <Text style={styles.text, styles.width}> {element.weather[0].main}</Text>
                   <Text style={styles.text, styles.width}> {Math.round(element.main.feels_like)}{'\u00b0'}</Text>
                   <MaterialCommunityIcons style={styles.width} name={weatherOptions[condition].iconName} size={30} color="white" />
               </View>
   </LinearGradient>
);
}

const styles = StyleSheet.create({
    item:{
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 70,
    },
    container:{
            flex: 2,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",

    },
    day:{
        borderRadius: 20,
        overflow:"hidden",
        borderWidth: 1,
        borderColor:"#acadd2",
        height: "100%",
        width: 100,
        alignItems:"center",
        justifyContent: "center",
        borderLeftWidth: 0,
        borderBottomStartRadius: 0,
        borderTopStartRadius: 0,
        backgroundColor:"#acadd261",
    },
    conditions:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "50%",
        paddingRight: 15,
    },
    text:{
        fontSize: 20,
    },
    width:{
        width: "40%",
        height: "100%",
        fontSize: 21,


    }

})