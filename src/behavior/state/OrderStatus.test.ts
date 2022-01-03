import Order from "./Order";

test("Deve criar um pedido com status pendente", () => {
  const order = new Order();
  expect(order.status.value).toBe("pending");
});

test("Deve mudar o status do pedido para confirmado", () => {
  const order = new Order();
  order.confirm();
  expect(order.status.value).toBe("confirmed");
});

test("Deve mudar o status do pedido para cancelado", () => {
  const order = new Order();
  order.canceled();
  expect(order.status.value).toBe("cancelled");
});

test("Se o pedido estiver cancelado, não deve mudar o status para confirmado", () => {
  const order = new Order();
  order.canceled();
  expect(() => order.confirm()).toThrow(
    new Error("O pedido já está cancelado")
  );
});
