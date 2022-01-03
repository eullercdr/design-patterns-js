import ItemBuilder from "./ItemBuilder";

export default class Item {
  idItem: number;
  category: string;
  description: string;
  price: number;
  width: number | undefined;
  heigth: number | undefined;
  length: number | undefined;
  weight: number | undefined;
  constructor(itemBuilder: ItemBuilder) {
    this.idItem = itemBuilder.idItem;
    this.category = itemBuilder.category;
    this.description = itemBuilder.description;
    this.price = itemBuilder.price;
    this.width = itemBuilder.width;
    this.heigth = itemBuilder.heigth;
    this.length = itemBuilder.length;
    this.weight = itemBuilder.weight;
  }

  getVolume(): number {
    if (!this.width || !this.heigth || !this.length) {
      return 0;
    }
    return ((((this.width / 100) * this.heigth) / 100) * this.length) / 100;
  }

  getDensity(): number {
    if (!this.weight || !this.getVolume()) {
      return 0;
    }
    return this.weight / this.getVolume();
  }
}
