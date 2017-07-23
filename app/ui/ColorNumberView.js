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
      minColor: 0,
      maxColor: 40,
      value: Math.random()*40
    }
  }

  //https://stackoverflow.com/questions/7128675/from-green-to-red-color-depend-on-percentage

  getColor(value, min, max){
    //value from 0 to 1
    var hue=((max-(value-min))*120).toString(10);
    return ["hsl(",hue,",100%,50%)"].join("");
  }


  render() {

    var minColor = this.state.minColor;
    var maxColor = this.state.maxColor;
    var value = this.state.value;

    var color = this.getColor(minColor, maxColor, value)

    return (
        <View style={[styles.container, {backgroundColor: color}]}>
          <Text style={{flex:1, justifyContent: 'space-between'}}>{this.props.value}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 30,
    height:30
  }
});
