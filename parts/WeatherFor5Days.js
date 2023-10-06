import React from "react";
import propTypes from "prop-types";
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



export default function WeatherFor5Days ({data5days}){
    return (
      
        <View>
            <Text>
             {/* {data5days.dt_txt} */
             data5days.data.list.forEach((element, i) => {
                console.log(i, element.dt_txt)
               })
             }
    
            </Text>
        </View>

    );
}
