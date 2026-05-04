

//TASK 2
const bankAccount = {
  holder: "Aarav",
  balance: 5000,

  deposit(amount) {
    this.balance += amount;
    return `Amount deposited: ${amount}, Total balance now: ${this.balance}`;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds";
    }
    this.balance -= amount;
    return `Amount withdrawn: ${amount}, Total balance now: ${this.balance}`;
  }
};

console.log(bankAccount.deposit(1000));   // 6000
console.log(bankAccount.withdraw(2000));  // 4000
console.log(bankAccount.withdraw(10000)); // Insufficient funds
