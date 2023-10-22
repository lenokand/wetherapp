import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

export const CityInput = ({ onCitySubmit }) => {
  const [city, setCity] = useState('');

  const handleCitySubmit = () => {
    onCitySubmit(city);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={handleCitySubmit} />
    </View>
  );
};