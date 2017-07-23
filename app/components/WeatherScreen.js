import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import ColorNumberView from '../ui/ColorNumberView'

export default class WeatherScreen extends React.Component {

  getData() {
    return [
      {
        temperature: 18,
        rain: 14,
        clouds: 12,
        wind: {
          speed: 14,
          degrees: 45
        }
      },
      {
        temperature: 7,
        rain: 1,
        clouds: 0,
        wind: {
          speed: 2,
          degrees: 120
        }
      }
    ];
  }



  render() {
    var a = ["1.2", "4", "3"].map(function(name) {
      return <ColorNumberView key={name} value={name} style={{marginTop:50, marginLeft:50}}/>
      // return <Text>{name}</Text>;
    });
    return (

        <View style={styles.container}>
          <Text style={styles.title}>
            Tauranga
          </Text>
        {a}
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

  title: {
    color: '#E3CA51',
    fontSize: 36
  }
});
