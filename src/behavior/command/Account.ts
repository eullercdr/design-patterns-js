export default class Account {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  credit(ammount: number): void {
    this.balance += ammount;
  }

  debit(ammount: number): void {
    if (this.balance >= ammount) {
      this.balance -= ammount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}
