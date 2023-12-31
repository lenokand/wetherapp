import React, { useState, useRef, useEffect } from 'react';
import { TextInput, Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation, useRoute} from '@react-navigation/native';

export default  function  CityInput  ({ onCitySubmit, onMapSubmit}){

  const [city, setCity] = useState('');
  const [mapCoordinates, setMapCoordinates] = useState({});

  const cityInputRef = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();

  const handleCitySubmit = () => {
    // Check if the input is not empty
    if (city.trim() === '') {
      alert('Please enter a city name.');
      return;}

      onCitySubmit(city);

    setCity(''); // Reset the value in the state to an empty string
    if (cityInputRef.current) {
          cityInputRef.current.clear();
        }
  };

    const handleInputChange = async (text) => {
      setCity(text);
    };

 useEffect(() => {
    if (route.params && route.params.pickedLocation) {
          const {latitude, longitude} = route.params.pickedLocation
          setMapCoordinates({latitude, longitude});
          console.log(mapCoordinates, "cityinput", route.params.pickedLocation, {latitude, longitude})

    }
  }, [route.params]);

    useEffect(() => {
      if (mapCoordinates.latitude && mapCoordinates.longitude) {
        console.log(mapCoordinates, "cityinput");
        onMapSubmit(mapCoordinates);
      }
    }, [mapCoordinates]);



  return (
    <View style={styles.inputBlock}>
        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
            <MaterialCommunityIcons name="google-maps" size={30} color="white" />
        </TouchableOpacity>
          <TextInput
            ref={cityInputRef}
            placeholder="Enter city name"
            value={city}
            onChangeText={handleInputChange}
            style={styles.customInput}
            placeholderTextColor="#fff"
          />
          <TouchableOpacity  onPress={handleCitySubmit} style={styles.customButton} style={styles.customButton}>
               <Text style={styles.buttonText}>Get Weather</Text>
          </TouchableOpacity >

    </View>
  );
};

const styles = StyleSheet.create({
  customInput: {
    fontSize: 20,
    color: "#fff",
    backgroundColor:"#955fa5ac",
    borderRadius: 5,
    padding: 3,
    flexGrow: 1
  },
  inputBlock:{
    flexDirection: "row",
    paddingRight: 10,
    gap: 15,
    marginTop: 15,
  },
  customButton:{
        backgroundColor:"#fff",
        color: "#63468f",
        padding: 8,
        borderRadius: 5,
  },
  buttonText:{
    color:"#63468f",
    fontWeight: '700'
  }

});
