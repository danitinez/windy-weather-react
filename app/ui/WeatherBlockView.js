/**
*/

import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';



import ColorNumberView from '../ui/ColorNumberView'

export default class WeatherBlockView extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.data)
  }

  render () {
    return (
      <View style={styles.container}>
        <ColorNumberView minColor={0} maxColor={40} value={this.props.data.temperature}/>
        <ColorNumberView minColor={30} maxColor={20} value={this.props.data.rain}/>
        <ColorNumberView minColor={30} maxColor={20} value={this.props.data.clouds}/>
        <ColorNumberView minColor={30} maxColor={20} value={this.props.data.wind.speed}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});
