import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import DayItem from './DayItem'


export default function WeatherFor5Days ({data5days}){

const dailyData = data5days.data.list.filter(reading => reading.dt_txt.includes("15:00:00"))

//const ms = dailyData[0].dt * 1000 ;
//const weekdayName = new Date(ms).toLocaleString('en-US', {weekday: 'short'});
//const newww = new Date(ms).getDate();
//console.log(weekdayName, dailyData[0].dt_txt, newww)

    return (
      
        <View style={styles.wrapper}>
            <Text> 
                Weather in {data5days.data.city.name} for next 5 days

            </Text>
            <View style={styles.container}>
                {
                    dailyData.map((element) => <DayItem key={element.dt} element={element}/>)
                }

            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container:{

        flexDirection:"row",
        flexWrap: "nowrap",
        backgroundColor: "#fff",
//        paddingTop: "30",

    },
     wrapper:{
              flex:2,

          },
    element:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderBlockColor: "#000",
        borderWidth: 1,
    }


})