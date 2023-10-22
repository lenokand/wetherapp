import React, { useState, useRef} from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';



export default  function  CityInput  ({ onCitySubmit }){

  const [city, setCity] = useState('');
  const cityInputRef = useRef(null);

  const handleCitySubmit = () => {
    // Check if the input is not empty
    if (city.trim() === '') {
      // You can show a message or take other actions for empty input
      alert('Please enter a city name.');
      return;
    }
    onCitySubmit(city);

    setCity(''); // Reset the value in the state to an empty string

    if (cityInputRef.current) {
          cityInputRef.current.clear();
        }


  };

  const handleInputChange = async (text) => {
      setCity(text);

    };

  return (
    <View style={styles.inputBlock}>
          <TextInput
            ref={cityInputRef}
            placeholder="Enter city name"
            value={city}
            onChangeText={handleInputChange}
            style={styles.customInput}
          />
      <Button title="Get Weather" onPress={handleCitySubmit} />

    </View>
  );
};

const styles = StyleSheet.create({
  customInput: {
    fontSize: 20,
    color: "#fff"
  },
  inputBlock:{
    flexDirection: "row",
    gap: 15,
    marginTop: 15,
  }
});
