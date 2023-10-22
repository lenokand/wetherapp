import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import  { weatherOptions, daysOfWeekLong }  from './Options.js';

export default function Weather ({dayData}){

//console.log(dayData)
const  {main: {temp, feels_like, temp_min, temp_max}, timezone, dt, sys:{sunrise, sunset}, weather, name} = dayData;

const condition = weather[0].main;
const description = weather[0].description;


const weekdayNumber = new Date(dt * 1000).getDay();
///////// sunrise in Unix Timestamp
const sunriseDate = new Date(sunrise * 1000); // Multiply by 1000 to convert from seconds to milliseconds
const sunsetDate = new Date(sunset * 1000);
const adjustedSunrise = new Date(sunriseDate.getTime() + timezone * 1000); // Multiply by 1000 to convert from seconds to milliseconds
const adjustedSunset = new Date(sunsetDate.getTime() + timezone * 1000);

const formatTime = (date) => {
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
};

const sunriseTime = formatTime(adjustedSunrise);
const sunsetTime = formatTime(adjustedSunset);



    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
          
                <View style={styles.block}>
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={80} color="white" />
                    <Text style={styles.temp}>  
                        {Math.round(temp)}
                        {'\u00b0'}

                    </Text>
                    <Text style={styles.temp_like}>
                        feels like: {Math.round(feels_like)}
                    </Text>
                </View>
                <View>
                    <Text>
                        Min: {Math.round(temp_min)}{'\u00b0'}  Max: {Math.round(temp_max)}{'\u00b0'}
                    </Text>
                </View>
                <View style={styles.name}>
                        <Text style={styles.nameText}>
                            {name}
                        </Text>
                </View>
                <View style={styles.info}>


                                    <View style={styles.description}>
                                        <Text style={styles.descriptionText}>
                                            {description}
                                        </Text>
                                    </View>
                                    <Text style={styles.temp}>
                                        {condition}
                                    </Text>
                                </View>
                                <View style={styles.sun}>
                                    <Text style={styles.sunTitle} >Daylight </Text>
                                    <View style={styles.sunWrapper}>
                                        <MaterialCommunityIcons name="weather-sunset-up" size={30} color="white" />
                                        <Text style={styles.sunContent}>
                                            {sunriseTime}
                                        </Text>
                                    </View>
                                    <View style={styles.sunWrapper}>
                                        <MaterialCommunityIcons name="weather-sunset-down" size={30} color="white" />
                                        <Text style={styles.sunContent}>
                                            {sunsetTime}
                                        </Text>
                                    </View>
                                </View>
        </LinearGradient>
    

    );
}

const styles = StyleSheet.create({
    container : {
        flex: 5,
        paddingBottom: 10,
        paddingTop: 10,
//        paddingLeft: 10,
//        paddingRight: 10,
    },
    block:{
        flex:2,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#89729E',
    },
    nameText:{
        fontSize: 32,
    },
    info:{
        paddingTop: 20,
        flex:2,
        flexDirection: "row",
        justifyContent: 'start',
        alignItems: 'flex-start',
     },
    temp:{
        color: "white",
        fontSize: 30,
    },
    temp_like:{
        fontSize: 14,
        marginLeft: 30,
    },
    description:{

            borderColor:"#acadd2",
            borderWidth: 1,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            backgroundColor: "#955fa5ac",
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 10,
            paddingLeft: 5,
            marginRight: 5,
    },
    descriptionText:{
        color: "#fff",
    },
    sun:{
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        alignItems: "center",
        padding: 15,
        flexWrap: "wrap",
        width: "50%",
        borderWidth: 1,
        borderColor: "#fff"
    },
    sunTitle:{
        fontSize: 20,
        width: "100%",
        textAlign: "center",
        color: "#63468f",

    },
    sunContent:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
//        color: "#fff",
        color: "#63468f",
        fontSize: 19,
        fontWeight: "bold"
    },
    sunWrapper:{
        alignItems: "center",
        justifyContent: "center",
    }

})