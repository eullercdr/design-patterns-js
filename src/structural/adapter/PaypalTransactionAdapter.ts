import PaypalTransaction from "./PaypalTransaction";
import Transaction from "./Transaction";

export default class PaypalTransactionAdapter implements Transaction {
  trackNumber: string;
  amount: number;
  status: string;
  constructor(readonly paypalTransaction: PaypalTransaction) {
    this.trackNumber = paypalTransaction.id;
    this.amount = paypalTransaction.amount;
    this.status = this.convertStatus(paypalTransaction.status);
  }

  convertStatus(status: string): string {
    switch (status) {
      case "P":
        return "pending";
      case "S":
        return "paid";
      case "C":
        return "canceled";
      default:
        return "";
    }
  }
}
