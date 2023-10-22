import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import DayItem from './DayItem'


export default function WeatherFor5Days ({data5days}){
const dailyData = data5days.list.filter(reading => reading.dt_txt.includes("12:00:00"))

    return (
      
        <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        Weather in {data5days.city.name} for next 5 days

                    </Text>
                    <View style={styles.container}>
                        {dailyData.map((element) => <DayItem key={element.dt} element={element}/>)}

                    </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        gap: 5,
        flexDirection:"col",
        flexWrap: "nowrap",
        flex:5
//        backgroundColor: "#63468f",
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
    },
    title:{
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        color: "#fff",
        fontSize: 21,
        backgroundColor: "#63468f",
    }


})