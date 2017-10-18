
import React, { Component } from 'react';
import {
  Button, View
} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

//https://github.com/FaridSafi/react-native-google-places-autocomplete
export default class PlacesSearch extends Component {

  static navigationOptions = {
    title: 'Search for a place'
  }

  render() {
    const { goBack } = this.props.navigation;
      return (
        <View>
          <Button
            title='back'
            onPress={() => {
              goBack({});
            }}
          />
          <GooglePlacesAutocomplete
            minLength={4}
            fetchDetails
            query={{ key: 'AIzaSyDGXGmGMDb5VPdDZA74ueaN4F32S-6Ut7k' }}
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              console.log(this.props.navigation);
              goBack({ data, details });
            }}
          />
        </View>
    );
  }

}
