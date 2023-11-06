import React, { useState } from 'react';
import { View, StyleSheet, Button} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {

  const [pickedLocation, setPickedLocation] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const navigation = useNavigation();

  const pickLocationHandler = event => {
    setPickedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude
    });
    pickedLocation !== null ? setButtonDisabled(false): null;
  };
  const submitLocation = () => {
    navigation.navigate('Main', { pickedLocation }); // Navigate back and send pickedLocation
    };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onPress={pickLocationHandler}>
        {pickedLocation && <Marker coordinate={pickedLocation} />}
      </MapView>
      <Button title="Submit Location" onPress={submitLocation}  disabled={buttonDisabled}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: '100%',
    height: '95%'
  }
});

export default MapScreen;