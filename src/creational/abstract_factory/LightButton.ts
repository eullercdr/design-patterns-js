import Button from "./Button";

export default class LightButton implements Button {
  color: string;
  backGroundColor: string;
  constructor() {
    this.color = "white";
    this.backGroundColor = "blue";
  }
}
