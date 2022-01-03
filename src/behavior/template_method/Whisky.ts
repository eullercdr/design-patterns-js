import TaxItem from "./TaxItem";

export default class Whisky extends TaxItem {
  constructor(readonly description: string, readonly price: number) {
    super("Whisky", description, price);
  }

  getTaxRate(): number {
    return 20;
  }
}
