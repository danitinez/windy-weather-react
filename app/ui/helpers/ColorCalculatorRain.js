import ColorCalculatorBase from './ColorCalculatorBase';

export default class ColorCalculatorWind extends ColorCalculatorBase {

  constructor() {
    super();
    this.colorValues = [
      { v: 0, h: 214, s: 70, l: 100 },
      { v: 10, h: 214, s: 70, l: 60 },
      { v: 40, h: 254, s: 68, l: 60 },
      { v: 200, h: 254, s: 68, l: 60 },
    ];
  }

}
