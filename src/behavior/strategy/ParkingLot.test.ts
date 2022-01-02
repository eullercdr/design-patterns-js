import ParkingLot from "./ParkingLot";

test("Deve criar um estacionamento", () => {
  const parkingLot = new ParkingLot("airport", 500);
  expect(parkingLot.getSlots()).toBe(500);
});

test("Deve estacionar um carro", () => {
  const parkingLot = new ParkingLot("airport", 500);
  parkingLot.checkin("ABC-1234", new Date("2020-01-01T10:00"));
  expect(parkingLot.getSlots()).toBe(499);
});

test("Deve estacionar o carro por na praia por 2 horas e ao sair o valor deve ser 10, 5 a hora", () => {
  const parkingLot = new ParkingLot("beach", 500);
  parkingLot.checkin("ABC-1234", new Date("2020-01-01T10:00"));
  parkingLot.checkout("ABC-1234", new Date("2020-01-01T12:00"));
  const ticket = parkingLot.getTicket("ABC-1234");
  expect(ticket.price).toBe(10);
});

test("Deve estacionar o carro no shopping 7 horas, 10 reais as primeiras 3 horas e as proximas 3 reais", () => {
  const parkingLot = new ParkingLot("shopping", 500);
  parkingLot.checkin("ABC-1234", new Date("2020-01-01T10:00"));
  parkingLot.checkout("ABC-1234", new Date("2020-01-01T17:00"));
  const ticket = parkingLot.getTicket("ABC-1234");
  expect(ticket.price).toBe(22);
});

test("Deve estacionar o carro no shopping por 3 dias e o valor deverá ser 150", () => {
  const parkingLot = new ParkingLot("airport", 500);
  parkingLot.checkin("ABC-1234", new Date("2020-01-01T10:00"));
  parkingLot.checkout("ABC-1234", new Date("2020-01-04T10:00"));
  const ticket = parkingLot.getTicket("ABC-1234");
  expect(ticket.price).toBe(150);
});
