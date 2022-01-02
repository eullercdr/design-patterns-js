import AirportCalculator from "./AirportCalculator";
import BeachCalculator from "./BeachCalculator";
import ShoppingCalculator from "./ShooppingCalculator";
import TicketCalculator from "./TicketCalculator";

export default class TicketCalculatorFactory {
  static create(location: string): TicketCalculator {
    switch (location) {
      case "shopping":
        return new ShoppingCalculator();
      case "airport":
        return new AirportCalculator();
      case "beach":
        return new BeachCalculator();
      default:
        throw new Error("Unknown calculator type: " + location);
    }
  }
}
