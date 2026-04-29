//TASK 1 Arithmetic Detective
const a=17;
const b=5;

console.log("Add : ",a+b);
console.log("Sub : ",a-b);
console.log("Multiplication : ",a*b);
console.log("Divison : ",a/b);
console.log("Modulus : ",a%b);
console.log("Exponent : ",a**b);

//TASK 2 Equality Trap
const c=5;
const d="5";
console.log(c==d);
console.log(c===d);

const x=0;
console.log(x==false);
console.log(x===false);

console.log(null==undefined);

//TASK 3 Access Control Logic
const age=19;
const hasLicense=true;
const hasCar=false;

console.log((age >= 18 && hasLicense)?'Can Drive':'Can not Drive');
console.log((hasLicense||hasCar)?'Can Travel':'Can not Travel');

//Try flipping hasLicense to false and re-run. What changes?
// as it is const it will show an error hasLicense Value cant be changed to false

//BONUS TASK
//const age=12;
//const mood = age >= 18 ? 'adult' : 'minor';
//console.log(mood);

let username = null; 
const display = username ?? 'Guest';
console.log(display);
const display2 = username || 'Guest'; 
console.log(display2);

//In a comment, explain what ?? does that || doesn't.
// ?? (nullish coalescing) returns the right-hand value ONLY if the left-hand value is null or undefined,
// whereas || (logical OR) returns the right-hand value for ANY falsy value (0, "", false, null, undefined).