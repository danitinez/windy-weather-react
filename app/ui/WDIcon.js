
/**
* https://www.flaticon.com/free-icon/umbrella-opened-shape_55359
* Remember to credit the icon author
*/

import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class WDIcon {

  render() {
    const icons = {
      clouds: require('../resources/img/clouds.png'),
      thermo: require('../resources/img/thermo_medium.png'),
      wind: require('../resources/img/wind.png'),
      rain: require('../resources/img/rain.png'),
    }

    let text = null;
    if (this.props.onPress != null) {
      text = (
        <TouchableOpacity onPress={this.props.onPress} >
          <Text style={[styles.text, styles.textButton]}>{this.props.title}</Text>
        </TouchableOpacity>);
    } else {
      text = (
        <Text style={styles.text}>{this.props.title}</Text>
      );
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={icons[this.props.type]} />
        {text}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    color: 'blue',
    fontSize: 12
  },
  text: {
    fontSize: 12
  },
  image: {
    tintColor: '#666'
  },
  mainContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
