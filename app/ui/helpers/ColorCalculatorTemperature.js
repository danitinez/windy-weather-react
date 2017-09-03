import ColorCalculatorBase from './ColorCalculatorBase'

export default class ColorCalculatorTemperature extends ColorCalculatorBase {

  constructor() {
    super();
    this.colorValues = [
      { t: -30, h: 177, s: 65, l: 0 },
      { t: 0, h: 177, s: 65, l: 60 },
      { t: 40, h: 0, s: 65, l: 60 }
    ];
  }

}
