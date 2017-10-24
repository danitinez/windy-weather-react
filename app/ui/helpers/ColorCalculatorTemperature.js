import ColorCalculatorBase from './ColorCalculatorBase';

export default class ColorCalculatorTemperature extends ColorCalculatorBase {

  constructor() {
    super();
    this.colorValues = [
      { v: -30, h: 182, s: 68, l: 50 },
      { v: 0, h: 182, s: 68, l: 100 },
      { v: 1, h: 60, s: 68, l: 100 },
      { v: 27, h: 0, s: 70, l: 50 },
      { v: 2, h: 360, s: 57, l: 50 },
      { v: 55, h: 260, s: 57, l: 50 }
    ];
  }

}
