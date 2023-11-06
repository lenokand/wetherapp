import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import  { weatherOptions, daysOfWeekLong, monthNames }  from './Options.js';


export default function DayDetails({ route }) {
 const { dayItemData } = route.params; //  Extract data from navigation parameters
 const condition = dayItemData.weather[0].main;
 const description = dayItemData.weather[0].description;

console.log(dayItemData)
const dayMs = dayItemData.dt * 1000 ;
const weekdayNumber = new Date(dayMs).getDay();

const arrowRotation = {
    transform: [{ rotate: `${dayItemData.wind.deg}deg` }]
  };
  return (
     <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
          <Text style={styles.day}>
            {daysOfWeekLong[weekdayNumber]},  {new Date(dayMs).getDate()} {monthNames[new Date(dayMs).getMonth()]}
          </Text>
          <MaterialCommunityIcons style={styles.icon} name={weatherOptions[condition].iconName} size={90} color="white" />

      <View style={styles.wrapper}>

                    <View style={styles.info}>
                         <View style={styles.description}>
                            <Text style={styles.text, styles.width, styles.descriptionText}> {dayItemData.weather[0].description}</Text>
                         </View>
                         <Text style={styles.text, styles.width, styles.main}> {dayItemData.weather[0].main}</Text>
                    </View>

                        <View style={styles.temp}>
                            <Text style={styles.feels_like}>Avarage temp {Math.round(dayItemData.main.feels_like)}{'\u00b0'}</Text>

                            <Text style={ styles.temp_m}> temp min  {Math.round(dayItemData.main.temp_min)} {'\u00b0'}</Text>
                            <Text style={ styles.temp_m}> temp max  {Math.round(dayItemData.main.temp_max)} {'\u00b0'}</Text>
                        </View>
                        <Text style={styles.advice}>{weatherOptions[condition].advice}</Text>
                        <View style={styles.additional_info}>
                             <Text style={styles.text}>Sea level  {dayItemData.main.sea_level}</Text>

                             <Text style={styles.text}>Humidity: {dayItemData.main.humidity}%</Text>
                             <Text style={styles.text}>Visibility: {dayItemData.visibility} meters</Text>
                             <Text style={styles.text}>Probability of Precipitation: {dayItemData.pop}</Text>
                             <Text style={styles.text}>Pressure: {dayItemData.main.pressure} hPa</Text>
                             <Text style={styles.text}>Cloud Coverage: {dayItemData.clouds.all}%</Text>
                             <Text style={styles.text}>Wind Speed: {dayItemData.wind.speed} m/s</Text>
                            <View style={styles.windDirection}>
                             <Text style={styles.windDirectionText}>Wind Direction: {dayItemData.wind.deg}{'\u00b0'}

                             </Text>
                             <MaterialCommunityIcons
                                       style={[arrowRotation]} // Applying the rotation style
                                       name="arrow-up-circle"
                                       size={35}
                                       color="#fff"
                                     />
                            </View>
                        </View>


      </View>


     </LinearGradient>
  );
}

const styles = new StyleSheet.create({
    wrapper:{
    flexDirection:"column",
    flex: 2
    },
    container : {
        flex: 5,
        paddingBottom: 10,
        paddingTop: 10
    },
    info:{
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: 'start',
            alignItems: 'center',
         },
    description:{

                       borderColor:"#7b5a94",
                       borderWidth: 1,
                       borderTopRightRadius: 8,
                       borderBottomRightRadius: 8,
                       backgroundColor: "#7b5a9458",
                       paddingTop: 10,
                       paddingBottom: 10,
                       paddingRight: 10,
                       paddingLeft: 5,
                       marginRight: 5,
               },
    descriptionText:{
                   color: "#fff",
               },
    main:{
        color: "#fff",
        fontSize: 25,
        },
    day:{
                color: "#fff",
                fontSize: 18,
                fontWeight: '700',
                paddingLeft: 10
               },
    icon:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 0,

    },
    temp:{
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor:"#7b5a9458",
        borderWidth: 1,
        borderColor: "#7b5a94",
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 50,
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"

    },
    temp_m:{
        color:"#fff",
        fontWeight: '600',
        width: "50%",
        textAlign: "center"
    },
    feels_like:{
         color: "#fff",
         width: "100%",
         textAlign: "center",
         fontWeight: '700',
         borderColor: "#7b5a94",
         borderBottomWidth: 1,
         fontSize: 20,
         paddingBottom: 8
    },
    advice:{
        color: "#fff",
         padding: 15,
         textAlign: "center",
         borderColor: "#7b5a94",
         borderWidth: 1,
         borderRadius: 50,
         backgroundColor:"#63468f",
         fontSize: 21,
         marginTop: 20

    },
    additional_info:{
        backgroundColor:"#7b5a9458",
        borderWidth: 1,
        borderColor: "#7b5a94",
        marginTop: 20,
        flexGrow: 2,
        justifyContent: "center",
        gap: 8,
        paddingLeft: 10,
        paddingRight: 10

    },
    text:{
        color: "#fff",
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: "#63468f"
    },
    windDirection: {
//                      backgroundColor: '#7b5a9458',
                      borderBottomWidth: 1,
                      borderColor: '#63468f',

                      alignItems: 'center',
                      justifyContent: 'start',

                      flexDirection: "row"
                    },
    windDirectionText:{
         color: "#fff",
         fontSize: 18,
         marginRight: 5
    }

})