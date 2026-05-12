import { DioAccount } from ".//DioAccount.js";

export class PeopleAccount extends DioAccount {
  private inputAccount: number;

  constructor(inputAccount: number, name: string, balance: number) {
    super(name, balance);
    this.inputAccount = inputAccount;
    if (this.inputAccount === this.getAccountNumber()) {
      this.setStatus(true);
    }
  }

  statusAccount = () => {
    if (this.inputAccount === this.getAccountNumber()) {
      console.log(
        "Conta: " +
          this.inputAccount +
          "\nNome: " +
          this.getName() +
          "\nSaldo: " +
          this.getBalance(),
      );
    }
  };
}
