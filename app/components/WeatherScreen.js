import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';

import WeatherBlockView from '../ui/WeatherBlockView';

export default class WeatherScreen extends Component {

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
    const blocksViews = this.getData().map((weatherBlockData, idx) =>
      // return <ColorNumberView key={name} value={name} style={{marginTop:50, marginLeft:50}}/>
       <WeatherBlockView key={idx} data={weatherBlockData} />
      // return <Text>{name}</Text>;
    );
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
            Tauranga
          </Text>
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
    padding: 30,
    marginTop: 20,
    alignItems: 'center'
  },
  blocksContainer: {
    flexDirection: 'row',
  },
  title: {
    color: '#E3CA51',
    fontSize: 36
  }
});
