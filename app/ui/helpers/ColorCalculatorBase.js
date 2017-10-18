
export default class ColorCalculatorBase {

  _getColor(value, min, max) {
    //value from 0 to 1
    //value from 0 to 1
    const hue = ((max - (value - min)) * 120).toString(10);
    return ['hsl(', hue, ', 100%, 50%)'].join('');
  }

  getColorForValue(value) {
    var bottom = this.colorValues[0];
    var top = this.colorValues[1];
    for (var values in this.colorValues) {
      // console.log(values);
    }
  }
}
