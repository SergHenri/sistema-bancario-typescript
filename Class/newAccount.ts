import { DioAccount } from ".//DioAccount.js";

export class NewAccount extends DioAccount {
  private numberAccot: number;

  constructor(name: string, balance: number, numberAccot: number) {
    super(name, balance);
    this.numberAccot = numberAccot;
    if (this.numberAccot === this.getAccountNumber()) {
      this.setStatus(true);
    }
  }

  deposit = (balance: number) => {
    if (this.numberAccot === this.getAccountNumber()) {
      let acresValue: number = 10;
      balance += acresValue;
      this.acrescimoBalance(balance);
      console.log("*------------------------*");
      console.log("Valor acrescido: " + balance);
      console.log("Valor atual: " + this.getBalance());
    } else {
      console.log("Conta informada é invalida");
    }
  };
}
