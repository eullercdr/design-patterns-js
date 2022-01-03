import Item from "./Item";

test("Deve criar um item", () => {
  const item = new Item({
    idItem: 1,
    category: "Instrumentos Musicais",
    description: "Guitarra",
    price: 1000,
    width: 100,
    heigth: 50,
    length: 30,
    weight: 8,
  });
  const volume = item.getVolume();
  expect(volume).toBe(0.15);
});
