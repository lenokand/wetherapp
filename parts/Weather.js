import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
//import { weatherOptions2 } from './Options.js';

// Icons
//console.log( weatherOptions2 )

const weatherOptions = {
    Rain:{
        iconName:'weather-lightning-rainy',
        gradient:["#373b44","#4286f4" ]
    },
    Snow:{
        iconName:'weather-snowy',
        gradient:["#2980b9","#6dd5fa","#ffffff"]
    },
    Thunderstorm:{
        iconName:'weather-windy',
        gradient:["#F0F2F0","#000C40"]
    },
    Drizzle:{
        iconName:'md-rainy-outline',
        gradient:['#4c669f', '#3b5998', '#192f6a']
        
    },
    Mist:{
        iconName:'md-rainy-outline',
        gradient:['#7f7fd5', '#86a8e7', '#91eae4']
    },
    Smoke:{
        iconName:'md-rainy-outline',
        gradient:['#7f7fd5', '#86a8e7', '#91eae4']
    },
    Haze:{
        iconName:'md-rainy-outline',
        gradient:['#7f7fd5', '#86a8e7', '#91eae4']
    },
    Dust:{
        iconName:'md-rainy-outline',
        gradient:['#7f7fd5', '#86a8e7', '#91eae4']
    },
    Fog:{
        iconName:'md-rainy-outline',
        gradient:['#7f7fd5', '#86a8e7', '#91eae4']
    },
    Clouds:{
        iconName:'cloud',
        gradient:['#7f7fd5', '#86a8e7', '#91eae4']
    },
    Clear:{
        iconName:'weather-sunny',
        gradient:['#fceabb', '#f8b500']
    },
    Ash:{
        iconName:'cloud',
        gradient:['#fceabb', '#86a8e7', '#91eae4']
    }

}


//export default function Weather ({temp, feels_like, temp_min, temp_max, condition, name, description}){
export default function Weather ({dayData}){

const {data:  {main: {temp, feels_like, temp_min, temp_max}, sys:{sunrise, sunset}, weather, name}} = dayData.dayData;
const condition = weather[0].main;
const description = weather[0].description;

    return (
        <LinearGradient

       colors={weatherOptions[condition].gradient}

        style={styles.container}>
          
                <View style={styles.block}>  
                
                    <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={80} color="white" />
                    <Text style={styles.temp}>  
                        {temp}
                        {'\u00b0'}
                       
                    
                    </Text>
                    <Text style={styles.temp_like}>
                        feels like
                        {feels_like}
                    </Text>
                </View>
                <View>
                    <Text>
                        Min: {temp_min}{'\u00b0'}  Max: {temp_max}{'\u00b0'}
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
            
           
        </LinearGradient>
    

    );
}

// TODO Atmosphere change to main
Weather.propTypes = {
//    temp: propTypes.number.isRequired,
//    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke","Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado", "Clear", "Clouds"]).isRequired
}

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
        // backgroundColor: '#A876B8',
        // width: '100%',
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
            // borderWidth: 2,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            backgroundColor: "#C680BB99",
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 5,
            paddingLeft: 5,
            marginRight: 5,
            // marginTop: 10,
    },
    descriptionText:{

        color: "#fff",
    },


})