export default class WDPlace {

  constructor(googleData, googleDetails) {
    this.location = googleDetails.geometry.location; //{ lat: 0, lng: 0 };
    this.mainText = googleData.structured_formatting.main_text;
    this.secondaryText = googleData.structured_formatting.secondary_text;
    this.id = googleDetails.id;
  }

  printToConsole() {
    console.log(`id: ${this.id}, loc: ${JSON.stringify(this.location)}, mainText: ${this.mainText},
      secondaryText: ${this.secondaryText}`);
  }

}
