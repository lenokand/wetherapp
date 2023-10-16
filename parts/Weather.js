import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import  { weatherOptions, daysOfWeekLong }  from './Options.js';

export default function Weather ({dayData}){


const {data:  {main: {temp, feels_like, temp_min, temp_max}, timezone, dt, sys:{sunrise, sunset}, weather, name}} = dayData;

const condition = weather[0].main;
const description = weather[0].description;
// sunrise in Unix Timestamp
const sunriseNormalize = new Date(sunrise  * 1000).toLocaleString('en-US', {weekday: 'short'});
const timezoneNormalize = timezone * 1000;
const hoursRise = new Date(sunrise  * 1000 + timezoneNormalize).getHours();
const minutesRise = new Date(sunrise  * 1000 + timezoneNormalize).getMinutes();


const dayMs = dt * 1000 ;
const weekdayNumber = new Date(dayMs).getDay();

const hoursSet = new Date(sunset  * 1000 + timezoneNormalize).getHours();
const minutesSet = new Date(sunset  * 1000 + timezoneNormalize).getMinutes();
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
                   <View>
                        <Text> {new Date(dayMs).getDate()} {daysOfWeekLong[weekdayNumber]} </Text>
                   </View>

                <View>

                    <Text>sunrise: {hoursRise}:{minutesRise<=9 ? "0"+minutesRise:minutesRise}</Text>
                    <MaterialCommunityIcons name="weather-sunset-up" size={30} color="white" />

                    <Text>sunset: {hoursSet}:{minutesSet<=9 ? "0"+minutesRise:minutesSet} </Text>
                    <MaterialCommunityIcons name="weather-sunset-down" size={30} color="white" />
                </View>
        </LinearGradient>
    

    );
}

// TODO Atmosphere change to main
//Weather.propTypes = {
//    temp: propTypes.number.isRequired,
//    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke","Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado", "Clear", "Clouds"]).isRequired
//}

const styles = StyleSheet.create({
    container : {
        flex: 2,

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
            borderColor: "#fff",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            backgroundColor: "#C680BB99",
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 5,
            paddingLeft: 5,
            marginRight: 5,
    },
    descriptionText:{
        color: "#fff",
    },


})