/**
*/

import React from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import ColorNumberView from '../ui/ColorNumberView';
import ColorCalculatorTemperature from '../ui/helpers/ColorCalculatorTemperature';

export default class WDWeatherPlaceView extends React.Component {

  // constructor(props) {
  //   super(props);
  // console.log(this.props.data);
  // }

  render() {
    const value = this.props.data.rain;
    return (
      <View style={styles.container}>
        <ColorNumberView colorCalculator={new ColorCalculatorTemperature()} value={value} />
        <ColorNumberView minColor={30} maxColor={20} value={this.props.data.rain} />
        <ColorNumberView minColor={30} maxColor={20} value={this.props.data.clouds} />
        <ColorNumberView minColor={30} maxColor={20} value={this.props.data.wind.speed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
