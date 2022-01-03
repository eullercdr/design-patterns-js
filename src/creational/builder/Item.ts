export default class Item {
  idItem: number;
  category: string;
  description: string;
  price: number;
  width: number;
  heigth: number;
  length: number;
  weight: number;
  constructor({
    idItem,
    category,
    description,
    price,
    width,
    height,
    length,
    weight,
  }: {
    idItem: number;
    category: string;
    description: string;
    price: number;
    width: number;
    height: number;
    length: number;
    weight: number;
  }) {
    this.idItem = idItem;
    this.category = category;
    this.description = description;
    this.price = price;
    this.width = width;
    this.heigth = height;
    this.length = length;
    this.weight = weight;
  }

  getVolume(): number {
    return ((((this.width / 100) * this.heigth) / 100) * this.length) / 100;
  }
}
