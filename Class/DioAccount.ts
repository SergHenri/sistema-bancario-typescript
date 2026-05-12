export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number = 4000426;
  private balance: number = 0;
  private status: boolean = false;

  constructor(name: string, balance: number) {
    ((this.name = name), (this.balance = balance));
  }

  setName = (name: string): void => {
    this.name = name;
  };
  getName = () => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };
  setBalance = (balance: number) => {
    this.balance = balance;
  };
  getBalance = () => {
    return this.balance;
  };
  setStatus = (status: boolean) => {
    this.status = status;
  };
  getStatus = () => {
    return this.status;
  };

  acrescimoBalance = (acres: number) => {
    this.balance += acres;
  };

  deposit = (balance: number) => {
    if (this.status) {
      this.balance += balance;
      console.log("\n|------------Depositado------------|");
      console.log(
        "Deposito no valor: R$ " +
          balance +
          " concluido com sucesso" +
          "\nConta: " +
          this.accountNumber +
          "\nValor atual: " +
          this.balance,
      );
      console.log("|__________________________________|\n");
    } else console.log("Conta informada invalida");
  };

  withdraw = (value: number) => {
    if (this.status) {
      if (this.balance >= value) {
        this.balance -= value;
        console.log("\n|------------Sacado------------|");
        console.log(
          "Valor sacado: R$ " +
            value +
            "\nConta: " +
            this.accountNumber +
            "\nValor atual: " +
            this.balance,
        );
        console.log("|______________________________|\n");
      } else {
        console.log(
          "O Valor inserido é maior do que o valor que de saudo que existe na conta",
        );
      }
    } else console.log("Conta informada invalida");
  };
}
