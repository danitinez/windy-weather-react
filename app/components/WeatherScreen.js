//Color Scheme http://www.colourlovers.com/palette/4533009/seawaves

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Alert
} from 'react-native';
import WDLocalStorage from '../storage/WDLocalStorage';

// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//
import WDWeatherPlaceView from '../ui/WDWeatherPlaceView';

export default class WeatherScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: 'Your Places',
      headerRight:
        <Button
        title="Add"
          onPress={() =>
          navigate('PlacesSearch')
        }
        />
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
  }

  componentDidMount() {
    WDLocalStorage.getPlaces()
    .then((places) => {
      console.log('Places:');
      console.log(places);
      this.setState({
        places
      });
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Error', error);
    });
  }

  getData() {
    const defDict = {
      temperature: 18,
      rain: 14,
      clouds: 12,
      wind: {
        speed: 14,
        degrees: 45
      }
    };

    const dict = [];

    for (let i = 0; i < 30; i++) {
      dict.push(defDict);
    }

    return dict;
  }


  render() {
    const places = (this.state.places != null) ? this.state.places : [];
    const data = this.getData();
    const blocksViews = places.map((place, idx) =>
       <WDWeatherPlaceView key={idx} place={place} weatherData={data} />
    );

    return (
      <View style={styles.container}>

        <ScrollView style={styles.blocksContainer}>
          {blocksViews}
        </ScrollView>
      </View>
    );
  }
}
//http://paletton.com/#uid=11q0u0kupp-5SuzkAsyGojyWYcd
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8EF7C8',
    padding: 30,
    marginTop: 10,
    // alignItems: 'center'
  },
  blocksContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  title: {
    color: '#210226',
    fontSize: 36
  }
});
