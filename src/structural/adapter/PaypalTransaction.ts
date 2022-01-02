export default class PaypalTransaction {
  constructor(
    readonly id: string,
    readonly amount: number,
    readonly status: string
  ) {}
}
