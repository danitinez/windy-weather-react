
export default class ColorCalculatorBase {

  getColor(value, low, top) {
    const dv = top.v - low.v;
    const p = (value - low.v) / dv; //proportion
    const dh = top.h - low.h;
    const ds = top.s - low.s;
    const dl = top.l - low.l;

    return `hsl(${low.h + (p * dh)}, ${low.s + (p * ds)}%, ${low.l + (p * dl)}%)`;
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
