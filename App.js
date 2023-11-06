import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './parts/Loading';
import Main from './parts/Main';
import * as Location from 'expo-location';
import axios from 'axios';
import APIweather from './parts/config';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DayDetails from './parts/DayDetails';
import MapScreen from './parts/MapScreen';
const Stack = createStackNavigator();
//todo
//1 - производительность, при запуске

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
                        console.log('City not found. Please enter a valid city. ');
                        alert(`City ${cityName? cityName:null } not found. Please enter a valid city.`);
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
               console.log( ' https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather + '&units=metric');


   }catch(error){
        console.log(error);
    }finally{}
  };


    const onCitySubmit = (cityName) => {

                if(cityName){//  Fetch weather data based on the manually entered city name
                            setCity(cityName);
                            getWeather({ cityName });
                            console.log(cityName, " cityName ")

                        }



    };
    const onMapSubmit = (mapCoordinates) =>{
                            if(mapCoordinates != {}){

                                 console.log(mapCoordinates, "mapCoordinates App ")
                                 const { latitude, longitude } = mapCoordinates;
                                 setLocation({latitude, longitude});
                                 getWeather({latitude, longitude});
                                };
    }

 useEffect(() => {
 console.log("useEffect")

    getLocation();

  }, []);
  useEffect(()=> {
        console.log(" useEffect2")

      if (location){
        getWeather(location);
      }
  },[location])



return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" options={{ headerShown: false }} >
          {() => (
            isLoading ? <Loading /> : <Main dayData={dayData} data5days={data5days} onCitySubmit={onCitySubmit} onMapSubmit={onMapSubmit} />
          )}
        </Stack.Screen>
        <Stack.Screen name="DayDetails" component={DayDetails}
         options={{ headerStyle: { backgroundColor: '#63468f' }, headerTintColor: '#fff', headerTitleStyle: { color: '#fff' } }} />
         <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>

);

}

