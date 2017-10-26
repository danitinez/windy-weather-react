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


export default class WDColumnIcons extends React.Component {


  /////// Icon creation /////
  createIcon(type, title, onPress = null) {
    const icons = {
      clouds: require('../resources/img/clouds.png'),
      thermo: require('../resources/img/thermo_medium.png'),
      wind: require('../resources/img/wind.png'),
      rain: require('../resources/img/rain.png'),
    }

    let text = null;
    if (onPress != null) {
      text = (
        <TouchableOpacity onPress={onPress} >
          <Text style={[styles.text, styles.textButton]}>{title}</Text>
        </TouchableOpacity>);
    } else {
      text = (
        <Text style={styles.text}>{title}</Text>
      );
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={icons[type]} />
        {text}
      </View>
    );
  }

  /////// END Icon creation /////

  render() {
    const icons = [
      this.createIcon('thermo', '(C)', () => { Alert.alert('Sarasa'); }),
      this.createIcon('clouds', '(%)', null)
    ];
    return (
      <View style={styles.mainContainer}>
        {icons}
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
