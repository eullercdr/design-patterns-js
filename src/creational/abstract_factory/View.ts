import AbstractWidgetFactory from "./AbstractWidgetFactory";
import LightButton from "./LightButton";
import LigthLabel from "./LightLabel";

export default class View {
  label: LigthLabel;
  button: LightButton;
  constructor(abstractFactory: AbstractWidgetFactory) {
    this.label = abstractFactory.createLabel();
    this.button = abstractFactory.createButton();
  }
}
