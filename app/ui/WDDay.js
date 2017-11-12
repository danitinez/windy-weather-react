import React from 'react';

import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import WDDayHeader from './WDDayHeader';
import WDColumnNumbers from './WDColumnNumbers';

export default class WDDay extends React.Component {

  render() {
      const forecastDay = this.props.forecastDay;
      console.log(this.props.forecastDay);
      const blocksViews = forecastDay.forecast.map((weatherBlockData, idx) =>
        <WDColumnNumbers key={idx} position={idx} data={weatherBlockData} t={(idx * 3) - 30} />
      );
      return (
      <View>
        <WDDayHeader date={forecastDay.date} />
        <View style={styles.container}>
          {blocksViews}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  headerStyle: {
    width: '100%'
  }
});
