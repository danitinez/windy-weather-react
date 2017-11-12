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

import WDWeatherScreen from './app/components/WDWeatherScreen';
import WDPlacesSearch from './app/components/WDPlacesSearch';

const App = StackNavigator({
  Home: { screen: WDWeatherScreen },
  PlacesSearch: { screen: WDPlacesSearch }
});

AppRegistry.registerComponent('windyDay', () => App);
