import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class ColorNumber extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      minColor: props.minColor,
      maxColor: props.maxColor,
      value: props.value
    };
  }

  //https://stackoverflow.com/questions/7128675/from-green-to-red-color-depend-on-percentage

  getColor(value, min, max) {
    //value from 0 to 1
    const hue = ((max - (value - min)) * 120).toString(10);
    return ['hsl(', hue, ',100%,50%)'].join('');
  }


  render() {
    // const minColor = this.state.minColor;
    // const maxColor = this.state.maxColor;
    const value = this.state.value;
    let color = '#FFFFFF';
    if (this.props.colorCalculator !== undefined) {
      color = this.props.colorCalculator.getColorForValue(value)
    }

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
          <Text>{this.props.value}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30
  }
});
