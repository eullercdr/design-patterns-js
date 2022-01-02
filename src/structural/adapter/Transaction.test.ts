import PaypalTransaction from "./PaypalTransaction";
import PaypalTransactionAdapter from "./PaypalTransactionAdapter";
import StripeTransaction from "./StripeTransaction";
import StripeTransactionAdapter from "./StripeTransactionAdapter";

test("Deve criar uma transação do stripe", async () => {
  const stripeTransaction = new StripeTransaction("AHN65ABCDE", 1000, 2);
  expect(stripeTransaction.code).toBe("AHN65ABCDE");
});

test("Deve criar uma transação do Paypal", () => {
  const paypalTransaction = new PaypalTransaction("786789", 1000, "S");
  expect(paypalTransaction.id).toBe("786789");
});

test("Deve criar uma transação apartir do Stripe", () => {
  const stripeTransaction = new StripeTransaction("AHN65ABCDE", 1000, 2);
  const transaction = new StripeTransactionAdapter(stripeTransaction);
  expect(transaction.trackNumber).toBe("AHN65ABCDE");
  expect(transaction.amount).toBe(1000);
  expect(transaction.status).toBe("paid");
});

test("Deve criar uma transação apartir do Paypal", () => {
  const paypalTransaction = new PaypalTransaction("786789", 1000, "S");
  const transaction = new PaypalTransactionAdapter(paypalTransaction);
  expect(transaction.trackNumber).toBe("786789");
  expect(transaction.amount).toBe(1000);
  expect(transaction.status).toBe("paid");
});
