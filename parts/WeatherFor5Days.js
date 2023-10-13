import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function WeatherFor5Days ({data5days}){
//const dailyData = data5days.data.list.filter(reading => reading.dt_txt.includes("15:00:00"))

//const ms = dailyData[0].dt * 1000 ;
//const weekdayName = new Date(ms).toLocaleString('en-US', {weekday: 'short'});
//const newww = new Date(ms).getDate();
//console.log(weekdayName, dailyData[0].dt_txt, newww)

    return (
      
        <View style={styles.container}>

            
            <Text> 
                Weather in {data5days.data.city.name} for 5 days
             {/* {data5days.dt_txt} */

              dailyData.forEach((element, i) => {
//              console.log(element.dt)
//                 console.log(Math.round(element.main.temp))
//                 console.log(Math.round(element.main.temp))
                })
             }
    
            </Text>

        </View>

    );
}


const styles = StyleSheet.create({
    container:{
        flex:2,
        flexDirection:"row",
        flexWrap: "nowrap",
        backgroundColor: "#fff"


    },
    element:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderBlockColor: "#000",
        borderWidth: 1,
    }


})