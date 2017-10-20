
import React, { Component } from 'react';
import {
  Alert,
  DeviceEventEmitter
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import WDLocalStorage from '../storage/WDLocalStorage';
import WDPlace from '../model/WDPlace';


//https://github.com/FaridSafi/react-native-google-places-autocomplete
export default class WDPlacesSearch extends Component {

  static storage = new WDLocalStorage();

  static navigationOptions = {
    title: 'Search for a place'
  }

  saveNewPlace(data, details) {
    const place = new WDPlace(data, details);
    const { goBack } = this.props.navigation;

    WDLocalStorage.addPlace(place, (success, err) => {
      if (success) {
        DeviceEventEmitter.emit('placesListChanged', {});
        goBack();
      } else {
        Alert.alert(err);
      }
    });
  }

  render() {
    return (
        <GooglePlacesAutocomplete
          minLength={4}
          fetchDetails
          currentLocation
          currentLocationLabel="Current location"
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyBQ57p1t8C98RBU3c1Msu4vlMWNGhXbt7A',
            language: 'en',
            types: '(cities)'
          }}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            console.log(this.props.navigation);
            this.saveNewPlace(data, details);
          }}
        />
    );
  }

}
