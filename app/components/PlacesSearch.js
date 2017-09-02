
import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class PlacesSearch extends Component {

  static navigationOptions = {
    title: 'Search Place'
  }

  render() {
      return <GooglePlacesAutocomplete />;
  }

}
