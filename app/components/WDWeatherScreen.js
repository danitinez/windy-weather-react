//Color Scheme http://www.colourlovers.com/palette/4533009/seawaves

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Button,
  Alert,
  DeviceEventEmitter
} from 'react-native';
import WDLocalStorage from '../storage/WDLocalStorage';
import WDWeatherPlaceView from '../ui/WDWeatherPlaceView';

export default class WDWeatherScreen extends Component {

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
    DeviceEventEmitter.addListener('placesListChanged', () => {
      this.refreshList();
    });
    this.refreshList();
  }

  refreshList() {
    WDLocalStorage.getPlaces()
    .then((places) => {
      this.setState({
        places
      });
    })
    .catch(error => {
      Alert.alert('Error', error);
    });
  }

  render() {
    const places = (this.state.places != null) ? this.state.places : [];
    const placesView = places.map((place, idx) =>
       <WDWeatherPlaceView key={idx} place={place} />
    );

    return (
      <View style={styles.container}>
        <ScrollView style={styles.blocksContainer}>
           {placesView}
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
    padding: 10,
    marginTop: 10,
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
