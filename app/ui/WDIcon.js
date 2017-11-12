
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
} from 'react-native';

export default class WDIcon extends React.Component {

  render() {
    const icons = {
      clouds: require('../resources/img/clouds.png'),
      thermo: require('../resources/img/thermo_medium.png'),
      wind: require('../resources/img/wind.png'),
      rain: require('../resources/img/rain.png'),
    }

    let textComponent = null;
    if (this.props.onPress != null) {
      textComponent = (
        <TouchableOpacity onPress={this.props.onPress} >
          <Text style={[styles.text, styles.textButton]}>{this.props.title}</Text>
        </TouchableOpacity>);
    } else {
      textComponent = (
        <Text style={styles.text}>{this.props.title}</Text>
      );
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={icons[this.props.type]} />
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
  // mainContainer: {
  //   flex: 1,
  //   alignItems: 'flex-start'
  // },
  container: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
