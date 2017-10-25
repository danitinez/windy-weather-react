/**
*/

import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class WDDayHeader extends React.Component {

  render() {
    const date = new Date(this.props.date);
    const day = weekDayToDate(date.getDay());
    const formatted = `${day} ${date.getDate()}`;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{formatted}</Text>
      </View>
    );
  }

}

function weekDayToDate(weekDay) {
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[weekDay];
}

const styles = StyleSheet.create({
  text: {
    // backgroundColor: 'blue',
  },
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center'
  }
});
