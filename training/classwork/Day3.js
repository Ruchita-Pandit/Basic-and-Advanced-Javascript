/*console.log("Add : ",10+3);
console.log("Multiply : ",10*3);
console.log("Modulo : ",10%3);

let x=1;
x++;
console.log("Increment: ",x);

console.log("Exponent : ",2**8);
console.log("42%2===0 : ",(42%2===0));*/

//--------  Assianment Operator -------------------------------------------------------------------------------------------------------

/*let a=1;
a++;
console.log("Increment: ",a);

let b=28;
b-=2;
console.log("Decrement: ",b);

let c=1;
c*=2;
console.log("Multiplication: ",c);

let d=12;
d/=4;
console.log("Division: ",d);*/

//----  Comparision -------------------------------------------------------------------------------------------------------------------

/*const a=5;
const b="5";
console.log(a==b);
console.log(a===b);

const x=0;
console.log(x==false);
console.log(x===false);

console.log(null==undefined);*/

//----  Logical Operators ---------------------------------------------------------------------------------------------------------------------------

/*console.log(true && false)

const a=5;
const b=2;
const c=10;
const d=20;
console.log(a>b && c<d);

console.log(!true);

let count =0;
console.log(count??10);
console.log(count||10);*/

//----  Terneary Operators ---------------------------------------------------------------------------------------------------------------------------
/*let age=23;
const ageStatus = age >= 18 ? "adult" : "minor"; 
console.log(ageStatus);

let score=45;
const result = score >= 50 ? "pass" : "fail"; 
console.log(result);*/


/*const order = {

  id: 123,

  customer: {

    name: "Alice",

    address: {

      city: "New York"

    }

  }

};
 
// Safe access

console.log(order?.customer?.address?.city);     // "New York"

console.log(order?.customer?.phone?.number);     // undefined (no error!)

console.log(order?.shipping?.address?.street);   // undefined
 
// Method calling

const result = order?.customer?.getName?.();     // calls if getName exists
 
// Form handling - user might enter 0 as valid answer

const userAge = 0;

const ageToShow = userAge ?? "Not provided";  // 0 (correct)
console.log(ageToShow)

const ageWithOr = userAge || "Not provided";  // "Not provided" (wrong!)
 console.log(ageWithOr)

// Config settings

const config = {

  retryCount: 0,      // valid value

  timeout: null,      // not configured

  enableLogging: false // valid false value

};
 
const retries = config.retryCount ?? 3;      // 0 (preserves meaningful 0)
console.log(retries);

const timeout = config.timeout ?? 5000;      // 5000 (null triggers default)
console.log(timeout);

const logging = config.enableLogging ?? true; // false (preserves false)
console.log(logging);*/


//TASK 1 Arithmetic Detective
/*const a=17;
const b=5;

console.log("Add : ",a+b);
console.log("Sub : ",a-b);
console.log("Multiplication : ",a*b);
console.log("Divison : ",a/b);
console.log("Modulus : ",a%b);
console.log("Exponent : ",a**b);*/

//TASK 2 Equality Trap
/*const a=5;
const b="5";
console.log(a==b);
console.log(a===b);

const x=0;
console.log(x==false);
console.log(x===false);

console.log(null==undefined);*/

//TASK 3 Access Control Logic
/*const age=19;
const hasLicense=true;
const hasCar=false;

console.log((age >= 18 && hasLicense)?'Can Drive':'Can not Drive');
console.log((hasLicense||hasCar)?'Can Travel':'Can not Travel');*/

//Try flipping hasLicense to false and re-run. What changes?
// as it is const it will show an error hasLicense Value cant be changed to false

//BONUS TASK
const age=12;
const mood = age >= 18 ? 'adult' : 'minor';
console.log(mood);

let username = null; 
const display = username ?? 'Guest';
console.log(display);
const display2 = username || 'Guest'; 
console.log(display2);

//In a comment, explain what ?? does that || doesn't.
// ?? (nullish coalescing) returns the right-hand value ONLY if the left-hand value is null or undefined,
// whereas || (logical OR) returns the right-hand value for ANY falsy value (0, "", false, null, undefined).