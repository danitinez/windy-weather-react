/**
*/

import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import ColorNumberView from '../ui/ColorNumberView';
import ColorCalculatorTemperature from '../ui/helpers/ColorCalculatorTemperature';
import ColorCalculatorWind from '../ui/helpers/ColorCalculatorWind';
import ColorCalculatorClouds from '../ui/helpers/ColorCalculatorClouds';
import ColorCalculatorRain from '../ui/helpers/ColorCalculatorRain';

export default class WDWeatherPlaceView extends React.Component {

  // constructor(props) {
  //   super(props);
  // console.log(this.props.data);
  // }

  render() {
    // const value = this.props.data.rain;
    // const value = Math.round(Math.random() * 100 - 50);
    const hour = (this.props.position * 4) + 4 + 'h';
    return (
      <View style={styles.container}>
        <ColorNumberView value={hour} />
        <ColorNumberView colorCalculator={new ColorCalculatorTemperature()} value={this.props.t} />
        <ColorNumberView colorCalculator={new ColorCalculatorWind()} value={this.props.t + 30} />
        <ColorNumberView colorCalculator={new ColorCalculatorClouds()} value={this.props.t + 30} />
        <ColorNumberView colorCalculator={new ColorCalculatorRain()} value={(this.props.t + 30)/10} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
