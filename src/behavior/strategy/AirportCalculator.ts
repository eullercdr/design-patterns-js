import Period from "./Period";
import TicketCalculator from "./TicketCalculator";

export default class AirportCalculator implements TicketCalculator {
  dailyRate = 50;
  calculate(period: Period): number {
    const diffInDays = period.getDifferenceInDays();
    return this.dailyRate * diffInDays;
  }
}
