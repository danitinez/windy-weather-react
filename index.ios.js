'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
import {
  // NavigatorIOS,
  // StyleSheet,
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import WeatherScreen from './app/components/WeatherScreen';
import PlacesSearch from './app/components/PlacesSearch';

const App = StackNavigator({
  Home: { screen: WeatherScreen },
  PlacesSearch: { screen: PlacesSearch }
});

AppRegistry.registerComponent('windyDay', () => App);
