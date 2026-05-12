import { DioAccount } from ".//DioAccount.js";

export class CompanyAccount extends DioAccount {
  private inputAccountCompany: number;
  private empValueLim: number = 80000.0;

  constructor(name: string, balance: number, inputAccountCompany: number) {
    super(name, balance);
    this.inputAccountCompany = inputAccountCompany;
    if (this.inputAccountCompany === this.getAccountNumber()) {
      this.setStatus(true);
    }
  }

  getEmpValueLim = () => {
    console.log("Limite atual: " + this.empValueLim);
  };

  statusAccount = () => {
    if (this.inputAccountCompany === this.getAccountNumber()) {
      console.log(
        "Conta: " +
          this.inputAccountCompany +
          "\nNome: " +
          this.getName() +
          "\nSaldo: " +
          this.getBalance(),
      );
    } else {
      console.log("Conta informada é invalida");
    }
  };

  getAtual = () => {
    return this.getBalance();
  };

  getLoan = (value: number): void => {
    if (this.inputAccountCompany === this.getAccountNumber()) {
      if (value <= this.empValueLim) {
        console.log("|----------Valor Sacado----------|");
        console.log(
          "Limite liberado: " +
            this.empValueLim +
            "\nValor solicitado: " +
            value,
        );
        this.empValueLim -= value;
        console.log("Limite atual: " + this.empValueLim);
        this.acrescimoBalance(value);
      } else {
        console.log("Você não possui limite disponivel");
      }
    } else {
      console.log("Conta informada é invalida");
    }
  };
}
