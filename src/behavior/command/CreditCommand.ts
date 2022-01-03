import Account from "./Account";
import Command from "./Command";

export default class CreditCommand implements Command {
  constructor(readonly account: Account, readonly ammount: number) {}

  execute(): void {
    this.account.credit(this.ammount);
  }
}
