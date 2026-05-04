//----------    FOR ------------------------------------------------------------------------------------------------------------
/*for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 5; i > 0; i--) {
    console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}*/

//----------    WHILE  ------------------------------------------------------------------------------------------------------------
/*let i = 0;
while (i < 3) { 
    console.log(i); 
    i++; 
}*/

//----------    Do WHILE  ------------------------------------------------------------------------------------------------------------
/*let n = 10;
do { 
    console.log(n); 
    n++; 
} while (n < 5);*/

//----------    BREAK & CONTINUE  ------------------------------------------------------------------------------------------------------------
/*for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}*/

/*for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}*/

//----------    FOR Of ARRAY & STRING  ------------------------------------------------------------------------------------------------------------
/*const fruits = ["apple", "banana", "mango"];
for (const f of fruits) {
    console.log(f);
}

for (const ch of "Priya"){
    console.log(ch);
}*/

//----------    FOR in OBJECT & KEYS  ------------------------------------------------------------------------------------------------------------
/*const s = { name: "Aarav", age: 22 };
for (const k in s) {
    console.log("Key : ",k);
}

for (const k in s) {
    console.log("Key : ",k," ; Value : ",s[k]);
}*/

/*let i = 0;
while (i < 5) {
  console.log(i);
  // ???
}*/

/*const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let str = "Priya";

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}*/

const s = { name: "Aarav", age: 22 };
 
// Method 1: for loop with Object.keys()
const keys = Object.keys(s);
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}
// Output:
// name
// age
 
 
 
// Method 2: Access values using keys
const eys = Object.keys(s);
for (let i = 0; i < eys.length; i++) {
    console.log(s[eys[i]]);
}
// Output:
// Aarav
// 22
 
 
 
 
// Method 3: Print both key and value
for (let i = 0; i < ys.length; i++) {
    console.log(ys[i] + ": " + s[keys[i]]);
}
// Output:
// name: Aarav
// age: 22
 
