import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import  { weatherOptions, daysOfWeekLong }  from './Options.js';


export default function DayDetails({ route }) {
 const { dayItemData } = route.params; // Extract data from navigation parameters
 const condition = dayItemData.weather[0].main;
 const description = dayItemData.weather[0].description;

console.log(dayItemData)
  return (
     <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
      <Text>Detailed information</Text>
      <Text>{dayItemData.main.feels_like}</Text>
     </LinearGradient>
  );
}

const styles = new StyleSheet.create({
    container : {
        flex: 5,
        paddingBottom: 10,
        paddingTop: 10,

    },
})