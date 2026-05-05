const name = "Priya";
const age = 24;

// Old way — string concatenation
const msg1 = "Hello, " + name + ". You are " + age + " years old.";

// Template literal — clean
const msg2 = `Hello, ${name}. You are ${age} years old.`;

// Multiline — no \n
const address = `MI Road
Jaipur 302001
Rajasthan`;

// Expressions inside ${...}
const total = 1180;
const summary = `Total ${total >= 1000 ? "qualifies" : "doesn't qualify"} for free shipping.`;

// Math, function calls
const taxed = `Final price: ₹${(1000 * 1.18).toFixed(2)}`;


const colors = ["red", "green", "blue"];

// Basic
const [first, second, third] = colors;
console.log(first, second, third);   // red green blue

// Skip with comma
const [, , last] = colors;
console.log(last);                   // blue

// Default values
const [a, b, c, d = "yellow"] = colors;
console.log(d);                      // yellow (filled in)

// Swap variables — no temp needed
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);                   // 2 1

// Rest pattern — gather the rest
const nums = [1, 2, 3, 4, 5];
const [head, ...tail] = nums;
console.log(head);    // 1
console.log(tail);    // [2, 3, 4, 5]