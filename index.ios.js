'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  AppRegistry,
} from 'react-native';

import WeatherScreen from './app/components/WeatherScreen'

// var styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

// class WindyWeatherApp extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//         style={styles.container}
//         initialRoute={{
//           title: 'Tauranga',
//           component: WeatherScreen,
//         }}/>
//     );
//   }
// }

AppRegistry.registerComponent('windyDay', () => WeatherScreen);
