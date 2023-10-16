import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './parts/Loading';
import Main from './parts/Main';
import * as Location from 'expo-location';
import axios from 'axios';
import APIweather from './parts/config';


export default  class extends  React.Component {
  state = {
    isLoading: true,

  }

  getLocation = async () => {
    try{
      await Location.requestForegroundPermissionsAsync();
      let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude);
    } catch(error){
      console.log(error);
      Alert.alert("very sad: " +  error);
    }
     console.log( this.state.isLoading, " getLocation");
  }

 getWeather = async (latitude, longitude) => {
  try{
            const dayData = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather + '&units=metric');
            const data5days = await axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon='+ longitude + '&appid='+ APIweather + "&units=metric");

            this.setState({
                isLoading: false,
                dayData: dayData,
                data5days: data5days,
              })
console.log( this.state.isLoading, " getWeather ok");
   }catch(error){
        console.log(error);
        console.log( this.state.isLoading, " getWeather error");
   }
        console.log( this.state.isLoading, " getWeather");
  };

  componentDidMount(){
    this.getLocation();
    console.log( this.state.isLoading, " componentDidMount");
  }

  render() {
    const {isLoading, dayData, data5days} = this.state;
    return (
            isLoading ? <Loading/> : <Main dayData={dayData} data5days={data5days}/>
    );
  }
}