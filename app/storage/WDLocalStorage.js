import { AsyncStorage } from 'react-native';

export default class WDLocalStorage {

  constructor() {
    this.storeName = 'windyStore';
  }

  static getPlaces() {
    const key = `@${this.storeName}:places`;
    return AsyncStorage.getItem(key)
            .then((placesStored) => {
              const placesStr = (placesStored === undefined ? '[]' : placesStored);
              return JSON.parse(placesStr);
            });
  }

  static addPlace(place, callback = null) {
    const tempPlace = place;
    if (place.forecast === undefined) {
      tempPlace.forecast = this.getTestData();
    }

    const key = `@${this.storeName}:places`;
    AsyncStorage.getItem(key)
    .then((placesStored) => {
      const placesStr = (placesStored == null ? '[]' : placesStored);
      const places = JSON.parse(placesStr);
      places.unshift(tempPlace);
      AsyncStorage.setItem(key, JSON.stringify(places));
    })
    .then(() => {
      if (callback) {
        callback(true, null);
      }
    }, (err) => {
      if (callback) {
        callback(false, err);
      }
    });
  }


  static removePlace(placeId, callback = null) {
    const key = `@${this.storeName}:places`;
    AsyncStorage.getItem(key)
    .then(placesStored => {
      const placesStr = (placesStored == null ? '[]' : placesStored);
      const places = JSON.parse(placesStr);
      const place = places.filter(p => p.id === placeId);
      places.shift(place);
      AsyncStorage.setItem(key, JSON.stringify(places));
    })
    .then(() => {
      if (callback) {
        callback(true, null);
      }
    }, (err) => {
      if (callback) {
        callback(false, err);
      }
    });
  }

  static getPlace(placeId) {
    const key = `@${this.storeName}:places`;
    return AsyncStorage.getItem(key)
    .then(placesStored => {
      const placesStr = (placesStored == null ? '[]' : placesStored);
      const places = JSON.parse(placesStr);
      return places.filter(p => p.id === placeId);
    });
  }

  ////////// Test Data ////////

  static getTestData() {
    const daysData = [];
    let date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    for (let i = 0; i < 10; i++) {
      const dayInfo = this.getTestDay(date);
      daysData.push(dayInfo);
      date = new Date(date.getTime() + (3600 * 24 * 1000));
    }
    return daysData;
  }

  static getTestDay(dayDate) {
    const day = {
      date: dayDate,
      forecast: []
    };

    let counter = 0;
    for (let i = 0; i < 6; i++) {
      counter++;
      const dataDict = {
        temperature: counter * 5,
        rain: counter * 5,
        clouds: counter * 5,
        wind: {
          speed: counter * 5,
          degrees: counter * 3
        }
      };
      day.forecast.push(dataDict);
    }
    return day;
  }
  /// TEST DATA END ///

}
