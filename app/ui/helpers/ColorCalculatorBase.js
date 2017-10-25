
export default class ColorCalculatorBase {

  getColor(value, low, top) {
    //value from 0 to 1
    //value from 0 to 1
    const dv = top.v - low.v;
    const p = (value - low.v) / dv; //proportion
    const dh = top.h - low.h;
    const ds = top.s - low.s;
    const dl = top.l - low.l;

    //const hue = ((max - (value - min)) * 120).toString(10);
    const hsl = `hsl(${low.h + (p * dh)}, ${low.s + (p * ds)}%, ${low.l + (p * dl)}%)`;
    return hsl;
  }

  getColorForValue(value) {
    let colorsLower = null;
    let colorsUpper = null;
    for (let i = 1; i < this.colorValues.length; i++) {
      colorsLower = this.colorValues[i - 1];
      colorsUpper = this.colorValues[i];
      if (value < colorsUpper.v) {
        break;
      }
    }
    return this.getColor(value, colorsLower, colorsUpper);
  }
}
