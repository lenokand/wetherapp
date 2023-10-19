import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './parts/Loading';
import Main from './parts/Main';
import * as Location from 'expo-location';
import axios from 'axios';
import APIweather from './parts/config';

//todo
//1 - погода на неделю  должна начинаться с завтрашней даты (чекнуть что приходит с апи на 5 дней, возмножно так и приходит)
//2 - производительность, при запуске нихоена не показівает
//3 - проверить  часовые пояса
export default  App = () => {

  const [isLoading, setLoading] = useState(true);
  const [location, setLocation] = useState(undefined);
  const [dayData, setDayData] = useState([]);
  const [data5days, setData5days] = useState({});

  getLocation = async () => {

    try{
      await Location.requestForegroundPermissionsAsync();
      let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      setLocation({latitude, longitude});
    } catch(error){
      console.log(error);
      Alert.alert("very sad: " +  error);
    }
  }

 getWeather = async ({latitude, longitude}) => {
  try{

               const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather + '&units=metric');
               const dayData = await response.json();
               const responseWeekly = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon='+ longitude + '&appid='+ APIweather + "&units=metric");
               const data5days = await responseWeekly.json();
               setData5days(data5days);
               setDayData(dayData);
               setLoading(false);
               console.log( 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather + '&units=metric');


   }catch(error){
        console.log(error);
//        console.log( isLoading, " getWeather error");
    }finally{
//          console.log( isLoading, " getWeather  finally");
        }
//        console.log( isLoading, " getWeather");
  };
 useEffect(() => {
    getLocation();
//    console.log(isLoading, " useEffect");
  }, []);
  useEffect(()=> {
      if (location){
        getWeather(location);
      }
  },[location])

return (
 isLoading ? <Loading/> : <Main dayData={dayData} data5days={data5days}/>
);

}

