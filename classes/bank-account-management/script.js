class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero."
    }

    this.transactions.push({
      amount: amount,
      type: "deposit"
    });

    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount >= this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.transactions.push({
      amount: amount,
      type: "withdraw"
    })

    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits =  this.transactions.filter((transaction) => transaction.type === "deposit")
    .map((transaction) => transaction.amount)

    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions.filter((transaction) => transaction.type === "withdraw").map((transaction) => transaction.amount)

    return `Withdrawals: ${withdrawals.join(",")}`
  }
}

const myAccount  = new BankAccount();
myAccount.deposit(100)
myAccount.deposit(350)
myAccount.deposit(90)
myAccount.withdraw(20)
myAccount.withdraw(50)
myAccount.withdraw(100)
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
console.log(myAccount.checkBalance())