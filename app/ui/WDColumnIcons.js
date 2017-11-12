/**
* https://www.flaticon.com/free-icon/umbrella-opened-shape_55359
* Remember to credit the icon author
*/

import React from 'react';
import {
  StyleSheet,
  View,
  Alert
} from 'react-native';
import WDIcon from './WDIcon';


export default class WDColumnIcons extends React.Component {

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
  mainContainer: {
    flex: 1,
    alignItems: 'flex-start'
  }
});
