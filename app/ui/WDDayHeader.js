/**
*/

import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export class WDDayHeader extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Monday</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 30
  }
});
