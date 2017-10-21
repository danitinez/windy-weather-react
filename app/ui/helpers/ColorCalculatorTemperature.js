import ColorCalculatorBase from './ColorCalculatorBase';

export default class ColorCalculatorTemperature extends ColorCalculatorBase {

  constructor() {
    super();
    this.colorValues = [
      { v: -30, h: 177, s: 65, l: 0 },
      { v: 0, h: 177, s: 65, l: 60 },
      { v: 40, h: 0, s: 65, l: 60 }
    ];
  }

}
