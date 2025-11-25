//Question 1: Closure-Based Counter Implementation
function createCounter () {
    let count=0
    function increment(){
        count++
        console.log(`increment count is ${count}`)
    }
     function decrement(){
        count--
        console.log(`decrement count is ${count}`)
    }
   return {increment,decrement}
}
// const counter = createCounter();
// counter.increment(); // Output: Current count: 1
// counter.increment(); // Output: Current count: 2
// counter.decrement(); // Output: Current count: 1


//Question 2: Simulating Private Variables with Closures

function createBankAccount(initialBalance = 50) {
  let balance = initialBalance >= 0 ? initialBalance : 0;
  return {
    deposit(amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Deposit amount must be a positive number');
      }
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Withdrawal amount must be a positive number');
      }
      if (amount > balance) {
        throw new Error('Insufficient funds');
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined

