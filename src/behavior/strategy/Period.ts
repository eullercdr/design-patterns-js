export default class Period {
  constructor(readonly start: Date, readonly end: Date) {}

  getDifferenceInMiliseconds() {
    return this.end.getTime() - this.start.getTime();
  }

  getDifferenceInHours() {
    return this.getDifferenceInMiliseconds() / (1000 * 60 * 60);
  }

  getDifferenceInDays() {
    return this.getDifferenceInMiliseconds() / (1000 * 60 * 60 * 24);
  }
}
