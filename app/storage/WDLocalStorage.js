import { AsyncStorage } from 'react-native';

export default class WDLocalStorage {

  constructor() {
    this.storeName = 'windyStore';
  }

  savePlaceInfo(placeDict, callback = null) {
    const name = `@${this.storeName}:place`;
    const stringToSave = JSON.stringify(placeDict);
    AsyncStorage.setItem(name, stringToSave)
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
