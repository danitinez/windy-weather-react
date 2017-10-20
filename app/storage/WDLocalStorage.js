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
    const key = `@${this.storeName}:places`;
    AsyncStorage.getItem(key)
    .then((placesStored) => {
      const placesStr = (placesStored == null ? '[]' : placesStored);
      const places = JSON.parse(placesStr);
      places.unshift(place);
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
    then((placesStored) => {
      const placesStr = (placesStored == null ? '[]' : placesStored);
      const places = JSON.parse(placesStr);
    });
  }

}
