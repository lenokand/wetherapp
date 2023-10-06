import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert, StyleSheet, Text, View } from 'react-native';
import Loading from './parts/Loading';
import Main from './parts/Main';
import * as Location from 'expo-location';
import axios from 'axios';

const APIweather = "7347e744f33c5e0d42330920a8d9e4df"

export default  class extends  React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather+'&units=metric')
    // console.log(weather[0].main)
    // const condition = "Clear"
    this.setState({
        isLoading: false, 
        temp: temp, 
        condition: weather[0].main,
        description: weather[0].description,
        // data5days : data5days.data.list,
      })
  }
  getWeatherFor5Days = async (latitude, longitude) => {
    const data5days = await axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon='+ longitude +'&appid='+ APIweather+"&units=metric")
    // console.log(data5days.data.list[8].dt_txt)

   
    // data5days.data.list.forEach(element => {
    //   console.log("ELEMENTS :" + element.dt_txt)
    // });
    // Alert.alert(data5days)
    this.setState({
      // data5days : data5days.data.list,
      data5days : data5days,
    })
 
  }

  getLocation = async () => {
    try{
      // throw Error()
       await Location.requestForegroundPermissionsAsync();
      
      let {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      Alert.alert("yep, latitude:" +  latitude + ` altitude:`+ longitude)
     
      // TODO: API query
      // https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid=7347e744f33c5e0d42330920a8d9e4df&lang={lang}
      // https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={APIweather}
      this.getWeather(latitude, longitude)
      this.getWeatherFor5Days(latitude, longitude)

    } catch(error){
      Alert.alert("very sad" +  error)
    }

    
  }

  componentDidMount(){
    this.getLocation()
  }

  render() {

    const {isLoading, temp, condition, description, data5days} = this.state;

    return (

      isLoading ? <Loading/> : <Main temp = {Math.round(temp)} condition = {condition} description={description} data5days={data5days} />
      
    );

  }
  
}