import ColorCalculatorBase from './ColorCalculatorBase';

export default class ColorCalculatorWind extends ColorCalculatorBase {

  constructor() {
    super();
    this.colorValues = [
      { v: 0, h: 182, s: 68, l: 100 },
      { v: 15, h: 182, s: 70, l: 50 },
      { v: 32, h: 115, s: 70, l: 50 },
      { v: 50, h: 10, s: 100, l: 50 },
      { v: 51, h: 360, s: 100, l: 60 },
      { v: 120, h: 265, s: 100, l: 60 },
      { v: 250, h: 265, s: 100, l: 60 }
    ];
  }

}
