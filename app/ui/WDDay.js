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
        <ScrollView horizontal>
          {blocksViews}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%'
  }
});
