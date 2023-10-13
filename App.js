import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './parts/Loading';
import Main from './parts/Main';
import Main2 from './parts/Main2';
import * as Location from 'expo-location';
import axios from 'axios';

const APIweather = "7347e744f33c5e0d42330920a8d9e4df";

export default  class extends  React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
  try{
//            const {data:  {main: {temp, feels_like, temp_min, temp_max}, sys:{sunrise, sunset}, weather, name}} = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather+'&units=metric')
            const dayData = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather+'&units=metric')
//             console.log(dayData)

            this.setState({
                isLoading: false,
                dayData: dayData,
//                temp: temp,
//                temp_min: temp_min, 
//                temp_max: temp_max,
//                feels_like: feels_like,
//                condition: weather[0].main,
//                description: weather[0].description,
//                name: name,
//                sunrise: sunrise,
//                sunset: sunset,

              })
    } catch(error){
        console.log(error)
    }
  }
  getWeatherFor5Days = async (latitude, longitude) => {
    try{
            const data5days = await axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather+"&units=metric")

            this.setState({
              data5days : data5days,
            })
    } catch(error){
        console.log(error)
    }
  }

  getLocation = async () => {
    try{
       await Location.requestForegroundPermissionsAsync();
      
      let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude)
      this.getWeatherFor5Days(latitude, longitude)

      console.log("getLocation")
    } catch(error){
        console.log(error)
      Alert.alert("very sad:  " +  error)
    }
  }

  componentDidMount(){
    this.getLocation()
  }

  render() {
//const {isLoading, dayData,  temp, temp_min, temp_max, feels_like, condition, description, name, data5days} = this.state;
    const {isLoading, dayData, data5days} = this.state;
    return (
//    <View>
//        <Text>   Hi </Text>
//    </View>
//    {if( !isLoading ){
//        <Loading/>
//
//     } else {
//
//        <Main temp = {Math.round(temp)} feels_like = {Math.round(feels_like)} temp_min = {Math.round(temp_min)} temp_max = {Math.round(temp_max)}  condition = {condition} description={description} name={name}  data5days={data5days} />
//
//    }
//  isLoading ? <Loading/> : <Main dayData={dayData} temp = {Math.round(temp)} feels_like = {Math.round(feels_like)} temp_min = {Math.round(temp_min)} temp_max = {Math.round(temp_max)}  condition = {condition} description={description} name={name}  data5days={data5days} />
      isLoading ? <Loading/> : <Main dayData={dayData} data5days={data5days}/>
    );
  }
}