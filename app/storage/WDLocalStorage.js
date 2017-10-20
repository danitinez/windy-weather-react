import { AsyncStorage } from 'react-native';

export default class WDLocalStorage {

  constructor() {
    this.storeName = 'windyStore';
  }

  static addPlace(place, callback = null) {
    const key = `@${this.storeName}:places`;
    // const stringToSave = JSON.stringify(place);

    AsyncStorage.getItem(key)
    .then((placesStored) => {
      console.log('placesStoredString:');
      console.log(placesStored);
      const placesStr = (placesStored == null ? '[]' : placesStored);
      const places = JSON.parse(placesStr);
      places.push(place);
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
    }
    );
  }

}
