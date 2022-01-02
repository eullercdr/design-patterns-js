import Button from "./Button";

export default class DarkButton implements Button {
  color: string;
  backGroundColor: string;
  constructor() {
    this.color = "white";
    this.backGroundColor = "black";
  }
}
