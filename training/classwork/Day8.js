/*const user = {
  name: "Priya",
  age: 24,
  city: "Jaipur",
  isActive: true,
  hobbies: ["reading", "trekking"],
  address: {
    street: "MI Road",
    pincode: "302001"
  }
};

console.log(user);*/

//===============================================================================================================================================

/*const user = { name: "Priya", age: 24, "favourite color": "blue" };

// Dot — clean
console.log(user.name);              // Priya
console.log(user.age);               // 24

// Bracket — when key is dynamic
const field = "name";
console.log(user[field]);            // Priya  ← variable

// Bracket — when key has spaces/special chars
console.log(user["favourite color"]); // blue   (can't do user.favourite color)

// Property doesn't exist? undefined — no error
console.log(user.email);             // undefined*/

//===============================================================================================================================================

/*const user = { name: "Priya", age: 24 };
// Add
user.email = "priya@example.com";
user.city = "Jaipur";

// Update — same syntax   
// const protects the variable name, NOT the object's contents. user.x = ... still works.
user.age = 25;

// Delete
delete user.city;

console.log(user);
// { name: "Priya", age: 25, email: "priya@example.com" }*/

//===============================================================================================================================================

/*const user = {
  name: "Aarav",
  age: 22,

  greet() {
    return `Hello, I am ${this.name}`;
  },

  birthday() {
    this.age += 1;
    return `Happy birthday! ${this.name} is now ${this.age}`;
  }
};

console.log(user.greet());      // Hello, I am Aarav
console.log(user.birthday());   // Happy birthday! Aarav is now 23
console.log(user.age);          // 23 (changed)*/

//===============================================================================================================================================

/*const u = { name: "Priya" };
console.log(u.name);
const f = "name";
console.log(u[f]);
console.log(u.email);*/

//=========================================================================================================================================

/*const user = { name: "Riya", age: 23, city: "Jaipur", email: "r@x.in" };

// Without destructuring — verbose
const name1 = user.name;
const age1 = user.age;

// WITH destructuring — clean
const { name, age } = user;
console.log(name, age);   // Riya 23

// Rename — pull `name` but call it `userName`
const { name: userName, city } = user;
console.log(userName, city);   // Riya Jaipur

// Default values — when property is missing
const { phone = "N/A" } = user;
console.log(phone);            // "N/A"

// Use it in function parameters
const greet = ({ name, age }) => `Hi ${name}, age ${age}`;
console.log(greet(user));      // Hi Riya, age 23
*/


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