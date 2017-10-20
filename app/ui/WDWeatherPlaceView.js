import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Alert
} from 'react-native';

import WDColumnNumbers from './WDColumnNumbers';
import WDLocalStorage from '../storage/WDLocalStorage'

export default class WDWeatherPlaceView extends Component {


  removeThisPlace() {

    Alert.alert('saras');
  }

  render() {
    const name = this.props.place.mainText;
    const weatherData = this.props.weatherData;
    const blocksViews = weatherData.map((weatherBlockData, idx) =>
       <WDColumnNumbers key={idx} data={weatherBlockData} />
    );

    return (
      <View style={styles.container}>
        <View>
          <Button
          title='Delete'
          onPress={this.removeThisPlace}
          />
        </View>
        <Text style={styles.title}>
          {name}
        </Text>

        <ScrollView horizontal style={styles.blocksContainer}>
          {blocksViews}
        </ScrollView>
      </View>
    );
  }

}

//http://paletton.com/#uid=11q0u0kupp-5SuzkAsyGojyWYcd
const styles = StyleSheet.create({
containerActions: {
  flexDirection: 'row',
  alignItems: 'center'
},
container: {
  flex: 1,
  backgroundColor: '#5EF5C8',
  padding: 30,
  marginTop: 10,
  alignItems: 'center'
},
blocksContainer: {
  width: '100%',
  flexDirection: 'row',
},
title: {
  color: '#210226',
  fontSize: 36
}
});
