import OrderStatus from "./OrderStatus";
import PendingStatus from "./PendingStatus";

export default class Order {
  status: OrderStatus;
  constructor() {
    this.status = new PendingStatus(this);
  }

  confirm() {
    this.status.confirm();
  }

  canceled() {
    this.status.cancel();
  }
}
