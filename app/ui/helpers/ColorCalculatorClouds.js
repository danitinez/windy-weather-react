import ColorCalculatorBase from './ColorCalculatorBase';

export default class ColorCalculatorClouds extends ColorCalculatorBase {

  constructor() {
    super();
    this.colorValues = [
      { v: 0, h: 0, s: 0, l: 100 },
      { v: 100, h: 0, s: 0, l: 40 }
    ];
  }

}
