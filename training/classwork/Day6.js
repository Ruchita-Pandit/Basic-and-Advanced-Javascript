/*"use strict"
greet("Priya");
greet("Aarav");
function greet(name) {
  console.log("Hello, " + name + "!");
}
*/

// hoisting : 
// use strict : 

/*function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log(result);

// Use the return value directly
console.log(add(10, 20));

// Compose — one function's output feeds another
console.log(add(add(1, 2), add(3, 4)));

// Functions without return give back undefined
function silent() {
  console.log("doing stuff");
}
const x = silent();
console.log(x);*/

/*function add(a, b) { 
    return a + b; 
}
console.log(add(5, 3));

function silent() { 
    console.log("hi"); 
}
const x = silent();
console.log(x)

const greet = function(name) {
  return "Hello, " + name;
};
console.log(greet)*/

/*  Arrow fun
// Full form
const add = (a, b) => {
  return a + b;
};

// Implicit return — single expression, no braces
const add2 = (a, b) => a + b;

// Single param — parens optional
const square = x => x * x;

// Zero params — keep ()
const greet = () => "Hello!";

console.log(add(2, 3));
console.log(square(4));
console.log(greet());*/

// Default parameter — used when arg is undefined
/*function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet("Anaya"));
console.log(greet());

// Multiple defaults
const calculatePrice = (price, taxRate = 0.18, discount = 0) => {
  return price * (1 + taxRate) - discount;
};

console.log(calculatePrice(1000));
console.log(calculatePrice(1000, 0.18, 100));*/

/*const firstName = "Ruchita";
const greet = function(name) {
  return "Hello, " + name;
}
console.log(greet(firstName));*/

function add1(a,b){
    return a+b;
}
const add2 = (a, b) => {
  return a + b;
};

function square1(a){
    return a*a;
}
const square2 = x => x * x;

function greet1(){
    return "Hello!";
}
const greet2 = () => "Hello!";

console.log(add1(1, 2));
console.log(add2(2, 3));
console.log("\n")
console.log(square1(4));
console.log(square2(4));

console.log('\n')
console.log(greet1());
console.log(greet2());
