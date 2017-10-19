
import React, { Component } from 'react';
// import {
//   Button,
//   View
// } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import WDLocalStorage from '../storage/WDLocalStorage';


//https://github.com/FaridSafi/react-native-google-places-autocomplete
export default class PlacesSearch extends Component {

  static storage = new WDLocalStorage();

  static navigationOptions = {
    title: 'Search for a place'
  }

  saveNewPlace(data, details) {
    const { goBack } = this.props.navigation;
    const storage = new WDLocalStorage();
    const place = { data, details };
    storage.savePlaceInfo(place, (success, err) => {
      if (success) {
        goBack();
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
            language: 'en'
          }}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            console.log(this.props.navigation);
            this.saveNewPlace(data, details);
          }}
        />
    );
  }

}
