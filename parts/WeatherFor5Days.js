import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DayItem from './DayItem'
import DayDetails from './DayDetails'

import { useNavigation } from '@react-navigation/native';

export default function WeatherFor5Days ({data5days}){
const dailyData = data5days.list.filter(reading => reading.dt_txt.includes("12:00:00"))

const navigation = useNavigation();
 const handleDayItemPress = (dayItem) => {
    navigation.navigate('DayDetails', { dayItemData: dayItem });
  };

    return (
      
        <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        Weather in {data5days.city.name} for next 5 days

                    </Text>
                    <View style={styles.container}>
                        {
                            dailyData.map((element) =>
                                    (<TouchableOpacity
                                        key={element.dt}
                                        onPress={() => handleDayItemPress(element)}>
                                            <DayItem element={element} />
                                    </TouchableOpacity>)
                                    )
                                   }

                    </View>
                   { /*<View style={styles.container}>
                                            {data5days.list.map((element) =>

                                                      element.dt_txt.includes("12:00:00") ? (
                                                        <TouchableOpacity
                                                            key={element.dt}
                                                            onPress={() => handleDayItemPress(element)}>
                                                                <DayItem element={element} />
                                                        </TouchableOpacity>
                                                        ): (null)
                                                       )}

                                        </View> */}
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        gap: 5,
        flexDirection:"col",
        flexWrap: "nowrap",
        flex:5,
        paddingBottom:5

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