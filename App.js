import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './parts/Loading';
import Main from './parts/Main';
import * as Location from 'expo-location';
import axios from 'axios';
import APIweather from './parts/config';

//todo
//1 - производительность, при запуске нихоена не показівает

export default  App = () => {

  const [isLoading, setLoading] = useState(true);
  const [location, setLocation] = useState(undefined);
  const [dayData, setDayData] = useState([]);
  const [data5days, setData5days] = useState({});
  const [city, setCity] = useState(''); // Add city state

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

 getWeather = async ({latitude, longitude, cityName}) => {
  try{
            let response;
            let responseWeekly;
                if (cityName) {
                  response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIweather}&units=metric`);
                   responseWeekly = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIweather}&units=metric`);

                } else {
                  response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIweather}&units=metric`);
                  responseWeekly = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon='+ longitude + '&appid='+ APIweather + "&units=metric");

                }

                if (response.status === 404) {
                        // Handle the "city not found" error
                        console.log(' City not found. Please enter a valid city. ');
                        alert(`City ${cityName? cityName:null } not found. Please enter a valid city.`);
                        // You can reset the city state or ask the user for a new city name
                        setCity('');
                      } else {
                        // Successful response, update the data
                        if (cityName) {
                          setCity(cityName);
                        } else {
                          setCity(''); // Reset the city state
                        }

                           const dayData = await response.json();
                           const data5days = await responseWeekly.json();

                           setData5days(data5days);
                           setDayData(dayData);
                           setLoading(false);
                }
               console.log( 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather + '&units=metric');


   }catch(error){
        console.log(error);
    }finally{}
  };


    const onCitySubmit = (cityName) => {
      setCity(cityName);
      console.log(cityName)
      // Fetch weather data based on the manually entered city name
      getWeather({ cityName });
    };
 useEffect(() => {
    getLocation();

  }, []);
  useEffect(()=> {
      if (location){
        getWeather(location);
      }
  },[location])

return (
 isLoading ? <Loading/> : <Main dayData={dayData} data5days={data5days} onCitySubmit={onCitySubmit}  />
);

}

